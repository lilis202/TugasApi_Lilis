const userController = require('../controllers/user_controllers')
const express = require('express')
const router = express.Router()

router.get('/',userController.getAllStudent)
router.get('/:id',userController.getStudentById)
router.post('/',userController.addStudent)
module.exports = router