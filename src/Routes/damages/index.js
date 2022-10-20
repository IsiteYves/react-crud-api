const router = require("express").Router();

router.use('/', require('./post.damage'));
router.use('/', require('./get.damage'));
router.use('/', require('./delete.damage'));
router.use('/', require('./put.damage'));

module.exports = router;