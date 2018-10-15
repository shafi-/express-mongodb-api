import {Controller} from './Controller'
import db from "./../db/db";
import Todo from "./../models/Todo"

class TodoController {
    static index (req, res) {
        Todo.find({}, function (err, todo) {
            if(err) res.send(err);
            else console.log(todo);
            Controller.success(res, db);
        });
    };

    static save(req, res) {
        let data = req.body;
        let id = 0;
        db.data.map(t => id = (t.id > id) ? t.id : id);

        const item = {
            id: id + 1,
            title: data.name,
            description: data.description
        };
        db.insert(item);

        Controller.success(res, item);
    };

    static show (req, res) {
        let id = parseInt(req.params.id);
        let msg = '';
        const item = db.find(id);

        if (item.length === 0) msg = 'No todo found';

        res.status(200).json({
            success: (msg.length === 0),
            todo: item,
            msg: msg
        });
    };

    static update (req, res) {
        let id = parseInt(req.params.id);
        let item = db.find(id);
        if (req.body.name) item.title = req.body.name;
        if (req.body.description) item.description = req.body.description;
        let success = db.replace(id, item);

        res.status(200).json({
            success: success,
            msg: 'TODO updated',
            todo: item
        });
    };

    static remove (req, res) {
        const id = req.params.id;
        let rowAffected = db.deleteTodo(id);
        res.status(200).json({
            success: true,
            msg: rowAffected + ' todo removed',
            todos: db.data
        });
    };
}

export default TodoController