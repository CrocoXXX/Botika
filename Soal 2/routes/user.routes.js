const express = require("express");
const router = express.Router();
const Controller = require("../controllers/user.controller");

router.get("/", Controller.getUser);
router.post("/", Controller.createUser);
router.put("/:id", Controller.updateUser);
router.delete("/:id", Controller.deleteUser);

module.exports = router;