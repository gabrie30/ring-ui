var deepEquals = require('mout/lang/deepEquals');

var DEFAULT_COOKIE_NAME = 'localStorage';
var DEFAULT_SESSION_COOKIE_NAME = 'sessionStorage';
var DEFAULT_CHECK_DELAY = 3000;
var COOKIE_EXPIRES = 365;

/**
 * @prop {string} cookieName
 *
 * @param {{cookieName: string}} config
 * @param {{checkDelay: number}} config
 * @param {{type: string}} config
 * @return {FallbackStorage}
 * @constructor
 */
var FallbackStorage = function (config) {
  if (!(this instanceof FallbackStorage)) {
    return new FallbackStorage(config);
  }

  config = config || {};
  var session = config.type === 'session';

  this.cookieName = config.cookieName || (session ? DEFAULT_SESSION_COOKIE_NAME : DEFAULT_COOKIE_NAME);
  this.checkDelay = config.checkDelay || DEFAULT_CHECK_DELAY;
  this.expires = session ? COOKIE_EXPIRES : null;
};

/**
 * Maximum storage size
 * @see http://browsercookielimits.squawky.net/
 * @type {number}
 */
FallbackStorage.QUOTA = 4093;

/**
 * @param {string} name
 * @param {string} value
 * @param {number} days
 * @private
 */
FallbackStorage._createCookie = function (name, value, days) {
  var date;
  var expires;

  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = ';';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
};

/**
 *
 * @param {string} name
 * @return {string}
 * @private
 */
FallbackStorage._readCookie = function (name) {
  var nameEQ = name + '=';
  var cookies = document.cookie.split(';');

  var cookie;
  for (var i = 0; i < cookies.length; i++) {
    cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
};

/**
 * @return {Promise}
 * @private
 */
FallbackStorage.prototype._read = function () {
  return new Promise(resolve => {
    var rawData = FallbackStorage._readCookie(this.cookieName);
    resolve(JSON.parse(decodeURIComponent(rawData)));
  }).catch(() => ({}));
};

/**
 * @param data
 * @return {Promise}
 * @private
 */
FallbackStorage.prototype._write = function (data) {
  return new Promise(resolve => {
    var stringData = encodeURIComponent(JSON.stringify(data));
    FallbackStorage._createCookie(this.cookieName, stringData === '{}' ? '' : stringData, this.expires);
    return resolve(data);
  });
};

/**
 * @param {string} key
 * @return {Promise}
 */
FallbackStorage.prototype.get = function (key) {
  return this._read().then(function (data) {
    return data[key] || null;
  });
};

/**
 * @param {string} key
 * @param {object} value
 * @return {Promise}
 */
FallbackStorage.prototype.set = function (key, value) {
  var self = this;

  return this._read().then(function (data) {
    if (key) {
      if (value != null) {
        data[key] = value;
      } else {
        delete data[key];
      }
    }

    return self._write(data);
  });
};

/**
 * @param {string} key
 * @return {Promise}
 */
FallbackStorage.prototype.remove = function (key) {
  return this.set(key, null);
};

/**
 *
 * @param {function(string, value)} callback
 * @return {Promise}
 */
FallbackStorage.prototype.each = function (callback) {
  if (typeof callback !== 'function') {
    return Promise.reject(new Error('Callback is not a function'));
  }

  return this._read().then(function (data) {
    var promises = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        promises.push(callback(key, data[key]));
      }
    }
    return Promise.all(promises);
  });
};

/**
 * @param {string} key
 * @param {Function} calback
 * @return {Function}
 */
FallbackStorage.prototype.on = function (key, calback) {
  var self = this;
  var stop = false;

  function checkForChange(value) {
    self.get(key).then(function (newValue) {
      if (stop) {
        return;
      }

      if (!deepEquals(value, newValue)) {
        calback(newValue);
      }

      Promise.resolve(value).then(() => window.setTimeout(checkForChange, self.checkDelay));
    });
  }

  self.get(key).then(checkForChange);

  return function () {
    stop = true;
  };
};

module.exports = FallbackStorage;
