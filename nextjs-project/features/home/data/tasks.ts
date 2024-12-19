type TabName = "my-tasks" | "suggested" | "challenges";

export const taskCards: Record<
  TabName,
  Array<{
    title: string;
    date: string;
    icon: string;
    color: string;
    badge?: string;
  }>
> = {
  "my-tasks": [
    {
      title: "Marathon",
      date: "October 4, 2020",
      icon: "🏃",
      color: "green",
    },
    {
      title: "Java test",
      date: "October 4, 2020",
      icon: "📚",
      color: "blue",
    },
    {
      title: "Gym",
      date: "October 4, 2020",
      icon: "💪",
      color: "light-green",
      badge: "1",
    },
    {
      title: "Study new job",
      date: "October 4, 2020",
      icon: "📖",
      color: "orange",
    },
    {
      title: "Friend's meeting",
      date: "October 4, 2020",
      icon: "👥",
      color: "yellow",
    },
  ],
  suggested: [
    {
      title: "Meditation",
      date: "October 5, 2020",
      icon: "🧘",
      color: "purple",
    },
    {
      title: "Learn a language",
      date: "October 6, 2020",
      icon: "🗣️",
      color: "pink",
    },
    {
      title: "Cook a new recipe",
      date: "October 7, 2020",
      icon: "👨‍🍳",
      color: "teal",
    },
    {
      title: "Read a book",
      date: "October 8, 2020",
      icon: "📘",
      color: "indigo",
    },
  ],
  challenges: [
    {
      title: "30-day fitness",
      date: "Starts Oct 1, 2020",
      icon: "🏋️",
      color: "red",
    },
    {
      title: "Learn to code",
      date: "Starts Oct 15, 2020",
      icon: "💻",
      color: "cyan",
    },
    {
      title: "No sugar month",
      date: "Starts Nov 1, 2020",
      icon: "🍬",
      color: "brown",
    },
  ],
};
