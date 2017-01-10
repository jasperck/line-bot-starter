'use strict';

const bodyGenerator = require('./body-generator');
const messageProcessor = require('./message-processor');
const user = require('./user');
const reply = require('./reply');

module.exports = (req, res) => {
  var body = null;
  const incomeMessages = req.body.events;
  // identify user
  incomeMessages.map((incomeMessage) => {
    // 解析語句
    const messageProcessed = messageProcessor(incomeMessage);
    // 生成回訊 body
    body = bodyGenerator(messageProcessed);
  });
  return reply(body);
};
