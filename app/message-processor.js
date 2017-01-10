'use strict';

const messageIsBelongsTo = (message, checkpool) => checkpool.indexOf(message) > - 1;

const grettings = ['hi', 'hello', 'yo', '你好', '哈嚕', '嗨'];

module.exports = (message) => {
  var messageProcessed = {
    type: message.message.type,
    replyToken: message.replyToken,
    message: ''
  };

  if (messageIsBelongsTo(message.message.text, grettings)) {
    messageProcessed.message = message.message.text;
  } else {
    messageProcessed.message = 'sorry I don\'t understand'
  }

  return messageProcessed;
};