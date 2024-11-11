"use server";

import AssistantMessage from "@/features/chats/components/AssistantMessage";
import type {
  CustomAIProvider,
  UIStateElement,
} from "@/features/chats/types/ai";
import { createAzure } from "@ai-sdk/azure";
import { createStreamableValue, getMutableAIState, streamUI } from "ai/rsc";
import { env } from "process";

interface SubmitUserMessageActionProps {
  prompt: string;
  userMessageId: string;
  assistantMessageId: string;
}

export async function submitUserMessageAction({
  prompt: content,
  userMessageId,
  assistantMessageId,
}: SubmitUserMessageActionProps) {
  const aiState = getMutableAIState<CustomAIProvider>();

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: userMessageId,
        role: "user",
        content,
      },
    ],
  });

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>;
  let textNode: undefined | React.ReactNode;

  const azure = createAzure({
    resourceName: env.AZURE_RESOURCE_NAME,
    apiKey: env.AZURE_API_KEY,
  });

  const model = azure(env.AZURE_DEPLOYMENT_NAME!);

  const result = await streamUI({
    model,
    maxTokens: 1000,
    temperature: 0.2,
    topP: 0.9,
    presencePenalty: 0.2,
    frequencyPenalty: 0.2,
    initial: <></>,
    system: `\
      You are an assistant`,
    messages: [
      ...aiState.get().messages,
      {
        id: userMessageId,
        role: "user",
        content,
      },
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue("");
        textNode = <AssistantMessage content={textStream.value} />;
      }

      if (done) {
        textStream.done();
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: assistantMessageId,
              role: "assistant",
              content,
            },
          ],
        });
      } else {
        textStream.update(delta);
      }

      return textNode;
    },
    tools: {},
  });

  return {
    id: assistantMessageId,
    display: result.value,
  } as UIStateElement;
}
