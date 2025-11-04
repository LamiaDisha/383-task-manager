const express = require('express');
const router = express.Router();

// Sample 5 tasks
const tasks = [
    { id: 1, title: 'Task 1', completed: false, priority: 'low', createdAt: new Date() },
    { id: 2, title: 'Task 2', completed: true, priority: 'medium', createdAt: new Date() },
    { id: 3, title: 'Task 3', completed: false, priority: 'high', createdAt: new Date() },
    { id: 4, title: 'Task 4', completed: true, priority: 'medium', createdAt: new Date() },
    { id: 5, title: 'Task 5', completed: false, priority: 'low', createdAt: new Date() },
];

// GET /tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

module.exports = router;
