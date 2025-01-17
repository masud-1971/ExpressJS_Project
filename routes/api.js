import express from 'express';
import * as taskController from '../controllers/taskController.js';
const router = express.Router();

router.post('/createTasks', taskController.createTask);
router.get('/readTasks', taskController.readTask);
router.put('/updateTasks', taskController.updateTask);
router.delete('/deleteTasks', taskController.deleteTask);
router.get('/create-token', taskController.createToken);

export default router;