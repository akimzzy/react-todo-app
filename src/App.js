import React from 'react';
import './App.css';
import Heading from './Components/Heading';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  document.title = "Todo App"

  return (
    <GlobalProvider>
      <Heading />
      <AddTodo />
      <TodoList />
    </GlobalProvider>
  );
}
 
export default App;
