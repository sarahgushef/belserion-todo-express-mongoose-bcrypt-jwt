const router = require('express').Router();

router.post('/register', require('./controllers.js').userRegistration);
router.post('/login', require('./controllers.js').userLogin);

module.exports = router;
