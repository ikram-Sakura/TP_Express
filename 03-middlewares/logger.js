const fs = require('fs');

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url} - ${req.ip}\n`;
  fs.appendFile('access.log', log, err => {
    if (err) console.error('Erreur de log:', err);
  });
  next();
};

module.exports = logger;
