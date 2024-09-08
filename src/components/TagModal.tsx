// components/TagModal.tsx
import { API_URL } from '@/constants/apiConstants';
import { useState, FormEvent } from 'react';

interface TagModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
}

const TagModal: React.FC<TagModalProps> = ({ isOpen, onClose, postId }) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/tags/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, postId }),
      });

      if (res.ok) {
        setMessage('Tag created successfully');
        setName('');
        setTimeout(() => setMessage(null), 3000);
        onClose();
      } else {
        const errorData = await res.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage('Error: Unable to create tag');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        maxWidth: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <h2 style={{ marginTop: 0, marginBottom: '15px', fontSize: '1.5rem', color: '#333' }}>
          Create a Tag
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Tag Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box',
              }}
            />
          </div>
          {message && <p style={{ color: 'red', margin: '15px 0' }}>{message}</p>}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="submit"
              style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Create Tag
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: '#6c757d',
                color: '#fff',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TagModal;
