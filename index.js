import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ListItem from './ListItem'
import NewToDo from './NewToDo'
import './style.css';



function App() {

  const [toDo, updateToDo] = useState([])

  function addToDo(text) {
    updateToDo([...toDo, { title: text, complete: false }])
  }

  function markCompleted(id) {
    //grab the current id, mark the list item as completed, update the to do List
     console.log(id)
  }

  function renderTasks() {
    return toDo.map(function (item, index) {
      if (!item.complete) {
      return (
        <ListItem title={item.title} key={index} markCompleted={markCompleted}></ListItem>
      )
      }
    })
  }
  console.log(toDo)
  return (
    <div>
      {renderTasks()}
      <NewToDo add={addToDo} ></NewToDo>
    </div>
  );
}

render(<App />, document.getElementById('root'));