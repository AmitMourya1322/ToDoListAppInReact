import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const addToDo = (e) => {
    console.log(`the added string is ${input}`);
    setTodo([...todo, input]);
    setInput("");
  };
  const clearList = () => {
    setTodo([]);
  };
  return (
    <div className="App">
      <h1>Simple To Do List App in React</h1>
      <br />
      <div className="main">
        <div className="contain">
          <input
            type="text"
            placeholder="enter to do objective"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" onClick={addToDo}>
            Add
          </button>
        </div>

        <h2>List of To Do List</h2>
        {todo.map((todo) => (
          <p>{todo}</p>
        ))}
        <button className="clear" onClick={clearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
