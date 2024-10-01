const {Router} = require('express');
const {getUsers, getUserById, postUser, putUser, deleteUser} = require('../controllers/users.controller');
const rateLimit = require('express-rate-limit');

// Instance of the Express Router.
const router = Router()

// Routes for the user management system. 
// Configure rate limiter: maximum of 100 requests per 15 minutes
const getUsersLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Apply rate limiter to getUsers route
router.get("/", getUsersLimiter, getUsers)
router.get("/:id",getUserById)
router.post("/",  postUser)
router.put("/:id", putUser)

// Configure rate limiter: maximum of 100 requests per 15 minutes
const deleteUserLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Apply rate limiter to deleteUser route
router.delete("/:id", deleteUserLimiter, deleteUser)

// This line exports the router instance so it can be used in other parts of the application.
module.exports = router