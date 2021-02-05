require("dotenv").config();
const router = require("express").Router();
const passport = require("passport");
const {
  addPicture,
  addProjet,
  getProjet,
  deleteProjet,
  getProjetById,
} = require("../models/projets");

router.get("/", async (req, res) => {
  const projet = await getProjet();
  res.status(projet.status).json(projet.content);
});

router.get("/:id", async (req, res) => {
  const projet = await getProjetById(req);
  res.status(projet.status).json(projet.content);
});

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const pic = await addPicture(req);
    const projet = await addProjet(req, pic.content.picture_id);
    res.status(projet.status).json(projet.content);
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const deletedProjet = await deleteProjet(req);
    res.status(deletedProjet.status).json(deletedProjet.content);
  }
);

module.exports = router;
