"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  

  useEffect(() => {
    setMounted(true); // Ensure the component is mounted before rendering
  }, []);

  if (!mounted) return null; // Prevents SSR mismatches

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-xl p-2"
    >
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggleButton;
