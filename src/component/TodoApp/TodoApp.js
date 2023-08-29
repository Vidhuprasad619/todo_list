import React, { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);


  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const addItems = () => {
    setItems([...items, { id: Date.now(), text: input, done: false }]);
    setInput("");
  }

  const handleDone = (itemId) => {
    const tempData = items.map((ele) => {
      if (ele.id === itemId) {
        ele.done = !ele.done;
      }
      return ele;
    })
    setItems(tempData);
  }

  const deleteItem=(itemId)=>{
    const newList=items.filter((ele)=>{
      if(ele.id===itemId){
        ele=0;
      }
      return ele;
    });
    setItems(newList);
  }


  return (
    <div className='todo-container'>
      <div className='input-section'>
        <h1>Todo App</h1>
        <input type="text" value={input} onChange={handleChange} placeholder='Enter Items...' />
        <button onClick={addItems}>Add</button>
      </div>
      <ul>
        {items.map((item, index) =>
          <div className='items' key={item.id}>
            <li>{index + 1}.{item.text}

            </li>
            <div className="check-items">
              <span>{item.done ? "done" : "pending"}</span>
              <input type="checkbox" onChange={() => handleDone(item.id)} />
              <span onClick={()=>deleteItem(item.id)}><i className="fa-solid fa-trash-can delete"></i></span>
            </div>
          </div>
        )}
      </ul>
    </div>
  )
}

export default TodoApp
