import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Components/Counter.jsx";
import ToDoList from "./Components/ToDoList.jsx";

function App() {
    return(
        <div classNmae="App">
            <h1 className="three-d-heading">TaskTally</h1>
            <Counter />
            <ToDoList />
        </div>
    )
}

export default App;
