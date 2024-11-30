import { Dimension } from "@/types/mood";

export const getDimensionColor = (dimension: Dimension): string => {
  switch (dimension) {
    case Dimension.Physical:
      return "hsl(var(--physical))";
    case Dimension.Emotional:
      return "hsl(var(--emotional))";
    case Dimension.Social:
      return "hsl(var(--social))";
    case Dimension.Intellectual:
      return "hsl(var(--intellectual))";
    case Dimension.Spiritual:
      return "hsl(var(--spiritual))";
    case Dimension.Occupational:
      return "hsl(var(--occupational))";
    default:
      return "hsl(var(--chart-1))";
  }
};
