const express = require('express');
const profileRouter = require('./profile');
const highlineRouter = require('./highline');
const messageRouter = require('./message');
const cardsRouter = require('./cards');
const requestRouter = require('./request');
//create router
const router = express.Router();

router.use('/profile',profileRouter);
router.use('/highline',highlineRouter);
router.use('/message',messageRouter);
router.use('/cards',cardsRouter);
router.use('/request',requestRouter);
module.exports = router