import React, { Component, Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(body);

      const res = await fetch(`http://127.0.0.1:5000/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.err(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Input todo</h1>

      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
