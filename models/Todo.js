import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let TodoSchema = Schema({
    _id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
        max: 100,
    },
    description: {
        type: String,
        required: false,
        max: 1000
    },
    status: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Todo', TodoSchema);