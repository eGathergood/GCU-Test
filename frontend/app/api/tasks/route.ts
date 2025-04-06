import { NextRequest, NextResponse } from 'next/server';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

// In-memory store to simulate persistence (will reset on server restart)
let tasks: Task[] = [];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const { title }: { title: string } = await request.json();

  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, completed }: { id: number; completed: boolean } = await request.json();

  tasks = tasks.map((task) => (task.id === id ? { ...task, completed } : task));

  return NextResponse.json({ id, completed });
}

export async function DELETE(request: NextRequest) {
  const { taskId }: { taskId: number } = await request.json();

  tasks = tasks.filter((task) => task.id !== taskId);

  return NextResponse.json({ taskId });
}
