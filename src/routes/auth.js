import assert from "assert";
import passport from "passport";
import passportJWT from "passport-jwt";

export default server => {
  assert(process.env.JWT_SECRET, "Environment variable JWT_SECRET not set");

  const secret = process.env.JWT_SECRET;

  passport.use(
    new passportJWT.Strategy(
      {
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
      },
      (user, next) => {
        next(null, user);
      }
    )
  );

  server.use(passport.initialize());
};
