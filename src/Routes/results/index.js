const router = require("express").Router();

router.use('/', require('./post.result'));
router.use('/', require('./get.result'));
router.use('/', require('./delete.result'));
router.use('/', require('./put.result'));

module.exports = router;