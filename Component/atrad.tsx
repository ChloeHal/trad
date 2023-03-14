import React, { useState } from 'react';

const ATrad: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const colors: string[] = [
    '#f4f1de',
    '#e07a5f',
    '#81b29a',
    '#f2cc8f',
    '#9f86c0',
    '#94d2bd',
  ];
  const handleClick = (): void => {
    const randomColorIndex: number = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomColorIndex]);
  };

  return (
    <div
      className="flex flex-col md:flex-row h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="bg-blue-300 md:flex-1">
        <div>
          <button
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            onClick={handleClick}
          >
            Change
          </button>
        </div>
      </div>
      <div className="bg-green-300 md:flex-1 bg-sky-500/50">
        <input
          type="text"
          className="w-64 p-2 rounded-l-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default ATrad;
