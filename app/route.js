'use strict';

const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.bind(this));

module.exports = router;