'use strict';

const request = require('request-promise');
const MESSAGE_CONST = require('../constant/message');

module.exports = (body) => {
  const option = {
    method: MESSAGE_CONST.REQUEST_METHOD,
    uri: MESSAGE_CONST.REPLY_URI,
    json: MESSAGE_CONST.JSON,
    headers: MESSAGE_CONST.HEADERS,
    body
  };

  return request(option);
};