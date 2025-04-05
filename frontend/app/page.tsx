'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <p>Message from backend: {msg}</p>
    </div>
  );
}
