const express = require("express");
const router = express.Router();
const user = require("./user.routes");
const buku = require("./buku.routes");

router.use("/api/user", user);
router.use("/api/buku", buku);

module.exports = router;