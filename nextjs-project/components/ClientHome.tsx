"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const Typography = dynamic(() => import("@mui/material/Typography"), {
  ssr: false,
});
const Avatar = dynamic(() => import("@mui/material/Avatar"), { ssr: false });
const Box = dynamic(() => import("@mui/material/Box"), { ssr: false });
const Grid = dynamic(() => import("@mui/material/Grid"), { ssr: false });
const Tabs = dynamic(() => import("@mui/material/Tabs"), { ssr: false });
const Tab = dynamic(() => import("@mui/material/Tab"), { ssr: false });
const Card = dynamic(() => import("@mui/material/Card"), { ssr: false });
const CardContent = dynamic(() => import("@mui/material/CardContent"), {
  ssr: false,
});

const StyledTab = dynamic(
  () =>
    import("@mui/material/styles").then((mod) =>
      mod.styled(Tab)(() => ({
        "&.Mui-selected": {
          color: "#00796b",
        },
      })),
    ),
  { ssr: false },
);

export default function ClientHome() {
  const [activeTab, setActiveTab] = useState(0);
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const dates = [21, 22, 23, 24, 25, 26, 27];

  const tasks = {
    myTasks: [
      {
        title: "Daily run",
        type: "Physical",
        date: "October 22, 2024",
        color: "#4CAF50",
      },
      {
        title: "Read 10 pages",
        type: "Intellect",
        date: "October 22, 2024",
        color: "#2196F3",
      },
    ],
    suggested: [
      {
        title: "Meditation",
        type: "Mental",
        date: "October 23, 2024",
        color: "#9C27B0",
      },
      {
        title: "Healthy meal prep",
        type: "Nutrition",
        date: "October 24, 2024",
        color: "#4CAF50",
      },
    ],
    challenges: [
      {
        title: "30-day workout",
        type: "Physical",
        date: "Starts October 25, 2024",
        color: "#4CAF50",
      },
      {
        title: "Learn a new language",
        type: "Intellect",
        date: "Starts October 26, 2024",
        color: "#2196F3",
      },
    ],
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        fontFamily: "Roboto, sans-serif",
        maxWidth: "md",
        mx: "auto",
        bgcolor: "background.paper",
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent="space-between" sx={{ px: 2, py: 1 }}>
        {days.map((day, index) => (
          <Grid
            item
            key={day}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {day}
            </Typography>
            <Box
              sx={{
                mt: 0.5,
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: index === 1 ? "#ff7f50" : "transparent",
              }}
            >
              <Typography variant="caption" fontWeight={600}>
                {dates[index]}
              </Typography>
            </Box>
            {index === 1 && (
              <Typography variant="h6" color="warning.main" sx={{ mt: -1 }}>
                •
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ px: 2, mt: 2 }}>
        <StyledTab label="My Tasks" />
        <StyledTab label="Suggested" />
        <StyledTab label="Challenges" />
      </Tabs>

      <Box sx={{ px: 2, mt: 2, "& > *:not(:last-child)": { mb: 2 } }}>
        {(activeTab === 0
          ? tasks.myTasks
          : activeTab === 1
            ? tasks.suggested
            : tasks.challenges
        ).map((task, index) => (
          <Card
            key={index}
            sx={{
              bgcolor: task.color,
              color: task.color === "#e0f2f1" ? "#00796b" : "white",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Avatar
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    width: 24,
                    height: 24,
                    mr: 1,
                  }}
                ></Avatar>
                <Typography variant="caption">{task.type}</Typography>
              </Box>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                {task.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color:
                    task.color === "#e0f2f1"
                      ? "#00796b"
                      : "rgba(255, 255, 255, 0.7)",
                }}
              >
                {task.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ px: 2, mt: 4 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color="text.primary"
          sx={{ mb: 1 }}
        >
          Keep Moving
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quam sed fugiat, a dolorem soluta
          perferendis nemo cumque. Magnam sint, impedit sapiente fugiat
          necessitatibus corporis eaque, alias earum recusandae voluptas
          repellendus?
        </Typography>
      </Box>
    </Box>
  );
}
