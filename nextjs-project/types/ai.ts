import { submitUserMessageAction } from "@/actions/ai";
import { type CoreMessage } from "ai";

export type AIMessage = CoreMessage & {
  id: string;
};

export type AIRole = "user" | "assistant" | "system";

export interface AIChat {
  id: string;
  title: string;
  createdAt: Date;
  messages: AIMessage[];
}

export type AIState = {
  chatId: string;
  messages: AIMessage[];
};

export type UIState = UIStateElement[];

export type UIStateElement = {
  id: string;
  display: React.ReactNode;
};

export type Actions = {
  submitUserMessage: typeof submitUserMessageAction;
};

type AIProviderProps<AIState = any, UIState = any, Actions = any> = {
  children: React.ReactNode;
  initialAIState?: AIState;
  initialUIState?: UIState;
  /** $ActionTypes is only added for type inference and is never used at runtime **/
  $ActionTypes?: Actions;
};
type AIProvider<AIState = any, UIState = any, Actions = any> = (
  props: AIProviderProps<AIState, UIState, Actions>,
) => Promise<React.ReactElement>;

export type CustomAIProvider = AIProvider<AIState, UIState, Actions>;
