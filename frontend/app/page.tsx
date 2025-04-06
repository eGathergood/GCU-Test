'use client';

import React, { useState, useEffect } from 'react';
import { Task } from '../types/task';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import FilterButtons from '../components/FilterButtons';

const Page: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  // Fetch tasks when the page loads
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (title: string) => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    const newTask = await res.json();
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Toggle task completion status
  const toggleTaskComplete = async (id: number) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (!taskToToggle) return;

    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

    const res = await fetch('/api/tasks', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });

    const updated = await res.json();
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updated.id ? { ...task, completed: updated.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = async (id: number) => {
    const res = await fetch('/api/tasks', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId: id }),
    });

    await res.json();
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // "all"
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shado-lg rounded-3x1 p-16">
        <h1 className="text-3xl font-semibold text-center mb-6 text-primary">Task Management</h1>

        <FilterButtons currentFilter={filter} onChange={setFilter} />
        <AddTaskForm onAddTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleTaskComplete}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default Page;
