export class Controller {
    static success(res, data, msg = '', status = 1) {
        res.status(200).json({
            status: status,
            data: data,
            message: msg
        });
    }

    static error(res, msg = 'error', data = [], status = 0) {
        res.status(200).json({
            status: status,
            message: msg,
            data: data
        });
    }

    static invalid(res, data = [], msg = 'invalid', status = -1) {
        res.status(200).json({
            status: status,
            data: data
        });
    }
}
