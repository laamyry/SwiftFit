import React, { useState } from 'react';

const ColorSelection = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onSelectColor(color);
  };

  return (
    <div>
      <h3>Select Color:</h3>
      <div>
        {colors.map((color, index) => (
          <button
            key={index}
            style={{
              backgroundColor: color,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              margin: '5px',
              border: selectedColor === color ? '2px solid #333' : 'none',
            }}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
