import React, { useRef, useState } from 'react';

export default function App() {
  return (
<div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-blue-500 p-4 text-white w-32 h-32">Item 1</div>
      <div className="bg-blue-500 p-4 text-white">Item 2</div>
      <div className="bg-blue-500 p-4 text-white">Item 3</div>
      <div className="bg-blue-500 p-4 text-white">Item 4</div>
    </div>
  )
}
