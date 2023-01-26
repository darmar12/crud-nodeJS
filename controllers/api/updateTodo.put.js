const router = require("express").Router();
const errors = require('./../../errors');
const Todo = require('./../../models/Todo');

router.put(
    '/item/:id',
    async (req, res) => {
        try{
            const todo = await Todo.findByIdAndDelete(req.params.id);
            if (!todo) throw errors.NotFoundError('Todo not found!');
            res.status(201).json({todo});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
);

module.exports = router;