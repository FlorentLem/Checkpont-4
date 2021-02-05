require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Admin } = require("../schema/Schema");

const addAdmin = async (req) => {
  const admin = await Admin.findAll();
  if (admin.length !== 0) {
    return {
      status: 401,
      content: { errorMessage: "admin already created" },
    };
  } else {
    const salt = await bcrypt.genSaltSync(10);
    const pword = req.body.password;
    try {
      const res = await Admin.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: await bcrypt.hashSync(pword, salt),
      });
      return {
        status: 201,
        content: {
          message: "account created",
          data: res,
        },
      };
    } catch (err) {
      return {
        content: {
          errorMessage: "error while creating the new user",
          err: err,
        },
        status: 500,
      };
    }
  }
};

const connectAdmin = async (req) => {
  const admin = await Admin.findOne({
    where: {
      email: req.body.email,
    },
  });

  const pword = req.body.password;

  if (!admin) {
    return {
      status: 404,
      content: {
        errorMessage: "Wrong email",
      },
    };
  } else {
    const match = await bcrypt.compare(pword, admin.password);
    if (match) {
      const adminData = {
        id: admin.id,
        firstname: admin.firstname,
        lastname: admin.lastname,
        email: admin.email,
      };
      try {
        const res = await jwt.sign(adminData, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: 864000,
        });
        return {
          status: 200,
          content: {
            message: "sucessfully authanticated",
            accessToken: `Bearer ${res}`,
          },
        };
      } catch (err) {
        return {
          status: 500,
          content: {
            errorMessage: "Token fail",
          },
        };
      }
    } else {
      return {
        status: 401,
        content: { errorMessage: "Wrong password" },
      };
    }
  }
};

module.exports = {
  connectAdmin,
  addAdmin,
};
