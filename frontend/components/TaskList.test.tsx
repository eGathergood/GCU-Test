import { describe, beforeEach, it, expect, vi } from 'vitest'; // Vitest imports
import { render, screen, fireEvent } from '@testing-library/react'; // React Testing Library imports
import TaskList from './TaskList';
import { Task } from '../types/task';

describe('TaskList', () => {
  const mockTasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];

  const mockOnToggleComplete = vi.fn();
  const mockOnDelete = vi.fn();

  beforeEach(() => {
    mockOnToggleComplete.mockClear();
    mockOnDelete.mockClear();
  });

  it('renders tasks correctly', () => {
    render(
      <TaskList tasks={mockTasks} onToggleComplete={mockOnToggleComplete} onDelete={mockOnDelete} />
    );

    // Check if task titles are rendered
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('shows "No tasks available" when no tasks are provided', () => {
    render(<TaskList tasks={[]} onToggleComplete={mockOnToggleComplete} onDelete={mockOnDelete} />);

    // Check if "No tasks available" is shown
    expect(screen.getByText('No tasks available')).toBeInTheDocument();
  });

  it('calls onToggleComplete when checkbox is clicked', () => {
    render(
      <TaskList tasks={mockTasks} onToggleComplete={mockOnToggleComplete} onDelete={mockOnDelete} />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(
      <TaskList tasks={mockTasks} onToggleComplete={mockOnToggleComplete} onDelete={mockOnDelete} />
    );

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });


  it('does not apply line-through style to incomplete tasks', () => {
    render(
      <TaskList tasks={mockTasks} onToggleComplete={mockOnToggleComplete} onDelete={mockOnDelete} />
    );

    const incompleteTask = screen.getByText('Task 1');
    expect(incompleteTask).not.toHaveClass('line-through');
    expect(incompleteTask).not.toHaveClass('text-black-500');
  });
});
