'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const APP_CONST = require('../constant/app');
const route = require('./route');

class Server {
  /**
   * Constructor
   * @param config
   */
  constructor(config) {
    this.config = config;
    this.core = express();
  }

  /**
   * Initial middleware
   * @private
   */
  _initMiddleware() {
    this.core.use(bodyParser.json())
  }

  /**
   * Initial router
   * @private
   */
  _initRouter() {
    this.core.use(route);
  }

  /**
   * Initial boot server
   * @private
   */
  _boot() {
    this.core.listen(APP_CONST.PORT, console.log(`line bot server listened on ${APP_CONST.PORT}`));
  }

  /**
   * Boot server
   */
  boot() {
    this._initMiddleware();
    this._initRouter();
    this._boot();
  }

  /**
   * Halt server
   */
  halt() {
    process.exit();
  }
}

module.exports = Server;
