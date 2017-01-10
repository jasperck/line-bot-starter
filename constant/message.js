'use strict';

const APP_CONST = require('./app');

module.exports = {
  REQUEST_METHOD: 'post',
  REPLY_URI: 'https://api.line.me/v2/bot/message/reply',
  PUSH_URI: 'https://api.line.me/v2/bot/message/push',
  HEADERS: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${APP_CONST.CHANNEL_ACCESS_TOKEN}`
  },
  JSON: true
};