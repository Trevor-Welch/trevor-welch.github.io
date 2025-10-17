import React from 'react';

export default function OpenForWork() {
  return (
    <div className="absolute top-24 right-4 z-50">
      <div className="flex items-center gap-2 bg-[#3d3d3d] px-4 py-2 shadow-lg">
        <div className="relative">
          {/* Pulsing ring */}
          <div className="absolute inset-0 bg-green-500 rounded-md animate-ping opacity-75"></div>
          {/* Green square */}
          <div className="relative w-3 h-3 bg-green-500 rounded-md"></div>
        </div>
        <span className="text-md font-medium text-white">Open for work</span>
      </div>
    </div>
  );
}