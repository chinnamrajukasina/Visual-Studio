import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('')

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event){
    setNewName(name);
    setName('');
    event.preventDefault()
    
  }

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <form onSubmit={handleClick}>
      <h1>Hello {newName}</h1>
      <input
        type='text'
        value={name}
        placeholder='Username'
        onChange={handleChange}
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button style={{ margin: '10px', scale: '1.5' }} >
        Submit
      </button></form>
    </div>
  );
}
