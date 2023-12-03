import React, { useState } from 'react';

export default function BettingGame() {
  const [result, setResult] = useState(null);
  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);

  const startGame = () => {
    const newP1 = Math.floor(Math.random() * 6) + 1;
    const newP2 = Math.floor(Math.random() * 6) + 1;
    let gameResult = newP1 > newP2 ? 'Player 1 Wins!' : newP1 < newP2 ? 'Player 2 Wins!' : 'Draw!';
    setP1(newP1);
    setP2(newP2);
    setResult(gameResult);
  };

  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '20px', border: '1px solid #ccc'}}>
        <h1>Welcome to the Game</h1>
        <div style={{ border: '1px solid #ccc', padding: '10px'  }}>
          <h2 >{result}</h2>
        </div>
      </header>

      <div style={{ display: 'flex', justifyContent: 'space-around' , textAlign:'center'}}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h1>{p1}</h1>
          <h2>Player 1</h2>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h1>{p2}</h1>
          <h2>Player 2</h2>
        </div>
      </div>

      <button onClick={startGame} style={{ display: 'block', margin: '20px auto', padding: '10px' }}>
        Start
      </button>
    </div>
  );
}
