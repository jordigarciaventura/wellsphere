import { Dimension } from "@/types/mood";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  endDate: Date | null;
  dimensions: Dimension[] | null;
}
