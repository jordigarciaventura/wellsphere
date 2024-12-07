"use client";

import MoodWeekCarousel from "@/components/mood/MoodWeekCarousel";
import { useState } from "react";

type TabName = "my-tasks" | "suggested" | "challenges";

interface HomeContentProps {
  moods: any; // Replace 'any' with the correct type for moods
  date: Date;
}

export default function HomeContent({ moods, date }: HomeContentProps) {
  const [activeTab, setActiveTab] = useState<TabName>("my-tasks");

  const taskCards: Record<
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

  return (
    <div className="container">
      <MoodWeekCarousel moods={moods} date={date} readonly />
      <div className="content-wrapper">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "my-tasks" ? "active" : ""}`}
            onClick={() => setActiveTab("my-tasks")}
          >
            My Tasks
          </button>
          <button
            className={`tab ${activeTab === "suggested" ? "active" : ""}`}
            onClick={() => setActiveTab("suggested")}
          >
            Suggested
          </button>
          <button
            className={`tab ${activeTab === "challenges" ? "active" : ""}`}
            onClick={() => setActiveTab("challenges")}
          >
            Challenges
          </button>
        </div>
        <div className="task-carousel">
          {taskCards[activeTab].map((card, index) => (
            <div key={index} className={`task-card ${card.color}`}>
              <div className="task-icon">{card.icon}</div>
              {card.badge && <div className="task-badge">{card.badge}</div>}
              <h3>{card.title}</h3>
              <p>{card.date}</p>
            </div>
          ))}
        </div>
        <div className="keep-moving">
          <h2>Keep Moving</h2>
          <p className="subtitle">Today's mood</p>
          <p>
            Lorem ipsum dolor sit amet, er adipiscing elit, sed dianummy nibh
            euismod dolor sit amet, er adipiscing elit, sed dianummy nibh
            euismod.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 20px 20px 40px 20px;
        }
        .content-wrapper {
          background-color: #f8f9fa;
          border-radius: 20px;
          padding: 20px;
          margin-top: 20px;
        }
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .tab {
          padding: 10px 20px;
          margin: 0 5px;
          border: none;
          background-color: transparent;
          border-radius: 20px;
          cursor: pointer;
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .tab.active {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .task-carousel {
          display: flex;
          overflow-x: auto;
          padding: 10px 0 20px 0;
          margin-bottom: -10px; /* Compensate for the added padding */
        }
        .task-card {
          flex: 0 0 auto;
          width: 200px;
          height: 150px;
          margin-right: 15px;
          border-radius: 15px;
          padding: 15px;
          color: white;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .task-card:hover {
          transform: scale(1.05);
        }
        .task-icon {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .task-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: red;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .task-card h3 {
          margin: 0;
          font-size: 18px;
        }
        .task-card p {
          margin: 5px 0 0;
          font-size: 14px;
          opacity: 0.8;
        }
        .green {
          background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
        }
        .blue {
          background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
        }
        .light-green {
          background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%);
        }
        .orange {
          background: linear-gradient(135deg, #ffa726 0%, #f57c00 100%);
        }
        .yellow {
          background: linear-gradient(135deg, #ffd54f 0%, #ffa000 100%);
        }
        .purple {
          background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
        }
        .pink {
          background: linear-gradient(135deg, #e91e63 0%, #c2185b 100%);
        }
        .teal {
          background: linear-gradient(135deg, #009688 0%, #00796b 100%);
        }
        .indigo {
          background: linear-gradient(135deg, #3f51b5 0%, #303f9f 100%);
        }
        .red {
          background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
        }
        .cyan {
          background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
        }
        .brown {
          background: linear-gradient(135deg, #795548 0%, #5d4037 100%);
        }
        .keep-moving {
          margin-top: 30px;
        }
        .keep-moving h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .keep-moving .subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }
        .task-carousel::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        .task-carousel::-webkit-scrollbar-track {
          background: #e8e4f3; /* Light purple background */
          border-radius: 3px;
        }
        .task-carousel::-webkit-scrollbar-thumb {
          background: #7c4dff; /* Vibrant purple thumb */
          border-radius: 3px;
        }
        .task-carousel::-webkit-scrollbar-thumb:hover {
          background: #6200ea; /* Darker purple on hover */
        }
      `}</style>
    </div>
  );
}
