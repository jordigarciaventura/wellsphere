import EmotionalIcon from "@/lib/icons/EmotionalIcon";
import IntellectualIcon from "@/lib/icons/IntellectualIcon";
import OccupationalIcon from "@/lib/icons/OccupationaIcon";
import PhysicalIcon from "@/lib/icons/PhysicalIcon";
import SocialIcon from "@/lib/icons/SocialIcon";
import SpiritualIcon from "@/lib/icons/SpiritualIcon";
import { Dimension, Mood } from "@/types/mood";
import { Angry, CircleDashed, Frown, Laugh, Meh, Smile } from "lucide-react";

export function getDimensionIcon(dimension: Dimension) {
  switch (dimension) {
    case Dimension.Physical:
      return PhysicalIcon;
    case Dimension.Emotional:
      return EmotionalIcon;
    case Dimension.Social:
      return SocialIcon;
    case Dimension.Intellectual:
      return IntellectualIcon;
    case Dimension.Spiritual:
      return SpiritualIcon;
    case Dimension.Occupational:
      return OccupationalIcon;
  }
}

export const getMoodIcon = (mood: Mood | null) => {
  switch (mood) {
    case Mood.VerySad:
      return <Angry color="hsl(var(--mood-verysad))" />;
    case Mood.Sad:
      return <Frown color="hsl(var(--mood-sad))" />;
    case Mood.Neutral:
      return <Meh color="hsl(var(--mood-neutral))" />;
    case Mood.Happy:
      return <Smile color="hsl(var(--mood-happy))" />;
    case Mood.VeryHappy:
      return <Laugh color="hsl(var(--mood-veryhappy))" />;
    default:
      return <CircleDashed />;
  }
};
