import React, { useState } from 'react';

const Instructions: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Welcome to VYRAL</h2>
        <p className="mb-4">Explore the creative space. Choose a service below to get started — tech help, DJ services, or merch.</p>
        <button
          className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
          onClick={() => setVisible(false)}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Instructions;