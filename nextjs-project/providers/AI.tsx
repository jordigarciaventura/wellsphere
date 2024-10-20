"server-only";

import { submitUserMessageAction } from "@/actions/ai";
import { getUIStateFromAIState } from "@/lib/ai";

import type { Actions, AIState, UIState } from "@/types/ai";
import { saveAIStateUseCase } from "@/use-cases/chats";
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
