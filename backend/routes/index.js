const express = require("express");
const router = express.Router();
const userRouter = require("./user")

//router has /api/v1
router.use("/user",userRouter);

module.exports = router