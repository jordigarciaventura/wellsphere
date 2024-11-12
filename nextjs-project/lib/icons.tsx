import EmotionalIcon from "@/lib/icons/EmotionalIcon";
import IntellectualIcon from "@/lib/icons/IntellectualIcon";
import OccupationaIcon from "@/lib/icons/OccupationaIcon";
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
      return OccupationaIcon;
  }
}

export const getMoodIcon = (mood: Mood | null) => {
  switch (mood) {
    case Mood.VerySad:
      return <Angry className="stroke-red-400" />;
    case Mood.Sad:
      return <Frown className="stroke-orange-400" />;
    case Mood.Neutral:
      return <Meh className="stroke-blue-400" />;
    case Mood.Happy:
      return <Smile className="stroke-green-400" />;
    case Mood.VeryHappy:
      return <Laugh className="stroke-teal-400" />;
    default:
      return <CircleDashed />;
  }
};
