import React, { useState } from 'react';

const Trad: React.FC = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleClick = () => {
    const colors = [
      'bg-yellow-200',
      'bg-red-500',
      'bg-green-400',
      'bg-blue-200',
      'bg-pink-300',
      'bg-purple-400',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      className={`h-screen ${window.innerWidth < 768 ? 'w-full' : 'w-1/2'}`}
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="p-4 rounded-lg bg-gray-800 text-white absolute top-2 right-2"
        onClick={handleClick}
      >
        Change
      </button>
    </div>
  );
};

export default Trad;
