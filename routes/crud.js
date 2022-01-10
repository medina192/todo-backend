const { Router } = require('express');


const {
    createTask,
    findAllTasks,
    updateTask,
    deleteTask,
    deleteAllTasks,
} = require('../controllers/crud');


const router = Router();

router.post('/create', createTask);
router.get('/findall', findAllTasks);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);
router.delete('/deleteall', deleteAllTasks);


module.exports = router;