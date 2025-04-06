import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: Math.floor(Math.random() * 1000000),
    title: 'Test Task',
    completed: false,
  };

  it('renders task title', () => {
    render(<TaskItem task={mockTask} onToggleComplete={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggleComplete when Complete button is clicked', () => {
    const onToggleComplete = vi.fn();
    render(<TaskItem task={mockTask} onToggleComplete={onToggleComplete} onDelete={() => {}} />);

    fireEvent.click(screen.getByRole('button', { name: /Complete/i }));
    expect(onToggleComplete).toHaveBeenCalled();
  });

  it('calls onDelete when Delete button is clicked', () => {
    const onDelete = vi.fn();
    render(<TaskItem task={mockTask} onToggleComplete={() => {}} onDelete={onDelete} />);

    fireEvent.click(screen.getByRole('button', { name: /Delete/i }));
    expect(onDelete).toHaveBeenCalled();
  });

  it('does not show strikethrough when task is not completed', () => {
    render(<TaskItem task={mockTask} onToggleComplete={() => {}} onDelete={() => {}} />);

    const taskItemDiv = screen.getByText('Test Task').closest('div');
    expect(taskItemDiv).not.toHaveClass('line-through');
  });
});
