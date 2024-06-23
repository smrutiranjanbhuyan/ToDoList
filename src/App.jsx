import React, { useState, useEffect } from "react";
import { Checkmark } from 'react-checkmark'
import "./App.css";
import Navbar from "./comopnets/Navbar";
import Footer from "./comopnets/Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState("");


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, i) => i !== indexToDelete);
    setTodos(updatedTodos);
  };

  const handleEdit = (todoItem, itemIndex) => {
    setEditIndex(itemIndex);
    setUpdatedTodo(todoItem.todo);
  };

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleUpdate = () => {
    if (updatedTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { ...updatedTodos[editIndex], todo: updatedTodo };
      setTodos(updatedTodos);
      setEditIndex(null);
      setUpdatedTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const toggleCompleted = (indexToToggle) => {
  
    const updatedTodos = todos.map((item, i) => {
      if (i === indexToToggle) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
   
      <div className="container mx-auto bg-purple-100 my-5 rounded-xl p-8 lg:p-12 lg:my-10">
        <div className="addTodos mb-4">
          <h1 className="text-3xl font-bold mb-2">Add your list</h1>
          <div className="flex flex-col lg:flex-row">
            <input
              type="text"
              className="border-2 border-purple-400 px-2 py-1 rounded-l-md mb-2 lg:mb-0 lg:mr-2"
              placeholder="Enter your todo"
              onChange={handleChange}
              value={todo}
            />
            <button
              className="bg-purple-400 text-white px-4 py-1 rounded-r-md hover:bg-purple-500"
              onClick={handleAdd}
            >
              Add to list
            </button>
          </div>
        </div>    
        <h1 className="text-2xl font-bold mb-4">Your Todos</h1>

        <div className="todos">
          {todos.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="todo flex items-center bg-purple-200 px-4 py-2 rounded-md mb-2"
            >
              <input
                className="cursor-pointer mr-4"
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => toggleCompleted(itemIndex)}
              />
           {item.isCompleted?   <Checkmark size='medium' />:""}
              {editIndex === itemIndex ? (
                <input
                  type="text"
                  className="border-2 border-purple-400 px-2 py-1 rounded-l-md mx-5"
                  placeholder="Update Your Todo"
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                  value={updatedTodo}
                />
              ) : (
                <div
                  className={
                    item.isCompleted
                      ? "text flex-1 line-through"
                      : "text flex-1"
                  }
                >
                  {item.todo}
                </div>
              )}
              <div className="buttons">
                {editIndex === itemIndex ? (
                  <button
                    className="bg-purple-400 text-white px-4 py-1 rounded-r-md ml-2 hover:bg-purple-500"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="bg-blue-400 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-500"
                    onClick={() => handleEdit(item, itemIndex)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-400 text-white px-2 py-1 rounded-md hover:bg-red-500 mx-5"
                  onClick={() => handleDelete(itemIndex)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
