import React, { useState, useEffect } from 'react';
import '../Utils/CursorPointer.css'
const CursorPointer = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({ left: e.clientX, top: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="cursor" style={cursorStyle}></div>
      <div className="cursor2" style={cursorStyle}></div>
    </React.Fragment>
  );
};

export default CursorPointer;

