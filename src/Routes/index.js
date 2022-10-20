const router =  require("express").Router();

router.use('/surveys', require('./surveys'));
router.use('/results', require('./results'));

module.exports = router;