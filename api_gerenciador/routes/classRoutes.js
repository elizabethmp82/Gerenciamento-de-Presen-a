const express = require('express');
const { getAllClasses, createClass, updateClass, deleteClass } = require('../controllers/classControllers');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getAllClasses);
router.post('/', auth, createClass);
//router.post('/', createClass);
router.put('/:id', auth, updateClass);
router.delete('/:id', auth, deleteClass);

module.exports = router;
