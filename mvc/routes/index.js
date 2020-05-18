var express = require('express');
var router = express.Router();

const indexCtrl = require("../controllers/index");

router.get('/', indexCtrl.getHomePage);
router.get('/posts/:postid', indexCtrl.getBlogPost);
router.get('/filter', indexCtrl.getFilteredList);
router.get('/about', indexCtrl.getAboutPage);
router.get('/contact', indexCtrl.getContactPage);
router.get('/404', indexCtrl.get404);
router.get('*', indexCtrl.get404);


module.exports = router;
