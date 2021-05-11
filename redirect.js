/*
 * Redirects http requests in Heroku Production to https.
 */
module.exports = function () {
  const environment = ["production"];
  const status = 302;
  return function (req, res, next) {
    if (process.env.NODE_ENV == environment) {
      if (req.headers["x-forwarded-proto"] != "https") {
        res.redirect(status, "https://" + req.hostname + req.originalUrl);
      } else {
        next();
      }
    } else {
      next();
    }
  };
};
