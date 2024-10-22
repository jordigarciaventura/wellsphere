"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";

const emojis = ["😀", "😊", "😐", "😠", "😢"];
const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const ChevronLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
      fill="currentColor"
    />
  </svg>
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b",
    },
  },
});

interface JournalEntry {
  mood: string;
  content: string;
}

interface JournalEntries {
  [key: string]: JournalEntry;
}

interface JournalProps {
  initialDate?: Date;
}

export default function ClientJournalPage({
  initialDate = new Date(),
}: JournalProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [entries, setEntries] = useState<JournalEntries>({});

  const dateKey = (date: Date) => date.toISOString().split("T")[0];

  const getCurrentEntry = () => {
    const key = dateKey(currentDate) ?? 0;
    return entries[key] || { mood: "", content: "" };
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDayClick = (day: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
    );
  };

  const handleMoodClick = (mood: string) => {
    const key = dateKey(currentDate) ?? "";
    setEntries((prev) => ({
      ...prev,
      [key]: { ...getCurrentEntry(), mood },
    }));
  };

  const handleJournalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = dateKey(currentDate) ?? "";
    setEntries((prev) => ({
      ...prev,
      [key]: { ...getCurrentEntry(), content: event.target.value },
    }));
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    ).getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate();
    const days = [];

    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      days.push(
        <Grid item key={`empty-${i}`}>
          <Box p={1}></Box>
        </Grid>,
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === currentDate.getDate();
      const dayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i,
      );
      const dayEntry = entries[dateKey(dayDate) ?? 0];
      days.push(
        <Grid item key={i}>
          <Button
            onClick={() => handleDayClick(i)}
            sx={{
              minWidth: 0,
              p: 1,
              borderRadius: "50%",
              color: isSelected ? "white" : "inherit",
              bgcolor: isSelected ? "primary.main" : "transparent",
              "&:hover": {
                bgcolor: isSelected ? "primary.dark" : "action.hover",
              },
            }}
          >
            {i}
            {dayEntry && dayEntry.mood && (
              <Typography
                component="span"
                sx={{
                  fontSize: "0.5em",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                {dayEntry.mood}
              </Typography>
            )}
          </Button>
        </Grid>,
      );
    }

    return days;
  };

  const currentEntry = getCurrentEntry();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ maxWidth: 400, mx: "auto", p: 2, bgcolor: "background.default" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5">
            {currentDate.toLocaleString("default", { month: "short" })},{" "}
            {currentDate.getFullYear()}
          </Typography>
          <Button variant="contained" color="primary">
            + Write
          </Button>
        </Box>

        <Typography variant="subtitle1" mb={1}>
          How are you feeling?
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={2}>
          {emojis.map((emoji, index) => (
            <IconButton
              key={index}
              onClick={() => handleMoodClick(emoji)}
              sx={{
                fontSize: "1.5rem",
                bgcolor:
                  currentEntry.mood === emoji ? "primary.light" : "transparent",
                "&:hover": { bgcolor: "primary.light" },
              }}
            >
              {emoji}
            </IconButton>
          ))}
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Button
            onClick={handlePrevMonth}
            size="small"
            sx={{ minWidth: 0, p: 0 }}
          >
            <ChevronLeftIcon />
          </Button>
          <Typography variant="subtitle2">
            {currentDate.toLocaleString("default", { month: "long" })}
          </Typography>
          <Button
            onClick={handleNextMonth}
            size="small"
            sx={{ minWidth: 0, p: 0 }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>

        <Grid container spacing={1} columns={7}>
          {daysOfWeek.map((day) => (
            <Grid item key={day}>
              <Typography variant="caption" align="center" display="block">
                {day}
              </Typography>
            </Grid>
          ))}
          {renderCalendar()}
        </Grid>

        <Paper elevation={0} sx={{ mt: 2, p: 2, bgcolor: "grey.100" }}>
          <Typography variant="h6" color="#00796b" gutterBottom>
            Lets write about it
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="How is your day going?"
            sx={{ bgcolor: "background.paper" }}
            value={currentEntry.content}
            onChange={handleJournalChange}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
