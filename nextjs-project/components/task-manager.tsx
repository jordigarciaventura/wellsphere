'use client'

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Paper, 
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const emojis = ['😀', '😊', '😐', '😠', '😢'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '20px',
        },
      },
    },
  },
});

interface Task {
  id: number;
  text: string;
  dueDate?: string;
}

interface DayTasks {
  [key: string]: Task[];
}

export default function TaskManager() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState<DayTasks>({});
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState('');

  const dateKey = (date: Date) => date.toISOString().split('T')[0];

  const handleDayClick = (day: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const key = dateKey(currentDate);
      const newTaskObj: Task = {
        id: Date.now(),
        text: newTask.trim(),
        dueDate: '1 day left', 
      };
      setTasks(prev => ({
        ...prev,
        [key]: [...(prev[key] || []), newTaskObj],
      }));
      setNewTask('');
      setIsAddingTask(false);
    }
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      days.push(<Grid item key={`empty-${i}`}><Box p={1}></Box></Grid>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === currentDate.getDate();
      days.push(
        <Grid item key={i}>
          <Button
            onClick={() => handleDayClick(i)}
            sx={{
              minWidth: 0,
              width: 36,
              height: 36,
              p: 0,
              borderRadius: '50%',
              color: isSelected ? 'white' : 'inherit',
              bgcolor: isSelected ? 'primary.main' : 'transparent',
              '&:hover': {
                bgcolor: isSelected ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            {i}
          </Button>
        </Grid>
      );
    }

    return days;
  };

  const currentTasks = tasks[dateKey(currentDate)] || [];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, bgcolor: 'background.paper', borderRadius: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">
            {currentDate.toLocaleString('default', { month: 'short' })}, {currentDate.getFullYear()}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setIsAddingTask(true)}
            sx={{ px: 2, py: 1 }}
          >
            + Add Task
          </Button>
        </Box>

        <Box sx={{ bgcolor: 'grey.900', borderRadius: 2, p: 2, mb: 2 }}>
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
        </Box>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Tasks
        </Typography>

        <List>
          {currentTasks.map((task) => (
            <ListItem key={task.id} component={Paper} sx={{ mb: 1, borderRadius: 2, boxShadow: 1 }}>
              <ListItemIcon>
                <Box sx={{ bgcolor: 'primary.main', borderRadius: 1, p: 1 }}>
                  <AssignmentIcon sx={{ color: 'white' }} />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary={task.text}
                secondary={task.dueDate}
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondaryTypographyProps={{ color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>

        {isAddingTask && (
          <Box mt={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="New task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              autoFocus
            />
            <Box mt={1} display="flex" justifyContent="flex-end">
              <Button onClick={() => setIsAddingTask(false)} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}