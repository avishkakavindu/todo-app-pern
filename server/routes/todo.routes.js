const router = require('express').Router();
const pool = require('../db');

module.exports = (params) => {
  // create todo
  router.route('/').post(async (req, res) => {
    try {
      const { description } = req.body;

      const newTodo = await pool.query(
        'INSERT INTO todo (description) VALUES($1) RETURNING *',
        [description]
      );
      return res.json(newTodo.rows);
    } catch (err) {
      console.error(err);
    }
  });

 
  });

  return router;
};
