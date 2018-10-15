class TaskController extends Controller{
    static index(req, res){
        let data = {};
        Controller.success(res, data);
    }

    static save(req, res){
        Controller.error(res, 'Action not allowed');
    }

    static show(req, res){
        Controller.invalid(res, [], 'Action not allowed');
    }
}

export default TaskController