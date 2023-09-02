import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Todos from './components/Todos';
import AddTodo from './components/addTodo';
import { useState, useEffect } from 'react';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load todos from local storage on component mount
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const onDelete = (todoToDelete) => {
    // Remove todo from state and local storage
    const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addtoLists = (title, status) => {
    const maxId = Math.max(...todos.map((todo) => todo.id));
    const newId = maxId + 1;

    const myTodo = {
      id: newId,
      task: title,
      done: status,
    };

    // Add the new todo to state and update local storage
    const updatedTodos = [...todos, myTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <Header heading="To-Do List" />
      <AddTodo addtoLists={addtoLists} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
