import './App.css';
import React from 'react';

const initialData = [
  {
    title: 'Winnie',
    color: 'rgb(142, 110, 149)',
    todos: ['Do homework', 'Do laundry'],
  },
  {
    title: 'Bob',
    color: 'rgb(57, 165, 156)',
    todos: ['Play Video Game', 'Level Up'],
  },
  {
    title: 'Thomas',
    color: 'rgb(52, 71, 89)',
    todos: ['Get a girlfriend', 'Go to school'],
  },
  {
    title: 'George',
    color: 'rgb(232, 116, 30)',
    todos: ['Cheat on exam', 'Lie to parents'],
  },
];

function App() {
  const [data, setData] = React.useState(initialData);

  const addTodo = (index) => {
    const newTodo = prompt('What do you want to do?')
    const nextData = [...data]
    nextData[index].todos.push(newTodo)
    setData(nextData)
  }

  return (
    <div className='container'>
      {data.map((v, i) => {
        return (
          <div className='column' key={i}>
            <div className='header' style={{ backgroundColor : v.color }}>
              <span>{v.title}</span>
            </div>
            <div className='list'>
              {v.todos.map((w, j) => {
                return (
                  <div key='j' className='todo'>
                    <button className={i === 0 && 'hidden'}>Prev</button>
                    <span>{w}</span>
                    <button className={i === initialData.length - 1 && 'hidden'}>Next</button>
                  </div>
                )
              }

              )}
            </div>
            <button onClick={() => addTodo(i)}>+ Add new todo</button>
          </div>
        );
      })}
    </div>
  );
    };
  
  
export default App;

