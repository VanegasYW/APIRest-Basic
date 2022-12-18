const {Router} = require('express');
const {getUser, getUserById, postUser, putUser, deleteUser} = require('../controllers/users.controller');

const router = Router()

router.get("/", getUser)

router.get("/:id",getUserById)

router.post("/",  postUser)

router.put("/:id", putUser)

router.delete("/:id", deleteUser)

module.exports = router