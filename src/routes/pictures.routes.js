const router = require("express").Router();
const passport = require("passport");
const multer = require("multer");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "public/images");
      },
      filename: (_, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });

    const upload = multer({ storage: storage }).single("file");

    upload(req, res, (err) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(201).json({ filename: req.file.filename });
      }
    });
  }
);

module.exports = router;
