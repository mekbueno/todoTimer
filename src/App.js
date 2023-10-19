import React from 'react'
import './App.css';
import {TodoWrapper} from './components/TodoWrapper';
import Timer from './components/Timer';



const App = () => {

    return (
      <div className="App debugger">
        <div className='container debugger'>
          <div className='todo-container debugger'>
            <TodoWrapper />
          </div>
          <div className='timer-container debugger'>
            <Timer />
          </div>
        </div>
      </div>
    );
  }

  export default App;
