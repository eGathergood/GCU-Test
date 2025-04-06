import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="flex-grow px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition text-sm bg-white text-black placeholder:text-gray-400"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition text-sm"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
