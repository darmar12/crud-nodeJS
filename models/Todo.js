const {Schema, model} = require("mongoose");

const todoSchema = new Schema({
    value: {
        type: String
    }
});

module.exports = model('Todo', todoSchema);