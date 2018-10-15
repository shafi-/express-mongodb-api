import express from 'express';
import bodyParser from 'body-parser';
import ApiRouter from './../routes/api';
import WebRouter from './../routes/web';
import mongodb from "./../db/mongodb"

//mongodb connect
mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', WebRouter);
app.use('/api/v1/todo', ApiRouter.todoRoute);
app.use('/api/v1/task', ApiRouter.taskRoute);

const port = 8000;
app.listen(port, () => console.log("Server is running at " + port));