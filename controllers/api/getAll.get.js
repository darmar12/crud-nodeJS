const router = require("express").Router();
const errors = require('./../../errors');
const Todo = require('./../../models/Todo');

router.get(
    '/getAll',
    async (req, res) => {
        try{
            const todos = await Todo.find();
            if (!todos) throw errors.NotFoundError('Todos not found!');
            res.status(201).json({todos});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
);

module.exports = router;