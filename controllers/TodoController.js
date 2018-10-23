import {Controller} from './Controller'
import db from "./../db/db";
import Todo from "./../models/Todo"

class TodoController {
    index (req, res) {
        Todo.find({}, function (err, todos) {
            if(err) res.send(err);
            else console.log(todos);
            Controller.success(res, todos);
        });
    };

    save(req, res) {
        let data = req.body;
        let item = new Todo({
            title: data.name,
            description: data.description
        });
        item.save().then(() => {
            Controller.success(res, item);
        }).catch((err) => Controller.error(res, err.message, err.errors));
    };

    show (req, res) {
        let id = parseInt(req.params.id);

        Todo.findById(id, (err, item) => {
            if(err) Controller.error(res, err);
            Controller.success(res, item);
        });
    };

    update (req, res) {
        let id = parseInt(req.params.id);
        Todo.findById(id, (err, item) => {
            if(err) Controller.error(res, err);

            item.title = req.body.name;
            item.description = req.body.description;

            item.update(item);
        });

    };

    remove (req, res) {
        const id = req.params.id;
        let rowAffected = db.deleteTodo(id);
        res.status(200).json({
            success: true,
            msg: rowAffected + ' todo removed',
            todos: db.data
        });
    };
}

export default new TodoController