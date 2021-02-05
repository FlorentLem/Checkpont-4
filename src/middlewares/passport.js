require("dotenv").config();
const { ExtractJwt } = require("passport-jwt");
const JwtStrategy = require("passport-jwt").Strategy;
const { Admin } = require("../schema/Schema");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const strategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const admin = await Admin.findOne({
      where: {
        id: payload.id,
      },
    });
    if (admin) {
      return done(null, admin);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err, null);
  }
});

const passportJwt = (passport) => {
  passport.use(strategy);
};

module.exports = {
  passportJwt,
};
