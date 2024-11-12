"use client";

import { toggleTaskDoneUseCase } from "@/features/tasks/actions/tasks";
import TaskListItem from "@/features/tasks/components/TaskListItem";
import { Task } from "@/types/tasks";

interface Props {
  tasks: Task[];
}

export default function TasksList({ tasks }: Props) {
  const toggleTaskDone = async (id: number) => {
    await toggleTaskDoneUseCase(id);
  };

  return tasks.length ? (
    tasks.map((task) => (
      <TaskListItem
        key={task.id}
        id={task.id}
        title={task.title}
        subtitle="Description"
        completed={task.completed}
        dimensions={task.dimensions || []}
        toggleTaskDone={() => toggleTaskDone(task.id)}
      />
    ))
  ) : (
    <p>No tasks found</p>
  );
}
