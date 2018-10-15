import express from 'express'
import TodoController from "../controllers/TodoController";

const todoRoute = express.Router();

todoRoute.get('/', TodoController.index);
todoRoute.get('/:id', TodoController.show);
todoRoute.post('/', TodoController.save);
todoRoute.post('/:id', TodoController.update);
todoRoute.get('/delete/:id', TodoController.remove);

const taskRoute = express.Router();

taskRoute.get('/', TodoController.index);
taskRoute.get('/:id', TodoController.show);
taskRoute.post('/', TodoController.save);
taskRoute.post('/:id', TodoController.update);
taskRoute.get('/delete/:id', TodoController.remove);

export default {
    todoRoute,
    taskRoute
}