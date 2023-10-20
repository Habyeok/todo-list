import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// HTML
// Mark up
// <div> <p> hello world </p> </div>
// 태그로 구현된 것
// 화면을 구상하기 위한 규약


// CSS
// 꾸미기 언어

// JS
// HTML을 조작하는 언어


function App() {
  // react way
  const [todos, setTodos] = useState(["할일 1", "할일 2"]);
  // state 변화하는 값
  // React -> state가 변할 때마다 화면을 다시 그린다.
  // ["할일 1", "할일 2"];

  return (
    // JSX (JS -> HTML)
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input />
        <button>ADD</button>
      </div>
      {/* DRY Don't Repeat Yourself */}
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span>{todo}</span>
          <button>DEL</button>
        </div>
      ))}
    </div>
  );
}
export default App;
