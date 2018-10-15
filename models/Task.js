import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let TaskSchema = Schema({
    title: {
        type: String,
        required: true,
        max: 100,
    },
    description: {
        type: String,
        required: false,
        max: 1000
    }
});

module.exports = mongoose.model('Task', TaskSchema);