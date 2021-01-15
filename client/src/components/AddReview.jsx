import React, { useState } from 'react';

function Tutorial() {
  // Declare a new state variable, which we'll call "count"
  const [Todos, setTodos] = useState([{
    text: 'Learn Hooks',
    isCompleted: false,
  },
  {
    text: 'Do Journal',
    isCompleted: false,
  },
  {
    text: 'Walk Dog',
    isCompleted: false,
  }
  ]);

  function Todo({ todo, index, completeTodo, deleteTodo }) {
    return (
      <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </div>
    );
  }

  function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Add Todo" onChange={event => setValue(event.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    )
  }

  const addTodo = (text) => {
    const newTodos = [...Todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...Todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {

    const newTodos = [...Todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <div>
        {Todos.map((todo, index) => (
          <Todo
            Key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Tutorial;
