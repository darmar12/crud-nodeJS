const router = require("express").Router();
const errors = require('./../../errors');
const Todo = require('./../../models/Todo');

router.post(
    '/item',
    async (req, res) => {
        try{
            const todo = new Todo({value: req.body.value});
            await todo.save();
            res.status(201).json({todo});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
);

module.exports = router;