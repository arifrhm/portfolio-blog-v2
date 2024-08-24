// pages/create-tag.tsx
"use client"
import { useState, FormEvent } from 'react';

export default function CreateTag() {
  const [name, setName] = useState<string>('');
  const [postId, setPostId] = useState<number | ''>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, postId }), // Send both name and postId
    });

    if (res.ok) {
      setSuccessMessage('Tag created successfully');
      setName('');
      setPostId(''); // Clear the input fields
      setErrorMessage('');
    } else {
      const errorData = await res.json();
      setErrorMessage(`Error: ${errorData.message}`);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Create a New Tag</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tag Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postId">Post ID:</label>
          <input
            type="number"
            id="postId"
            value={postId}
            onChange={(e) => setPostId(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Create Tag</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
