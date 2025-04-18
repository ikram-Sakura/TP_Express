const auth = (req, res, next) => {
    const token = req.query.token;
    if (token === '123456') {
      next();
    } else {
        res.status(401).send('Accès refusé. Token manquant ou invalide.');    }
  };
  
  module.exports = auth;
  