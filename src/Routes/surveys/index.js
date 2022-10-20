const router = require("express").Router();

router.use('/', require('./post.survey'));
router.use('/', require('./get.survey'));
router.use('/', require('./delete.survey'));
router.use('/', require('./put.survey'));

module.exports = router;