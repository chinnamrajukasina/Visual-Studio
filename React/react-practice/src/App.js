// App.js
import React, { useState } from 'react';
import './App.css';
import SideMenu from './SideMenu';
import MainDisplay from './MainDisplay';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="app-container">
      <SideMenu onSelectComponent={handleSelectComponent} />
      <div className="content-container">
        <MainDisplay selectedComponent={selectedComponent} />
      </div>
    </div>
  );
};

export default App;
