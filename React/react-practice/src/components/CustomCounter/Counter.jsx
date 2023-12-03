import React, { useState, useEffect } from 'react';

const useDocumentTitle = title => {
  useEffect(() => {document.title = title;}, [title])
}

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  useDocumentTitle(`You clicked ${count} times`);
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={incrementCount}>Click me</button>
    </div>
  )
}
export default Counter;  