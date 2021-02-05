const router = require("express").Router();
const admin = require("./admin.routes");
const projets = require("./projets.routes");
const pictures = require("./pictures.routes");
const email = require("./email.routes");

router.use("/admin", admin);
router.use("/projets", projets);
router.use("/pictures", pictures);
router.use("/email", email);

module.exports = router;
