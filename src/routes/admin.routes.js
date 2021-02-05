require("dotenv").config();
const router = require("express").Router();
const { addAdmin, connectAdmin } = require("../models/admin");

router.post("/register", async (req, res) => {
  const admin = await addAdmin(req);
  res.status(admin.status).json(admin.content);
});

router.post("/login", async (req, res) => {
  const admin = await connectAdmin(req);
  res.status(admin.status).json(admin.content);
});

module.exports = router;
