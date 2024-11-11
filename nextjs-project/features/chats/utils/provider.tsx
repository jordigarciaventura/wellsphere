"server-only";

import { submitUserMessageAction } from "@/features/chats/actions/ai";
import { getUIStateFromAIState } from "@/features/chats/utils/ai";

import type { Actions, AIState, UIState } from "@/features/chats/types/ai";
import { saveAIStateUseCase } from "@/features/chats/use-cases/chats";
import { createAI, getAIState } from "ai/rsc";

export const AI = createAI<AIState, UIState, Actions>({
  actions: {
    submitUserMessage: submitUserMessageAction,
  },
  onGetUIState: async () => {
    "use server";

    const aiState = getAIState() as AIState;

    if (aiState) {
      const uiState = getUIStateFromAIState(aiState);
      return uiState;
    }
  },
  onSetAIState: async ({ state }) => {
    "use server";

    await saveAIStateUseCase(state);
  },
});
