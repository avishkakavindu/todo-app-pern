import React, { Fragment, useEffect, useState } from 'react';

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  // delete func
  const deleteTodo = async (id) => {
    try {
      const todo = await fetch(`http://127.0.0.1:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const getTodos = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/todos');
      const jsonData = await res.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
