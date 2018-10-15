import express from 'express'
import appRoot from 'app-root-path'

const router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(appRoot + '/index.html');
});

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to TODO-Express',
        data: 'Welcome to todo-express'
    });
});

export default router;