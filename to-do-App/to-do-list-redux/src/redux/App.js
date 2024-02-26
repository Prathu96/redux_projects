import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { useState } from "react";
import TodoList from "../todos/TodoList";
import '../App.css';


function App() {
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");
  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle,
      };
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-primary text-center">Todo app using redux react</h3>
       <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => handleTodo()}>
          Add
        </button>
      </div> 
      <TodoList />
    </div>
  );
}

export default App;

















// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //        To-do list
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
