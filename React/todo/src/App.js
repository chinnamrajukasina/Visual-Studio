import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_SORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])
  useEffect(()=>{
    localStorage.setItem(LOCAL_SORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodo => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} > Add Todo</button>
      <button>Test</button>

    </>
  )
}

export default App;