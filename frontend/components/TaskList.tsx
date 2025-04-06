import React from 'react';
import { Task } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
