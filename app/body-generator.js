'use strict';

const _ = require('lodash');
const REPLY_TEMPLATE = require('../template');

module.exports = (payload) => {
  const replyToken = payload.replyToken;

  switch (payload.type) {
    case 'text':
      const text = payload.message;
      const res = _.merge(REPLY_TEMPLATE.TEXT, { replyToken, messages: [{ text }] });
      return res;
    default:
      break;
  }
};
