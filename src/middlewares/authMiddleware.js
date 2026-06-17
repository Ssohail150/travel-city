// Optional middleware for later phases.
// For now, this file is only a placeholder so beginners can later add JWT auth.

const protect = (req, res, next) => {
  // TODO: Read token from Authorization header and verify user.
  next();
};

module.exports = { protect };
