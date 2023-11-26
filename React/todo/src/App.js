import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo =newTodo.find(todos=>todo.id ===id)
    todo.complete = !todo.complete
    setTodos(newTodos)

  }

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
      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} > Add Todo</button>
      <button>clear complete</button>

    </>
  )
}

export default App;