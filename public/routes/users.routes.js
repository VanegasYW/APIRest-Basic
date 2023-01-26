const {Router} = require('express');
const {getUsers, getUserById, postUser, putUser, deleteUser} = require('../controllers/users.controller');

// Instance of the Express Router.
const router = Router()

// Routes for the user management system. 
router.get("/", getUsers)
router.get("/:id",getUserById)
router.post("/",  postUser)
router.put("/:id", putUser)
router.delete("/:id", deleteUser)

// This line exports the router instance so it can be used in other parts of the application.
module.exports = router