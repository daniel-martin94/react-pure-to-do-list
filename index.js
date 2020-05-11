import React, { useState } from 'react';
import { render } from 'react-dom';
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
    updateToDo(toDo.map(function (item, index) {
      if (index == id) {
        item.complete = true
      }
      return item
    }))
  }

  function renderTasks() {
    return toDo.map(function (item, index) {
      if (item.complete == false) {
        return (
          <ListItem title={item.title} key={index} markCompleted={markCompleted} id={index} ></ListItem>
        )
      }
    })
  }
  
  return (
    <div>
      {renderTasks()}
      <NewToDo add={addToDo} ></NewToDo>
    </div>
  );
}

render(<App />, document.getElementById('root'));