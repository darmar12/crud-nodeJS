const router = require("express").Router();
const errors = require('./../../errors');
const Todo = require('./../../models/Todo');

router.delete(
    '/item/:id',
    async (req, res) => {
        try{
            await Todo.findByIdAndDelete(req.params.id);
            res.status(201).json({message: "Todo item deleted"});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
);

module.exports = router;