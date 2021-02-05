const { Picture, Projet, Langage } = require("../schema/Schema");

const addPicture = async (req) => {
  try {
    const res = await Picture.create({
      name: req.body.name,
    });
    const picture_id = await Picture.findOne({
      where: {
        name: req.body.name,
      },
    });
    return {
      content: { picture_id: picture_id.id },
    };
  } catch (err) {
    console.log(err);
  }
};

const addProjet = async (req, picture_id) => {
  try {
    const res = await Projet.create({
      title: req.body.title,
      description: req.body.description,
      pictureId: picture_id,
    });
    req.body.langages.forEach(async (el) => {
      let langage = await Langage.create({
        name: el,
      });
      await res.addLangage(langage);
    });
    return {
      status: 201,
      content: {
        message: "Projet créé",
        res: res,
      },
    };
  } catch (err) {
    return {
      status: 500,
      content: {
        errorMessage: "Error server",
        err: err,
      },
    };
  }
};

const getProjet = async () => {
  try {
    const projet = await Projet.findAll({
      include: [Picture],
    });
    return {
      status: 200,
      content: {
        data: projet,
      },
    };
  } catch (err) {
    return {
      status: 200,
      content: {
        errorMessage: "Problem server",
        err: err,
      },
    };
  }
};

const getProjetById = async (req) => {
  const projet = await Projet.findOne({
    where: {
      id: req.params.id,
    },
    include: [Langage, Picture],
  });

  if (projet) {
    return {
      status: 200,
      content: {
        data: projet,
      },
    };
  } else {
    return {
      status: 404,
      content: {
        errorMessage: "Projet not found",
      },
    };
  }
};

const deleteProjet = async (req) => {
  const exist = await Projet.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (exist) {
    try {
      const projet = await Projet.destroy({
        where: {
          id: req.params.id,
        },
      });
      return {
        status: 204,
        content: {
          message: "Projet deleted",
          content: projet,
        },
      };
    } catch (err) {
      return {
        status: 500,
        content: {
          errorMessage: "error while deleting Projet",
          err: err,
        },
      };
    }
  } else {
    return {
      status: 401,
      content: {
        errorMessage: "Projet doesnt exist",
      },
    };
  }
};

module.exports = {
  addPicture,
  addProjet,
  getProjet,
  deleteProjet,
  getProjetById,
};
