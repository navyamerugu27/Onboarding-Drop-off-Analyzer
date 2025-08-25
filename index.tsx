
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Buffer } from 'buffer';

// Polyfill Buffer for client-side usage
window.Buffer = window.Buffer || Buffer;

// This is a workaround for process.env.
// In a real application, you'd use a bundler like Vite or Webpack
// to handle environment variables.
// For this example, we'll manually set a placeholder if it's not present.
// The user of this app should set this in their environment.
if (typeof process === 'undefined') {
  (window as any).process = {
    env: {
      API_KEY: '' // This should be set in the environment where the code is run
    }
  };
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
