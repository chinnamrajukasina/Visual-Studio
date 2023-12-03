// SideMenu.js
import React from 'react';
import Hello from './components/Hello';
import AppRouter from './components/Router/AppRouter';
import Counter from './components/CustomCounter/Counter';
import CounterReducer from './components/CustomCounter/CounterReducer';
import PropsContact from './components/ReactProps/components/PropsContact';



const SideMenu = ({ onSelectComponent }) => {
  return (
    <div className="side-menu">
      <div className="menu-item" onClick={() => onSelectComponent(<Hello />)}> Hello World</div>
      <div className="menu-item" onClick={() => onSelectComponent(<AppRouter />)}> AppRouter</div>  
      <div className="menu-item" onClick={() => onSelectComponent(<Counter />)}> Counter</div>
      <div className="menu-item" onClick={() => onSelectComponent(<CounterReducer />)}> CounterReducer</div>
      <div className="menu-item" onClick={() => onSelectComponent(<PropsContact />)}> PropsContact</div>
    </div>
  );
};

export default SideMenu;
