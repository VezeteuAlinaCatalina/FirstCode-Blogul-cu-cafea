const { application } = require('express');
const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
const articles = require('../models/article');

/**
 * my Routes
 */
router.get('/acasa',Controller.homepage);
router.get('/contact',Controller.contact);
router.get('/blog',Controller.blog);
router.get('/trimis',Controller.trimis);
router.get('/adauga',Controller.adauga);


module.exports = router;