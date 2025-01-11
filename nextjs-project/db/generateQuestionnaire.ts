// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatVertexAI } from "@langchain/google-vertexai";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

import { emotionalExamples } from "@/db/questions";
import "dotenv/config";

const dimensions = [
  "emotional",
  "physical",
  "social",
  "spiritual",
  "intellectual",
  "occupational",
];

const OptionSchema = z.object({
  label: z.string(),
  value: z.enum(["a", "b", "c", "d"]),
  score: z.union([z.literal(0), z.literal(0.25), z.literal(0.5), z.literal(1)]),
});

const QuestionSchema = z.object({
  label: z.string(),
  options: z
    .array(OptionSchema)
    .refine(
      (options) =>
        options.length === 4 &&
        options.some((opt) => opt.value === "a") &&
        options.some((opt) => opt.value === "b") &&
        options.some((opt) => opt.value === "c") &&
        options.some((opt) => opt.value === "d"),
      {
        message:
          "The options array must contain exactly four entries with values 'a', 'b', 'c', 'd'",
      },
    ),
});

async function generateQuestion(
  dimension: string = "emotional",
  examples: any[] = emotionalExamples,
) {
  // const llm = new ChatGoogleGenerativeAI();
  // const llm = new ChatVertexAI();
  const llm = new ChatOpenAI();

  const structuredLlm = llm.withStructuredOutput(QuestionSchema);

  const prompt = `Create a ${dimension} wellness question with four concise answer options that assess a specific behavior or habit. The options should be ordered from the worst to the best in terms of health impact. Assign scores of 0, 0.25, 0.5, and 1 to the options, where 0 corresponds to the worst option (most harmful) and 1 corresponds to the best option (most beneficial). Ensure the wording of the options is clear, easy to understand, and relevant to overall health and well-being. Examples:
  ${JSON.stringify(examples, null, 2)}`;

  try {
    const response = await structuredLlm.invoke(prompt);

    return response;
  } catch (error) {
    console.error("Error generating question:", error);
    throw error;
  }
}

generateQuestion()
  .then((question) => {
    console.log("Generated question:", question);
  })
  .catch((error) => {
    console.error("Failed to generate question:", error);
  });
