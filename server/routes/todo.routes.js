const router = require('express').Router();
const pool = require('../db');

module.exports = (params) => {
  // create todo
  router.route('/').post(async (req, res) => {
    try {
      const { description } = req.body;

      console.log(description);

      const newTodo = await pool.query(
        'INSERT INTO todo (description) VALUES($1) RETURNING *',
        [description]
      );
      return res.json(newTodo.rows);
    } catch (err) {
      console.error(err);
    }
  });

  // get all todo
  router.route('/').get(async (req, res) => {
    try {
      const todos = await pool.query('SELECT * FROM todo');

      return res.json(todos.rows);
    } catch (err) {
      console.error(err);
    }
  });

  // get todo by id
  router.route('/:id').get(async (req, res) => {
    try {
      const { id } = req.params;

      const todo = await pool.query('SELECT * FROM todo WHERE todo_id=$1', [
        id,
      ]);

      return res.json(todo.rows);
    } catch (err) {
      console.error(err);
    }
  });

  // update todo
  router.route('/:id').put(async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;

      const todo = await pool.query(
        'UPDATE todo SET description=$1 WHERE todo_id=$2 returning *',
        [description, id]
      );

      return res.json(todo.rows);
    } catch (err) {
      console.error(err);
    }
  });

  // delete todo
  router.route('/:id').delete(async (req, res) => {
    try {
      const { id } = req.params;

      const todo = await pool.query('DELETE FROM todo WHERE todo_id=$1', [id]);

      return res.json(`Todo id: ${id} is deleted!`);
    } catch (err) {
      console.log(err);
    }
  });

  return router;
};
