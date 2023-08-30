const express = require("express");
const router = express.Router();
const Controller = require("../controllers/buku.contoller");

router.get("/", Controller.getBuku);
router.post("/", Controller.createBuku);
router.put("/:id", Controller.updateBuku);
router.delete("/:id", Controller.deleteBuku);

module.exports = router;