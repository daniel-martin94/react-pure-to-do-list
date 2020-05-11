import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ListItem from './ListItem'
import NewToDo from './NewToDo'
import './style.css';



function App() {

  const [toDo, updateToDo] = useState([])

  function addToDo() {
    updateToDo([...toDo, { title: "Enter task", complete: false }])
  }
  function updateTitle(value, key) {
    console.log(key)
  }

  function renderTasks() {
    return toDo.map(function (item, index) {
      console.log(item)
      return (
        <ListItem title={item.title} updateTitle={() => updateTitle(item.index)} key={index} id={item.index}></ListItem>
      )
    })
  }
  return (
    <div>
      {renderTasks()}
      <NewToDo add={addToDo()}></NewToDo>
    </div>
  );
}

render(<App />, document.getElementById('root'));