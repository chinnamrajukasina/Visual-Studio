// SideMenu.js
import React from 'react';
import Hello from './components/Hello';
import AppRouter from './components/Router/AppRouter';
import Counter from './components/CustomCounter/Counter';
import CounterReducer from './components/CustomCounter/CounterReducer';
import PropsContact from './components/ReactProps/PropsContact';
import CurrentTime from './components/CurrentTime/CurrentTime';
import BettingGame from './components/BettingGame/BettingGame';
import Form from './components/Form/Form';



const SideMenu = ({ onSelectComponent }) => {
  return (
    <div className="side-menu">
      <div className="menu-item" onClick={() => onSelectComponent(<Hello />)}> Hello World</div>
      <div className="menu-item" onClick={() => onSelectComponent(<AppRouter />)}> AppRouter</div>  
      <div className="menu-item" onClick={() => onSelectComponent(<Counter />)}> Counter</div>
      <div className="menu-item" onClick={() => onSelectComponent(<CounterReducer />)}> CounterReducer</div>
      <div className="menu-item" onClick={() => onSelectComponent(<PropsContact />)}> PropsContact</div>
      <div className="menu-item" onClick={() => onSelectComponent(<CurrentTime />)}> CurrentTime</div>
      
      <div className="menu-item" onClick={() => onSelectComponent(<BettingGame />)}> BettingGame</div>
      <div className="menu-item" onClick={() => onSelectComponent(<Form />)}> Form</div>

    </div>
  );
};

export default SideMenu;
