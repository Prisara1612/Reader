const express = require('express');

const router = express.Router()

const {getUsers,createUser}=require('../controllers/user.js')

router.get("/users",getUsers)
router.post("/users",createUser)

module.exports=router;