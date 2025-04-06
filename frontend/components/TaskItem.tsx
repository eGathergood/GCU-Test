import React from 'react';
import { Task } from '../types/task';

type TaskItemProps = {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 border border-border rounded-xl shadow-sm transition-all ${
        task.completed ? 'bg-gray-100 line-through text-gray-500' : 'bg-white text-[#004785]'
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="w-4 h-4 text-primary focus:ring-primary transition-all"
        />
        <span className="flex-grow text-sm">{task.title}</span>
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-4 py-2 text-sm rounded-lg transition-all ${
            task.completed
              ? 'bg-gray-400 hover:bg-gray-500 text-white'
              : 'bg-primary hover:bg-primary-hover text-white'
          }`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 text-white transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
