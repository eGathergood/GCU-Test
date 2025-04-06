import { describe, beforeEach, it, expect, vi } from 'vitest'; // Vitest imports
import { render, screen, fireEvent } from '@testing-library/react'; // React Testing Library imports
import AddTaskForm from './AddTaskForm';

describe('AddTaskForm', () => {
  const mockOnAddTask = vi.fn();

  beforeEach(() => {
    mockOnAddTask.mockClear(); // Reset mock before each test
  });

  it('renders the input and button', () => {
    render(<AddTaskForm onAddTask={mockOnAddTask} />);

    expect(screen.getByPlaceholderText('Enter task title')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Task/i })).toBeInTheDocument();
  });

  it('calls onAddTask with the correct title when the form is submitted', () => {
    render(<AddTaskForm onAddTask={mockOnAddTask} />);

    fireEvent.change(screen.getByPlaceholderText('Enter task title'), {
      target: { value: 'New Task' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));

    expect(mockOnAddTask).toHaveBeenCalledWith('New Task');
  });

  it('clears the input field after the form is submitted', () => {
    render(<AddTaskForm onAddTask={mockOnAddTask} />);

    fireEvent.change(screen.getByPlaceholderText('Enter task title'), {
      target: { value: 'New Task' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));

    const inputElement = screen.getByPlaceholderText('Enter task title') as HTMLInputElement;
    expect(inputElement.value).toBe('');
  });

  it('does not call onAddTask if the input is empty', () => {
    render(<AddTaskForm onAddTask={mockOnAddTask} />);

    fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));

    expect(mockOnAddTask).not.toHaveBeenCalled();
  });
});
