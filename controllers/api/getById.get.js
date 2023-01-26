const router = require("express").Router();
const errors = require('./../../errors');
const Todo = require('./../../models/Todo');

router.get(
    '/getById/:id',
    async (req, res) => {
        try{
            const todo = await Todo.findById({ _id: req.query.id });
            if (!todo) throw errors.NotFoundError('Todo not found!');
            res.status(201).json({todo});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
);

module.exports = router;