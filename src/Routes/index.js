const router =  require("express").Router();

router.use('/damages', require('./damages'));

module.exports = router;