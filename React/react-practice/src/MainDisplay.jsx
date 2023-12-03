// MainDisplay.js
import React from 'react';

const MainDisplay = ({ selectedComponent }) => (
  <div className="main-display">
    {selectedComponent ? selectedComponent : <p>Select a component from the side menu</p>}
  </div>
);

export default MainDisplay;
