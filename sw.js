/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"0b2fe91316f63bcad6ff8bf8f2697ae0","url":"2017/01/11/welcome-to-jekyll/index.html"},{"revision":"bf56e6ab0a39ceeb41da7f90ede04fed","url":"2017/01/14/jekyll-search/index.html"},{"revision":"7a8038876b299ad2252290273ff440a7","url":"2017/01/15/bigfoot-jekyll/index.html"},{"revision":"09ea184db64fbb9c24db2ce4d88aa081","url":"2017/01/15/jekyll-disqus--/index.html"},{"revision":"349a17329ac4ca43b8111e7b2c66231e","url":"2017/01/16/jikill-implementation-list/index.html"},{"revision":"6485e072fb5257fb64a6ea7f1621c450","url":"2017/01/18/improve-programming-skills/index.html"},{"revision":"f1f2e4d4ef15604b93849beef351bc65","url":"2017/01/27/unity3d-how-to-load-current-level-or-scene/index.html"},{"revision":"0ba227a55d118cc1817b0bcfb5dfbe7c","url":"2017/02/04/unity3d-singleton-pattern-example/index.html"},{"revision":"674d3d274b6ad6aad767f87ff52e9a28","url":"2017/02/05/unity3d-memorypool-system-example/index.html"},{"revision":"872a5ec35d06b72dc7dfe74300ac1589","url":"2017/02/06/unity3d-message-handling-and-eventmanager-example/index.html"},{"revision":"a753d69b080b73c5a47cd0209bb784fc","url":"2017/02/19/unity3d-optimizing-performance/index.html"},{"revision":"580a1297d7d18f36db95ae135bb77cdd","url":"2017/03/10/unity-cloud-build/index.html"},{"revision":"ea8ee4c3be899a06141cd2a9135aac43","url":"2017/08/01/Python-stimulating-brain/index.html"},{"revision":"574daf6063e324049bf271c5060c1888","url":"2017/08/13/Python-exam200-for-beginning/index.html"},{"revision":"3f760c1e7c83c093751fbae5d2fa84ad","url":"2017/09/14/Coding-technology/index.html"},{"revision":"54630c528211421e6e84dd5decb705bf","url":"2017/09/23/The-Nature-of-Software-Development/index.html"},{"revision":"c73883bbc14f4e6fd5405b445dd11c27","url":"2017/10/13/How-to-live-as-an-IT-professional/index.html"},{"revision":"a7763c7486dab2fd9433e24776e2088a","url":"2017/10/29/HackerRank-Warmup-Solve-Me-First/index.html"},{"revision":"8d015ec87a0d28347b3377490f1e30a5","url":"2017/10/30/HackerRank-Warmup-Simple-Array-Sum/index.html"},{"revision":"249fcd2f08fd36942bfe2eed19fa5714","url":"2017/10/31/HackerRank-Warmup-Compare-the-Triplets/index.html"},{"revision":"58337a373dde0f90e0e52bbf41cb4205","url":"2017/11/01/HackerRank-Warmup-A-Very-Big-Sum/index.html"},{"revision":"0771a89e7e00bbbd5d11abc3b876c594","url":"2017/11/02/HackerRank-Warmup-Diagonal-Difference/index.html"},{"revision":"fb3333be85e436535bfca06525ba29d8","url":"2017/11/02/Soft-Skills/index.html"},{"revision":"82d785fb6b2029aea447a9477307b421","url":"2017/11/03/HackerRank-Warmup-Plus-Minus/index.html"},{"revision":"60ee4c46525b71937d6bd7743aedfc08","url":"2017/11/04/HackerRank-Warmup-Staircase/index.html"},{"revision":"a380edc1e5e0bd4df97fb2e635828d2a","url":"2017/11/05/HackerRank-Warmup-Mini-Max-Sum/index.html"},{"revision":"386ab9e8b5bb6f9360ad3b4414a79210","url":"2017/11/06/HackerRank-Warmup-Birthday-Cake-Candles/index.html"},{"revision":"afaa38d4f9c0acf3bf06f31f91351360","url":"2017/11/07/HackerRank-Implementation-Grading-Students/index.html"},{"revision":"25f6fc451c5c29a14d1e01c85a2a96b7","url":"2017/11/07/HackerRank-Warmup-Time-Conversion/index.html"},{"revision":"235a4bd0fcce6fed707469acd3241612","url":"2017/11/08/3d-Graphics-Culling/index.html"},{"revision":"dce4172d54ab9666492c36da56ece029","url":"2017/11/08/HackerRank-Implementation-Apple-and-Orange/index.html"},{"revision":"b27520774c14190c9778a95492c1692e","url":"2017/11/08/ProcessAndThread/index.html"},{"revision":"608e9ae5f2763b31e7ef77c116c28232","url":"2017/11/09/HackerRank-Implementation-Kangaroo/index.html"},{"revision":"9f54211914c9cda74f817ed0d8a774bc","url":"2017/11/12/Euclidean-algorithm/index.html"},{"revision":"175312ac9d954d36a6bf2a6b9f4eb0cf","url":"2017/11/12/HackerRank-Implementation-Between-Two-Sets/index.html"},{"revision":"0094989aabb496b9a24ba8745505d502","url":"2017/11/12/HackerRank-Implementation-Birthday-Chocolate/index.html"},{"revision":"a2bbe7e44ab6428a5effab4eb683d585","url":"2017/11/12/HackerRank-Implementation-Breaking-the-Records/index.html"},{"revision":"fd59bf2e344ef6c15e5d51e3c6f6c3b1","url":"2017/11/13/Software-Craftsmanship/index.html"},{"revision":"70e4c3f07d67591c9e1f9d800c019ee8","url":"2017/11/14/HackerRank-Implementation-Divisible-Sum-Pairs/index.html"},{"revision":"f35ce4585463d6b476ddc71c3df9ce09","url":"2017/11/15/HackerRank-Implementation-Migratory-Birds/index.html"},{"revision":"252700e28f59757d08183ca43ded3782","url":"2017/11/16/HackerRank-Implementation-Day-of-the-Programmer/index.html"},{"revision":"a1f822163336df9521b799b972a165fb","url":"2017/11/17/HackerRank-Implementation-Bon-Appétit/index.html"},{"revision":"9a0655263617de3d241cec770f38fe02","url":"2017/12/12/Pattern-And-OOP-Coding-Rule/index.html"},{"revision":"c20516073dbbc8a435ced49eda414264","url":"2017/12/20/Game-Programming-Pattern/index.html"},{"revision":"6040c4a92cf11ec13b9a3f62ce486625","url":"2017/12/24/CSharp-Coding-Standard/index.html"},{"revision":"fede4d4f33ea181ddb93c2d36a3cdd1a","url":"2017/12/28/Unity-IDE-Rider/index.html"},{"revision":"72a095d2263aecfbc55eba8b5c0c577b","url":"2018/01/17/How-to-be-a-good-programmer/index.html"},{"revision":"c01367a7d59a4637780ada52964d9aa8","url":"2018/02/17/Lie-Read-Algorithm/index.html"},{"revision":"047c8ceaba22c864c846a66681190f24","url":"2018/03/17/Back-Number/index.html"},{"revision":"f1437192ca0b61e0f33ae07c09cea160","url":"2018/03/17/Behind-Door/index.html"},{"revision":"4d7393060113a4148296d7b38eb8a878","url":"2018/07/05/knou-grade-review-second/index.html"},{"revision":"094f7b848fc37580062868b63096d16c","url":"2018/07/07/The-Last-Mrs-Parrish/index.html"},{"revision":"6312323ffdf2c4f364ce6c410319414b","url":"2018/07/21/until-youre-mine/index.html"},{"revision":"21397a46b784227cb34185aa4236b24c","url":"2018/08/05/Have-you-ever-memorized-an-English-book/index.html"},{"revision":"f0b2d10d298902d0f1a95870c20a00c4","url":"2018/10/20/book-list/index.html"},{"revision":"5eec30410598b52b5dca78b419a3e72c","url":"2018/10/20/udemy-list/index.html"},{"revision":"6ed1dc5816086e141c87c6ab750cb64f","url":"2018/10/20/unity-tutorial-list/index.html"},{"revision":"220d7a5fab3b4ddb9cdff82cd367151a","url":"2018/10/26/the-pinnacle-of-programming-summary/index.html"},{"revision":"fc0575ebcf6c9c81b8ee5fd0258cbafb","url":"2018/10/26/the-pinnacle-of-programming/index.html"},{"revision":"474936c0dbb68c4ab870e8456cc2e3f4","url":"2018/10/29/Automate-the-Boring-Stuff-with-Python/index.html"},{"revision":"b5d48a5f6984fba6422f6bf7b9375811","url":"2018/10/31/unreal-github-to-ue4-download-and-build/index.html"},{"revision":"89d1bfb049335854136ef07626ee78e0","url":"2018/11/06/effective-csharp/index.html"},{"revision":"0954fadf2697c514097223b7622ad7b3","url":"2018/11/08/knou-list/index.html"},{"revision":"74984104abe319d6820fbaa6bfa114c7","url":"2018/11/12/hanmadiro-part-secret/index.html"},{"revision":"006467382bd42af02dddcf8cafb1824d","url":"2018/12/12/pope-tv-1/index.html"},{"revision":"d17caeb3637035b6def33f8e5396105f","url":"2018/12/14/hanmadiro-part-0/index.html"},{"revision":"73ce3937f6c6df2c6b958ff15b0b140e","url":"2018/12/14/unity3d-git-integration/index.html"},{"revision":"7498358950f2364f612abb31bf4cd369","url":"2018/12/18/knou-grade-review-third/index.html"},{"revision":"d1e78dfa63ba9c9f25b3aa253903be16","url":"2018/12/20/reverse-learning-software-development/index.html"},{"revision":"5bf44d63f1e0128e1ed3a52d87e02adb","url":"2018/12/28/the-clean-coder/index.html"},{"revision":"a80021c0331195a3eea8a1f1f3e51b15","url":"2018/12/30/codewars-Count-of-positives-sum-of-negatives/index.html"},{"revision":"f2f7894818904093d9c88a2a3b342ba5","url":"2018/12/30/codewars-Printer-Errors/index.html"},{"revision":"622e476af6e5529be5bbf13c7f79ea72","url":"2018/12/30/to-live-as-a-programmer/index.html"},{"revision":"f70cf8f2c63e1334128d53d33e0f22b6","url":"2018/12/31/codewars-Keep-Hydrated/index.html"},{"revision":"0141422c901794e7cb339b0db893eede","url":"2018/12/31/codewars-Sum-without-highest-and-lowest-number/index.html"},{"revision":"3bb95d5007170d2899faaffb065cbe02","url":"2019/01/01/codewars-Invert-values/index.html"},{"revision":"03c8e4d268240411e75180490a2c1fa8","url":"2019/01/01/codewars-Is-n-divisible-by-x-and-y/index.html"},{"revision":"72aefd44e6227dfcc22910589ffed239","url":"2019/01/01/How-to-live-as-a-programmer/index.html"},{"revision":"32e9e0ee998d88c70fd779e16755e246","url":"2019/01/03/codewars-Fake-Binary/index.html"},{"revision":"f2e4fcc4ec5f8f48124e72d13f734ce9","url":"2019/01/03/codewars-Find-the-unique-number/index.html"},{"revision":"9b9f149db52a9646e9cf2150db7e74e8","url":"2019/01/03/codewars-Remove-the-minimum/index.html"},{"revision":"3dd343c97f48de416530c1532a6fb987","url":"2019/01/03/codewars-The-Feast-of-Many-Beasts/index.html"},{"revision":"36c10bbc966383ca20fd77037d71b03d","url":"2019/01/04/codewars-Factorial/index.html"},{"revision":"edddc5dc501ab7444395a78433b61ba8","url":"2019/01/04/codewars-Who-likes-it/index.html"},{"revision":"941cb4e621a76fdd04ad31a38cdd937e","url":"2019/01/04/How-to-live-as-a-game-programmer/index.html"},{"revision":"7fcf7337ad65ea7c262219e574980c61","url":"2019/01/05/codewars-Help-the-bookseller/index.html"},{"revision":"2efa751a621a0436d766571f61fa2bbf","url":"2019/01/05/codewars-Sum-of-a-sequence/index.html"},{"revision":"849fcd8e898daa370fca0daf3c0472f8","url":"2019/01/06/codewars-Are-they-the-same/index.html"},{"revision":"2a2b224be93041cc8a0993d1e5ea68b5","url":"2019/01/06/codewars-Vasya-Clerk/index.html"},{"revision":"b77f089026e9794362bbb94352057864","url":"2019/01/07/codewars-Maximum-Length-Difference/index.html"},{"revision":"3fe721b52e94648ccd2b75406d040db6","url":"2019/01/07/codewars-Speed-Control/index.html"},{"revision":"f61388a66fd1b85c8ff529e7b7a67d53","url":"2019/01/08/codewars-Build-Tower/index.html"},{"revision":"26a26d751d2a6699614fe8f693d05acc","url":"2019/01/08/codewars-Steps-in-Primes/index.html"},{"revision":"abcb424cdf869ca507dbca8a84c08f63","url":"2019/01/09/codewars-longest-palindrome/index.html"},{"revision":"22b41ef62c9daf453d1358cbeca2d8ee","url":"2019/01/09/codewars-Parse-HTML-CSS-Colors/index.html"},{"revision":"9a69a41a7f7111e26bf489838ec59eb7","url":"2019/01/10/codewars-Alphabet-war-airstrike-letters-massacre/index.html"},{"revision":"d19a9b7a786d44e3a0f09a7496a68b0f","url":"2019/01/10/codewars-Sum-The-Tree/index.html"},{"revision":"77d39357b223bdcf375affda7bc9267a","url":"2019/01/11/codewars-Data-Reverse/index.html"},{"revision":"f2aeae0416c647060952583b012cf880","url":"2019/01/11/codewars-extract-file-name/index.html"},{"revision":"52d372ffb69663ae9fde4099b3f5b01d","url":"2019/01/12/codewars-Write-Number-in-Expanded-Form/index.html"},{"revision":"3c16145ce33e1f8ab395bf21354bc663","url":"2019/01/12/hanmadiro-part-1/index.html"},{"revision":"a351fef1cb24d8381ab532fff10018ff","url":"2019/01/13/codewars-Array/index.html"},{"revision":"64b419e6c1ae8c2cfa5c6320629497a1","url":"2019/01/13/codewars-Playing-with-digits/index.html"},{"revision":"65e11fe18c97a3522510b1a58efb43b0","url":"2019/01/15/codewars-Build-a-pile-of-Cubes/index.html"},{"revision":"32aca1c7ea768d8a33dab7068b88cb85","url":"2019/01/15/codewars-Persistent-Bugger/index.html"},{"revision":"0c638b3cc5f81e2fb26d5bb2f13bb277","url":"2019/01/18/codewars-Reverse-or-rotate/index.html"},{"revision":"89f06a3d3b3fdb8c91719896eb24571f","url":"2019/01/18/codewars-String-tops/index.html"},{"revision":"bf27c6f4a38e936179aa245db451c65c","url":"2019/01/19/codewars-Basic-DeNico/index.html"},{"revision":"b28fa152c1659ba5e7814d55e8d62d2c","url":"2019/01/19/codewars-Maze-Runner/index.html"},{"revision":"abb2e1ace1296dda301c6ebe9fe4a5ab","url":"2019/01/19/codewars-Play-with-two-Strings/index.html"},{"revision":"cedb525c63282fee9c52f0bfaa1793ac","url":"2019/01/19/codewars-Street-Fighter-2-Character-Selection/index.html"},{"revision":"98aa076a4069402febc7c6245287af1a","url":"2019/01/20/codewars-Best-travel/index.html"},{"revision":"bfd6dc715b7757b4f1bfad544ce33b68","url":"2019/01/20/codewars-Paul-Cipher-And-Kevin-Arnold/index.html"},{"revision":"91aa7daba1ba6988a0c85ede7099ec04","url":"2019/01/22/codewars-Alphabet-wars-nuclear-strike/index.html"},{"revision":"486ceb19cc4187dd8252ef2439538ed0","url":"2019/01/22/codewars-N00bify-English-to-n00b-Translator/index.html"},{"revision":"7a3c7762f903e6be1c14458ebee1854b","url":"2019/01/23/codewars-Domain-name-validator/index.html"},{"revision":"d5d897aa0577fb5b71fcfa7345b17f1b","url":"2019/01/23/codewars-Integer triangles/index.html"},{"revision":"ef5353d55c1fe30ffcc3eb239c20cf38","url":"2019/01/24/codewars-Alphabet-war-Wo-lo-loooooo-priests-join-the-war/index.html"},{"revision":"f82d899f816a77ecdd078bbf5cea492b","url":"2019/01/24/codewars-Grasshopper-Summation/index.html"},{"revision":"ab56b32f4077448908738490ddbb1249","url":"2019/01/24/codewars-Is-this-a-triangle/index.html"},{"revision":"cd4fecce32c3d793e720f065b3b8b9bd","url":"2019/01/24/codewars-Loading-Kata-Rot13/index.html"},{"revision":"b674bdc93462370d12c77a4686aac34a","url":"2019/01/24/codewars-Mixbonacci/index.html"},{"revision":"294d584eb33652ca100cb6a2c6b19087","url":"2019/01/24/codewars-Take-a-Ten-Minute-Walk/index.html"},{"revision":"b3e98fc24f8430237973ab5fda18c60c","url":"2019/01/25/codewars-Consecutive-strings/index.html"},{"revision":"3eee3ca831c1722e39933c54f4d09111","url":"2019/01/25/codewars-Ones-and-Zeros/index.html"},{"revision":"563918984be0c42651ec1abd2b459a94","url":"2019/01/26/codewars-Convert-number-to-reversed-array-of-digits/index.html"},{"revision":"fc252570144f0f6520e267f902a163db","url":"2019/01/26/codewars-Delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/index.html"},{"revision":"bc822f7d59fa704d9ae72f7a5b80f543","url":"2019/01/26/codewars-List-Filtering/index.html"},{"revision":"82ef7e986be3a7707c1788d2538f4a8d","url":"2019/01/26/codewars-Remove-First-and-Last-Character/index.html"},{"revision":"6dc3e6b0726f1c1c480e6fc5ca717f69","url":"2019/01/27/codewars-Rock-Paper-Scissors/index.html"},{"revision":"5b86f2e6b0dd8e63577b76c86d8eec0f","url":"2019/01/27/codewars-Take-a-Number-And-Sum-Its-Digits-Raised-To-The-Consecutive-Powers-And/index.html"},{"revision":"d04255ed59cb473e5b5b2dbe69a9de2a","url":"2019/01/28/codewars-Basic-Mathematical-Operations/index.html"},{"revision":"064483158d1cf9d86bc9bca35f73bc06","url":"2019/01/28/codewars-Double-Char/index.html"},{"revision":"3e9c9ef3bc0f958bcac4fdd01e9d2bed","url":"2019/01/30/codewars-Exes-and-Ohs/index.html"},{"revision":"362d3330eee7bb7401b9dd33f7146818","url":"2019/01/30/codewars-Maximum-subarray-sum/index.html"},{"revision":"c70912868f0d5f8d82d0726850f301ce","url":"2019/01/31/codewars-Find the smallest-integer-in-the-array/index.html"},{"revision":"c496da2ff92be7f338fb05a25a2c4b81","url":"2019/01/31/codewars-Growth-of-a-Population/index.html"},{"revision":"8f2543568889f1d7ccafd63213a390f4","url":"2019/02/09/codewars-Return-Negative/index.html"},{"revision":"984747fc2847a622aa8cf68767c07c3c","url":"2019/03/17/Extend-the-Unity3d-Editor/index.html"},{"revision":"8c731ee3b39eefef23aa610295b07ebc","url":"2019/09/14/UniRx-Example-View-Screen-Count/index.html"},{"revision":"51360741d0d1f8bdbb038d21a526e83a","url":"2019/09/15/UniRx-Example-IsGrounded/index.html"},{"revision":"f10b68d62aa57987e886c1546fb4fa02","url":"2019/09/29/UniRx-Count-Down-Timer/index.html"},{"revision":"fbe3b517c159ea1c9299797b806b7aae","url":"2019/09/29/UniRx-Hot-Cold/index.html"},{"revision":"2772a40f2e76f8383c26215a8fe93892","url":"2019/09/30/UniRx-Animator-Trigger-Bool/index.html"},{"revision":"e0cf3ff9d1d7180f3bd6980ab98d6a42","url":"2019/09/30/UniRx-Photon-Cloud-RoomList/index.html"},{"revision":"dd964caaf4cc7fa77bd32348d12b8c3a","url":"2019/10/05/UniRx-ObservableValueChanged/index.html"},{"revision":"a0b9ef8033e51cb56027ec0051e45a96","url":"2019/10/05/UniRx-StateMachineBehaviour-Animator/index.html"},{"revision":"e40852faf96dd22bd5bc798123c23079","url":"2019/10/10/UniRx-Connect-the-Dispose-of-the-Subscribe-to-the-GameObject/index.html"},{"revision":"282a964d7d30b6afac11b8768397b7bd","url":"2019/10/10/UniRx-How-to-convert-Update-to-Observable/index.html"},{"revision":"8c333a726717781c725a75f4185638a0","url":"2019/10/12/UniRx-How-to-format-multiple-return-value/index.html"},{"revision":"3132e2225bbb4cc416414fce5fe78e62","url":"2019/10/12/UniRx-Repeat/index.html"},{"revision":"4b3e38b2f634c4ff4cefdf217e7f16a5","url":"2019/10/12/UniRx-Script-Processing-Time/index.html"},{"revision":"5b5f1a270b7bf21b8b89ced6a8ef4997","url":"2019/10/12/UniRx-ThrottleFirst/index.html"},{"revision":"b32471c8696aa370c4ac1a2bcb77ab49","url":"2019/10/13/UniRx-Coroutine/index.html"},{"revision":"2552f9a7c696642f44c02ecd2c6a3c1f","url":"2019/10/13/UniRx-PhotonCloud-Login-Process-like-sync/index.html"},{"revision":"5a7a9ad5beb0dc2b61a94cd0540b1b34","url":"2019/10/13/UniRx-When-is-a-Hot-Conversion/index.html"},{"revision":"9f61888c9660cdbffff29bcaf17d6117","url":"2019/10/16/UniRx-PhotonCloud-PhotonRx/index.html"},{"revision":"22ac95c5e0fa63108557d290febfccbd","url":"2019/10/16/UniRx-Post-list/index.html"},{"revision":"8c79bbd537271107713b06e1d138ae86","url":"2019/10/20/UniRx-Stream-message-comparison/index.html"},{"revision":"b05cfe6715b25cca2a0cc52355fc693e","url":"2019/10/23/UniRx-FPS-Counter/index.html"},{"revision":"33468f015cf1c6f015af650f48578791","url":"2019/10/23/UniRx-Mouse-LongClick/index.html"},{"revision":"467e5f6d9a3ee57170b367835049c665","url":"2019/10/29/UniRx-NCMB/index.html"},{"revision":"9408c86b6f270541ecf4e23d6fa9ab30","url":"2019/10/31/UniRx-Operator/index.html"},{"revision":"78ea3af2bb7db8cda7e3c2011dbd1d74","url":"2019/11/03/UniRx-Getting-Started-1/index.html"},{"revision":"774f9f1bb8698e3f4b37465ce99d39e1","url":"2019/11/06/UniRx-Getting-Started-2/index.html"},{"revision":"e771bddd430791a22411532f75e75d61","url":"2019/11/10/UniRx-Getting-Started-3/index.html"},{"revision":"a5666e67f0d7a937cf4b9c73143d518b","url":"2019/11/17/UniRx-Getting-Started-List/index.html"},{"revision":"71e9d9228aa853975c713c7c6ed3d878","url":"2020/02/23/Getting-Started-4/index.html"},{"revision":"031bc57f0299c4bfb25a036b016d59ce","url":"2020/02/23/Unity-Asset-And-Tech/index.html"},{"revision":"1ef3d774ef8910b63c5098e1f0c66d24","url":"2020/02/26/Getting-Started-5/index.html"},{"revision":"a990980bf467883bc0fbca31b6fca7c5","url":"2020/06/07/Engineer-Information-Processing-Review/index.html"},{"revision":"0f26ba89df4b1bfeb130b1f50235487c","url":"2020/08/28/Engineer-Information-Processing-Review/index.html"},{"revision":"8311f9f99810c3a15f99ba1d36f10d5f","url":"2020/10/09/Head-First-Go/index.html"},{"revision":"72b8ae4a15b0072d55830b8768f607a1","url":"2020/11/09/Thinking-about-MVRP/index.html"},{"revision":"26e67376ab466dc81bd5b394d2b78481","url":"2020/11/19/Growing-together/index.html"},{"revision":"6db10c901c18b4dc9641d43407ee3440","url":"404.html"},{"revision":"c6fd62a2d08d6a1ff950c99ba1c25665","url":"archive/index.html"},{"revision":"2c5d58a689e18502c0b65403a591d4b3","url":"assets/css/styles.448cd76c.css"},{"revision":"d88bf6f993f004f6091231835ff11c5b","url":"assets/js/003fd7da.e9ec808f.js"},{"revision":"9ebc8e60d35ed7a7b7d70749e1f7ddd1","url":"assets/js/007b4be4.ee07b8e3.js"},{"revision":"6e8c9f9878c8b2378354d75e77b9e990","url":"assets/js/00df3415.02fd8bc9.js"},{"revision":"b55079363c97fe3cbc8d22c3e54c961a","url":"assets/js/012a92f8.17e922f1.js"},{"revision":"4c9a0e27154efa391d10a9b77b8b5247","url":"assets/js/01327cd3.507505c1.js"},{"revision":"033e6d6d6793870de2b236606bb9a86b","url":"assets/js/01a85c17.ced53e7f.js"},{"revision":"793c1984967e744426123c0ebd400dc8","url":"assets/js/01ba2258.bc1aa59c.js"},{"revision":"54f8fb040f7842110c7744fc606ae91a","url":"assets/js/021b80be.73566078.js"},{"revision":"f9533b4b73e923d88f96c834da48f1ef","url":"assets/js/02435ca7.7cae4b74.js"},{"revision":"45871a1bc887fdeeb6afa67a33d78545","url":"assets/js/0300964c.1a13a8f3.js"},{"revision":"f6ee6ea55ee28af27d3e7f163ccda80a","url":"assets/js/0347ab60.ef413b56.js"},{"revision":"a09177c48c7e8437a925be41e8ebbb26","url":"assets/js/0379a973.9f72d5b8.js"},{"revision":"9728c02acb91424ce002a5e19ddd5561","url":"assets/js/03ed7cac.8ae611ce.js"},{"revision":"3ccb84196d464cb13888386d03d9ca92","url":"assets/js/047ce419.eb4e1bb2.js"},{"revision":"ef7f76d09e33d0f80db7cb47466e0f8f","url":"assets/js/04fd4ccd.7c1a2274.js"},{"revision":"2b6a6b75372a161d8ba054d18cf0a595","url":"assets/js/07447820.3bb42c5a.js"},{"revision":"bd0f06da253a372982fc665de87259ea","url":"assets/js/07d6d7d6.5fee95d2.js"},{"revision":"5a1e037c458c28cee41b7ae5a664b4d8","url":"assets/js/09fbb6bd.57a8ea1f.js"},{"revision":"db233a5acf8d8e47a456aebc477f6950","url":"assets/js/0a3b4b9d.f50ae620.js"},{"revision":"d988a7de666dbb0c70df13dfaaeed0df","url":"assets/js/0c071de2.76276751.js"},{"revision":"056c8438e6be0f3f32ef897244854738","url":"assets/js/0c417604.694021fa.js"},{"revision":"162a05312c42089689b2fc801c018f68","url":"assets/js/0d0afec7.d2b6f47d.js"},{"revision":"e69d1f24fdd05726749393bcfe5bff86","url":"assets/js/0dde4795.48125bce.js"},{"revision":"bbad477baaef829a36a45edaaa346da7","url":"assets/js/0df9afa5.ee382191.js"},{"revision":"3e8893007ee919fa951d1345dc6d6921","url":"assets/js/0e1d796f.e65f393b.js"},{"revision":"e479cb69fbf68b6c179fb65c661a4525","url":"assets/js/0e384e19.458aed0d.js"},{"revision":"3e469ec78469b39a9ce09f178a89f2d3","url":"assets/js/0e7f5f4d.783258c7.js"},{"revision":"8c056b31a6297b29e121c710b546b61b","url":"assets/js/0f75232d.6f03ed41.js"},{"revision":"1e4ce90e4e1d1212a93c60fdd9986835","url":"assets/js/104a4552.43f476ef.js"},{"revision":"43fe49d1422488c622f65087735eb1b6","url":"assets/js/111fd135.e818dba4.js"},{"revision":"68e51b3be89f6319933c022d44007b8e","url":"assets/js/114df6f6.3d9eb7c7.js"},{"revision":"255cfb2346405c9976c8c71ee0a52f99","url":"assets/js/11623b06.06a78a62.js"},{"revision":"6fb2c34e5f8e93a45d3b8592ebb91eed","url":"assets/js/118ad1f5.7f67501b.js"},{"revision":"646cc324f8ce17284a2bd253f38c5106","url":"assets/js/11fc2475.c52f05e1.js"},{"revision":"89445d0dc272a6a85be5f8f7ca8197c9","url":"assets/js/125c580e.419520eb.js"},{"revision":"29a82b463621b0674a86348408884b04","url":"assets/js/12b84eb0.edc931ec.js"},{"revision":"979dffc838b343130dd145ad844a9613","url":"assets/js/12bdc6a4.a9b172c1.js"},{"revision":"238d31d51a66c2f99cb237d4aaa6f176","url":"assets/js/1318ca6c.5749f00b.js"},{"revision":"8956f9b1bb49c99fc92a08d8940fda3b","url":"assets/js/13dcd13a.c857bab1.js"},{"revision":"0b8337131413f8c070426eca9bcbf135","url":"assets/js/14164549.bfcef3e7.js"},{"revision":"9885353b3026c4b195841b7250f7696f","url":"assets/js/14706f32.b3e769c0.js"},{"revision":"de77f72b8b45692ec473be8ed2d74b56","url":"assets/js/14b4c051.5cbba315.js"},{"revision":"ca0ef3cca38813ebe0aa73916abe8b04","url":"assets/js/14eb3368.21872804.js"},{"revision":"19b8b967d74af81d0730b79ebec3d35a","url":"assets/js/1639e938.171a4b30.js"},{"revision":"23b421709b7c9deced343bbd1c86f287","url":"assets/js/1727a1da.353ed371.js"},{"revision":"cc44c3be6d46deafc8e716929f6f9f34","url":"assets/js/17896441.fa6056a8.js"},{"revision":"a1424dd17ab97d380c217c94a9bfc780","url":"assets/js/1811349c.9ab8054b.js"},{"revision":"55cc28c5db641de34496b39cbc5f550c","url":"assets/js/1837a611.b23eacb7.js"},{"revision":"5402b481d146347d26754158c6492f2c","url":"assets/js/186a19e7.58633fc2.js"},{"revision":"621302abbb8c7c656f5774bf4eeb73cd","url":"assets/js/18c41134.fb654450.js"},{"revision":"495dda1be4f31e73434a71a6e646bec9","url":"assets/js/18e68f56.7c7163e0.js"},{"revision":"9c82ce0944a7fdde5963bf20b5ad6dab","url":"assets/js/198edbc8.ce6288f3.js"},{"revision":"83e01b56ae066d1be6f4b571bfcc2cd6","url":"assets/js/1a4e3797.b68fc763.js"},{"revision":"4e82ecaa0361860bba1af3d719b3d4d1","url":"assets/js/1a54fbc5.bdf86ec6.js"},{"revision":"d84eb790c8fbc28f4eb45b7f34fd9512","url":"assets/js/1a945067.eb6aa961.js"},{"revision":"94f0c0be8e873f65dcf204a2319be067","url":"assets/js/1b25bfb8.03411691.js"},{"revision":"dddf1a801c8e9165dcc8b99b7675c678","url":"assets/js/1be78505.6931905c.js"},{"revision":"daa9040de17ef7bc94c402585c3f9fa5","url":"assets/js/1c228b74.068b750b.js"},{"revision":"c015a5efffc625a2971a93efbfebb1d7","url":"assets/js/1ca2f7c9.2d41ef80.js"},{"revision":"55af69bff4209982a9a63b7b6d04d8f5","url":"assets/js/1cb2ce73.6993c311.js"},{"revision":"8ed020d8a8b689a4588156bae7ce63bb","url":"assets/js/1d92acef.3cd6b2de.js"},{"revision":"34d4ca427f021a093072b65b1c60aa70","url":"assets/js/1e099849.ba5aa71b.js"},{"revision":"3441b0820780a51331cefce07d6410a2","url":"assets/js/1e4232ab.10e39287.js"},{"revision":"7a3d667950e7b916aafcfedd5277cb2e","url":"assets/js/1ec94b43.b3dc1c85.js"},{"revision":"b4619ca77f60ad47003c371475ce7310","url":"assets/js/1ecf6ee2.74533857.js"},{"revision":"38d9d9958dbb3db50b8f5876a22b9069","url":"assets/js/1f391b9e.7bdca9ba.js"},{"revision":"67f715c8e45c197b959f372ae8f03870","url":"assets/js/1f981928.77615c54.js"},{"revision":"fbd4be0b7754bcaa1aea25655ff064d7","url":"assets/js/2018e3ee.2ada9d04.js"},{"revision":"80b71e45df749149b9e21ac4cb6ca29d","url":"assets/js/20606539.aa0a1d10.js"},{"revision":"08963b8c780f90ba73d324d29bef4b2f","url":"assets/js/209b4453.26c1dbd5.js"},{"revision":"6a92c837edb5235af275995d73f06d54","url":"assets/js/20c9ff96.c8eec420.js"},{"revision":"029161eec395279a7dbc1f61e62e7e61","url":"assets/js/210.45527038.js"},{"revision":"ea2652df0b8ccca027f912bd23d816b2","url":"assets/js/2135cd64.ed4d3cd2.js"},{"revision":"b769e72f0c1ad010e66cb603fde0fef8","url":"assets/js/214572c9.bde0031c.js"},{"revision":"ae030f5960cd1c76be9fea9b1b3d3398","url":"assets/js/2165378f.9bac9403.js"},{"revision":"fad1bddb29a25878f0e99fe684591aae","url":"assets/js/21683635.19c8a5af.js"},{"revision":"f43ea073256ce1f60fae2ff8b296ed0e","url":"assets/js/21e74ed1.02d7a30d.js"},{"revision":"44e581672d4ff320c3ab77e608fe21e9","url":"assets/js/2226c3b6.a3616c4b.js"},{"revision":"bc4a4d22d6cc8e4d1d965c6dca6e65e4","url":"assets/js/22d4ce47.98735d2c.js"},{"revision":"98e205d609848c2994295b673abff070","url":"assets/js/22fe5cac.85f89bf7.js"},{"revision":"2289c8fcac56b7b776dd9dc517ea088b","url":"assets/js/230.55fec8bb.js"},{"revision":"e9612f5106cb9852e44745b4bef317b3","url":"assets/js/230ed48a.668b901e.js"},{"revision":"3203e95297f98ee75ed99cf4d02952ed","url":"assets/js/2386cb64.c8ea2698.js"},{"revision":"ba1dcb231996d8626a1dcc34d8011fae","url":"assets/js/2529.c7043f03.js"},{"revision":"6044633874b596d511955d61b1a1099a","url":"assets/js/25f68fdc.afc9a77b.js"},{"revision":"d6d2bf4a4ca24e14dab853bd2fc09f9a","url":"assets/js/261cb424.89b59f22.js"},{"revision":"5f0aacaa8b6c2926a6b2b148dbb51c21","url":"assets/js/264f8051.a3e86f03.js"},{"revision":"705a6818e8614cda1603993c4b674c69","url":"assets/js/26f4811d.52a736a7.js"},{"revision":"ea5e07c86e46bdafe5b1cf6ed9ff0ea4","url":"assets/js/27290cc5.04c2fbd7.js"},{"revision":"3e4f04f258c2eb131ac4dba145d522b8","url":"assets/js/2781ab23.6d3a0e36.js"},{"revision":"7b7b3c77b26cecf8a668b8a4e0cd264f","url":"assets/js/2832e534.193dc11f.js"},{"revision":"ac260de6dcd0380dd33984d0db268deb","url":"assets/js/29573a5d.66f3d826.js"},{"revision":"7d392711ab1f9a68de3ddc9968a76588","url":"assets/js/29a2df8a.0d773ac4.js"},{"revision":"242b7c1c8b96014805640e8bcb7b873c","url":"assets/js/2b411bac.97985bc4.js"},{"revision":"58d742c185aa97c6de1ecbf6f3f580d0","url":"assets/js/2b4d8178.9a977d06.js"},{"revision":"b5c16f45a36619e7e098105da00cf037","url":"assets/js/2b56ba0f.bc33c5f7.js"},{"revision":"7567a58c75babf42c886de30df921948","url":"assets/js/2bfe7c0b.131ba4f6.js"},{"revision":"028911a90eefcc31beff44aebefc3567","url":"assets/js/2d2885f1.6bf6cba9.js"},{"revision":"a0ec8b8ec21e3b691d8626d2fd00cc68","url":"assets/js/2d3b202f.58e79421.js"},{"revision":"4bfae9db2a66c8dfd6351008a1e10021","url":"assets/js/2d95ff9f.7df75ce7.js"},{"revision":"8be0359071d3e94a799e0b42c5c8af98","url":"assets/js/2e0adc5a.5b579ffd.js"},{"revision":"0d567b938ee30d5333337a5b01a7b516","url":"assets/js/2e801cce.e3736b3f.js"},{"revision":"b4867ea1b95657be1fdefebc6317d917","url":"assets/js/2eb42685.2b8f9e17.js"},{"revision":"c10040a6e9be11cc8fa7b7c3086e84a7","url":"assets/js/2ed7a306.ec4c2dc2.js"},{"revision":"0fb9acbf0587bd440687e05f2affa99b","url":"assets/js/2fa0778d.b8dde095.js"},{"revision":"30b5328d28519f56c5ed5090067d13d3","url":"assets/js/2fb06206.d5351bfc.js"},{"revision":"04e0c53cf2e659683ef81d90868fba4a","url":"assets/js/31a9fc7f.dd8b6f72.js"},{"revision":"e6561536551fe1311321a28df028d907","url":"assets/js/33175996.54079ec1.js"},{"revision":"819f7533594ad1494b3829628bb05451","url":"assets/js/34061f8a.1c8c0e17.js"},{"revision":"a81d679e2feaaf957e68986e5737747f","url":"assets/js/3488cec5.9c7e269f.js"},{"revision":"59edbb02e23a10bc07036a7893d09042","url":"assets/js/351b913a.a17fb4fa.js"},{"revision":"33351dbb05087f0d29febfa8ec473b38","url":"assets/js/35e1b62c.1a71f255.js"},{"revision":"57d9023c9c1af0bfea2460dae6aec8cf","url":"assets/js/36f4aa29.626803d0.js"},{"revision":"05670fc12d5d2c71183bc84e80c3361a","url":"assets/js/38255622.77399311.js"},{"revision":"bd0986ebc839f8d01f38b9fd476f1dad","url":"assets/js/38d8699e.660e5756.js"},{"revision":"bfb270acaf510c8a955dd657e20639f8","url":"assets/js/392f98db.84950088.js"},{"revision":"160c2d6abb0b84cbc5cd880f206ea429","url":"assets/js/393be207.16488c4d.js"},{"revision":"b12e69051a41fcfb463e180b1fff177e","url":"assets/js/3967d2f5.e672a20f.js"},{"revision":"c629ae9ced1b4b560b9e3b941ccd8b0c","url":"assets/js/399dac58.779f48de.js"},{"revision":"e24766213d07f55966697f8ffa7999df","url":"assets/js/39e5f323.8af3ddff.js"},{"revision":"0034f659e221477d79c94a3398b944fb","url":"assets/js/3b09c085.4db3ef5d.js"},{"revision":"d2d3c01dbe34be5ab86c220a4d21c161","url":"assets/js/3b2d2a04.7cb3c8d5.js"},{"revision":"8c062810d71c59ff6dd93de12afd00a3","url":"assets/js/3ca30115.48ac6fe4.js"},{"revision":"523af14bf0dd79fed9c788f5cdcdc90c","url":"assets/js/3ea48527.93b40e84.js"},{"revision":"cc9be94734696e4a56b6f53f8fe90a79","url":"assets/js/3f6c1de0.10842f02.js"},{"revision":"a94a0bad86e7fbfb8c5031323cf69a68","url":"assets/js/40efe448.4dccd4d6.js"},{"revision":"48c9f32ec475bd5e9eae39f305dced5d","url":"assets/js/4151d1d6.b0acb9c2.js"},{"revision":"efe51243f52614a52e14f7f25fab21e1","url":"assets/js/41ce545f.caa0ac86.js"},{"revision":"321f8d082b3113642cacab81dd00b305","url":"assets/js/42366f27.d6b7e554.js"},{"revision":"11cc044f475dede2857cdab39f95b9ce","url":"assets/js/42f17378.9d30ce5f.js"},{"revision":"5e9460558fff6ea12eef5f6d514e88dc","url":"assets/js/437cca2a.fd2b647e.js"},{"revision":"c06a21956fe25e3117fed4f5cb43bdbb","url":"assets/js/43f1bb4c.eb8954ee.js"},{"revision":"6d617f56ed7c7cbf0b48600abd2de92b","url":"assets/js/44f88895.c39b1d6f.js"},{"revision":"27afed72b58efa7703dc7de625014f03","url":"assets/js/458813f9.c0e4faaf.js"},{"revision":"97078c837096a797d3272d2ad70b9f04","url":"assets/js/45cd8c5e.b019ba1a.js"},{"revision":"f6fee5ab301ebb7c820b1f729509a254","url":"assets/js/4614096c.45509688.js"},{"revision":"72a5bf0db305ee38d457ef2d1bc2a966","url":"assets/js/476de44f.f068e648.js"},{"revision":"b47a6ae2480d555dbc4482eb66a99c77","url":"assets/js/47b2880a.1ec83bd1.js"},{"revision":"794f3f1c368c4c16f579bd71c8901dbb","url":"assets/js/47e7eae4.3c509638.js"},{"revision":"88f88462a6cdf21fdec77462696989e2","url":"assets/js/48b705e8.7ed97bba.js"},{"revision":"71520fc1079f35fe9c6bd7805ad406af","url":"assets/js/49311dfc.0992ab05.js"},{"revision":"44a9e318f6ec8d13ea3a0a1525a1a393","url":"assets/js/49478e38.bb2afacc.js"},{"revision":"ea74b0eb00700b68f4ef0e291e362843","url":"assets/js/4959fc42.1afb9b33.js"},{"revision":"898f2859ea50cfd20f843f7ff583a8a5","url":"assets/js/4972.e6c708fc.js"},{"revision":"4b3e073b27fd8151a173f03cd9837d9a","url":"assets/js/4988514f.e12c6d14.js"},{"revision":"065f5ab4df02a4f0aaee3d44eff92613","url":"assets/js/49bed4b3.2f91daa6.js"},{"revision":"08d528039444706668dbc6d1ef844d79","url":"assets/js/4a2e92ff.e80e22aa.js"},{"revision":"afd41ba2453567bf2e85ef5ff9b0ba3b","url":"assets/js/4aef8726.2249947e.js"},{"revision":"819c4dfb6acd2d6d6c5cf36f6589b8c5","url":"assets/js/4b316086.f3166ec8.js"},{"revision":"4565ca1592206529c1412ac80ac9def9","url":"assets/js/4b366f5d.ce201494.js"},{"revision":"ae69e91ebd1f97ad347fd1d25b44844f","url":"assets/js/4b8ea30f.90ebe5c4.js"},{"revision":"93a171a5971c795faef514ac0aa11e88","url":"assets/js/4c3aa685.dddca090.js"},{"revision":"9ea52bb2b1e7fbccb709cb511d3a9621","url":"assets/js/4cdf603a.b321b858.js"},{"revision":"5934cfcdabd5d4bc5b4871379b940e6c","url":"assets/js/4d3a3424.e9d802e1.js"},{"revision":"17e776f57e14829f0ab0ca9f95d4b8f6","url":"assets/js/4d9e330d.0fc1153c.js"},{"revision":"ee690d010985943647ca1cc93f0bd708","url":"assets/js/4f4c736a.abeb2ac1.js"},{"revision":"3341cb560a0b9f536c3d74d98c9c6df5","url":"assets/js/503f8ea5.d7508498.js"},{"revision":"57971f46352dfbd8ea364309b9fe96d5","url":"assets/js/50f41fe6.60c42bf8.js"},{"revision":"a13c4fc0b683d86950b91b80998e99ed","url":"assets/js/5131.69665024.js"},{"revision":"9729dc783ce47ec9adf52355a837dbba","url":"assets/js/51804f03.984e06d9.js"},{"revision":"22ce2f611cfcc2438b20f706d189f510","url":"assets/js/51b07e8f.fd30ba16.js"},{"revision":"764fb467cdcfdbcd1bf2a65f7f01f851","url":"assets/js/5223d479.b14a64de.js"},{"revision":"7a1405d1dac383055ec98f4a3355ab5e","url":"assets/js/5283.74b004aa.js"},{"revision":"3ae8fc861534a63cd1c6ba5739fe3a62","url":"assets/js/533a09ca.29d82be9.js"},{"revision":"922964da69c6a73f19a24781a243161b","url":"assets/js/53783972.73a08fff.js"},{"revision":"7dabeeeeb23f64df9b85165f32f470c9","url":"assets/js/55199265.41130386.js"},{"revision":"34480a4edd5743a904027775cc731def","url":"assets/js/555d8187.ae331822.js"},{"revision":"85ce6bb4f393c3e7d4a608fcfc1cdedd","url":"assets/js/585bf960.14ef4c97.js"},{"revision":"d806f38eca2a930af289864ac0604d3e","url":"assets/js/58813558.5873e4f3.js"},{"revision":"96ab31038cf60d5ff7c9b7465ea0ad17","url":"assets/js/5978b672.7adacf0c.js"},{"revision":"07fc318d3c941a2016fe540e67241b15","url":"assets/js/59d0f847.b6c6e16b.js"},{"revision":"ec5dffefd37f7ce1f151826bc2f81544","url":"assets/js/5a111c7d.1ae3d239.js"},{"revision":"71cc06a3e59b7156d68b2cfd5dcd838b","url":"assets/js/5a6ca235.b218ea1c.js"},{"revision":"20e7b9980fbf11cef4296fe8c6d31563","url":"assets/js/5b345901.adac0df8.js"},{"revision":"34c667093de0f02647897f1435a9bd5f","url":"assets/js/5b8ecf3a.55b4e33e.js"},{"revision":"892c1ba619834570484de5fcd4d30acd","url":"assets/js/5bcf5255.6fc514bc.js"},{"revision":"ba00646b87408303b28f71719d83bb69","url":"assets/js/5c24c9d5.c724b8b9.js"},{"revision":"224ee7415962dd7714d60401a15e7d60","url":"assets/js/5c868d36.3c98f23d.js"},{"revision":"91e00dc651b29886097af620a15d4982","url":"assets/js/5d800df3.06e56f0e.js"},{"revision":"8bbe0c48f2b3cfcc1b8ac6317cfea24e","url":"assets/js/5de98c97.f48ae334.js"},{"revision":"ba44a5ccfd59bfd3af56ab1c1d07c79c","url":"assets/js/5e07344b.919a0a94.js"},{"revision":"8d3d949fc9018f9f9439c15118e80e6d","url":"assets/js/5e2c3d60.463b1ef6.js"},{"revision":"50c11eaed9b2a50bb199a59270f482c0","url":"assets/js/5e30b365.94acf814.js"},{"revision":"be8312621bf0cfa0217572ceb527a93b","url":"assets/js/5eaf51a1.3475c41d.js"},{"revision":"505556ad98167d0e9683d3c62e1ae6f9","url":"assets/js/602092e6.11bf59a3.js"},{"revision":"9f7ac964063e38636b9c06979cd488d0","url":"assets/js/606a69da.5fad9430.js"},{"revision":"9e7e20591b518d29f77c2f5c2840a2b6","url":"assets/js/60876225.53ef45d8.js"},{"revision":"2529e6bc932ea225cd0515949f4f2c05","url":"assets/js/6093f82b.74c20bfe.js"},{"revision":"beb7e1c1644894377ec991401ff51b86","url":"assets/js/60c77f3b.f3bc8b34.js"},{"revision":"45e521abdf6b2c4af2d68721d291da10","url":"assets/js/60e8a0b2.9dc78389.js"},{"revision":"544367227e5392d92d714d34d6bb8968","url":"assets/js/60f2ac41.74fe9674.js"},{"revision":"13dd03ecd878970248bf6e5a6ad3a117","url":"assets/js/618af535.e9464d2f.js"},{"revision":"f85bfd65d931c6f3b77f2bab0184b7b5","url":"assets/js/635f8bba.b5d29f13.js"},{"revision":"3071c3bc91e3648f1aadba7a1e9e14d5","url":"assets/js/64b87fec.4bb081c8.js"},{"revision":"0d3b9bee54c7751a52ebfe39dc5d09a8","url":"assets/js/64d29b0c.0cbade9a.js"},{"revision":"226ee5b6ed4a6494e310ef80ad2409ff","url":"assets/js/650814e1.efd4f1a8.js"},{"revision":"a4a32db191a4b8de092e9ee9a8869e89","url":"assets/js/661c219d.6873ad11.js"},{"revision":"4b9aca53327b8db2ddf4122605584a50","url":"assets/js/66e286e3.f0bdf794.js"},{"revision":"b34ca68d556b35edc1996680de77b9ef","url":"assets/js/67338b32.7ae542b8.js"},{"revision":"e76fffb117c2c9e8f118f677f2f2f6cf","url":"assets/js/675b095f.9a66c498.js"},{"revision":"14b1b81dc14eb9beebce489233f28533","url":"assets/js/6780.15a94358.js"},{"revision":"d95d3baeda15a79e9c75ff0515801dc9","url":"assets/js/67a35477.d0ae9563.js"},{"revision":"0180d658b9e50a2726dd1bfa459d54c1","url":"assets/js/67eb00fb.63276d2b.js"},{"revision":"bc0b703c7394c15b51cbdda53c1af6d8","url":"assets/js/6802967e.9b4cb604.js"},{"revision":"8ea775508db0a93e8c87d971b935389b","url":"assets/js/681c1b32.0d117617.js"},{"revision":"c33d1d57cb31ac7d098b34bd415c3b5d","url":"assets/js/681e7856.fafe9ed9.js"},{"revision":"8bc88fab8078bbdbea5336a87d3c561a","url":"assets/js/6875c492.69ae83c0.js"},{"revision":"5345c8fa1ee58023123d3f86ee47a831","url":"assets/js/68ab14b3.e604d8f5.js"},{"revision":"84004c007148b6f5ded69136f2cf11d2","url":"assets/js/69374604.6ee06f79.js"},{"revision":"7c22eeba27f457ef304f6d707d9c0aef","url":"assets/js/6945.52e6a492.js"},{"revision":"a261a18eed2928ce8d8b9521cde60b11","url":"assets/js/699debfe.7574697a.js"},{"revision":"20246aa0a436eedcf28b48e2fdd6faf5","url":"assets/js/6a3dbcfc.dcc2978e.js"},{"revision":"693aab136d67e43f3323b04c8f9138b9","url":"assets/js/6b92132e.250f0648.js"},{"revision":"5a9c6f7cada17890402960f1f1c003c5","url":"assets/js/6bc83406.e621a89f.js"},{"revision":"c76b390630436bfc8627badeb5698a0c","url":"assets/js/6cf343bd.54a06bb3.js"},{"revision":"8c59f452121e7fae2a32ed28a040009c","url":"assets/js/6dd90fad.5ec2eba9.js"},{"revision":"68c336c69be655b23bc5e1ef679cff9f","url":"assets/js/6ded0855.e0ea2372.js"},{"revision":"1019ac3f587704f6500e398a9241cc68","url":"assets/js/6e029f8f.6e781664.js"},{"revision":"a32759a350bb51fb02c6de7aa274b024","url":"assets/js/6ede8052.19b4482a.js"},{"revision":"3ca83b9c40a925c7988744d4e5305051","url":"assets/js/7003406c.3f2d3fcb.js"},{"revision":"c1b44286190602a74c1e64e490aeec84","url":"assets/js/700dcf3c.8ef420a7.js"},{"revision":"10cc2a08e32a1c5b65c7803e511f92e2","url":"assets/js/70ddfdc0.66d55d89.js"},{"revision":"09d095592781ed69877c19f65085fb26","url":"assets/js/71d3be45.7038c5c1.js"},{"revision":"f5c8701ac14d2a7a81ee3771222ac223","url":"assets/js/71e1d29d.ea64c2ac.js"},{"revision":"0d87f069937c3d89fe97da0f2b7c3e35","url":"assets/js/728c30e5.b317d918.js"},{"revision":"9f14ecca696de94dcbad73e99ad4c5fe","url":"assets/js/733102b1.5936a6a1.js"},{"revision":"223ee22370a001c352e925198b45eb88","url":"assets/js/736db5fa.0f440023.js"},{"revision":"be3ec980f64fc58d806dc9594f4978f7","url":"assets/js/737b8bc2.454c2d8a.js"},{"revision":"645d3e93dcfdfa9c268656ad775ca562","url":"assets/js/7444c1f5.0b7deda7.js"},{"revision":"25e87ced8878471588e5f6dd49840ce6","url":"assets/js/74dfbd93.880a3f8d.js"},{"revision":"6cfb5c94663808f058bfdc2fa8889bc7","url":"assets/js/757faa6a.143ffcdd.js"},{"revision":"9066aa87196feb86aba75270830e931e","url":"assets/js/7661071f.833d1b20.js"},{"revision":"a3843874a7cf08c597a6002aeb6ac998","url":"assets/js/767bca9b.53fc3822.js"},{"revision":"17b59730e86d8ef277ddc55b641c16ce","url":"assets/js/7738c649.ee4a5c78.js"},{"revision":"9f5146bd664e0ad4124086b1ddec0194","url":"assets/js/7762a24e.e57e377b.js"},{"revision":"bcb2330a8285b1350ebe77376750ce5a","url":"assets/js/779c8257.6f6618b7.js"},{"revision":"040560a5f67553eb603635db4fe0ce87","url":"assets/js/780cd876.a25a25ad.js"},{"revision":"832c4d645af514712b7097e42be32be6","url":"assets/js/7846058d.a7163122.js"},{"revision":"6cafa88f6c2c9a3a930a531aa6d6e10a","url":"assets/js/7af1d52f.4dd2d30c.js"},{"revision":"2331add9b2fbe9343c165d64b5460274","url":"assets/js/7b12d7b4.87e69f75.js"},{"revision":"7fcd3bd8b3641707a2b3b9b844c28b00","url":"assets/js/7ca9de9d.59472136.js"},{"revision":"fd0cc1ad946433e126c2d2439ff11466","url":"assets/js/7d5204a4.ebb1139b.js"},{"revision":"f407ba2d7b55babf129c8cb78340d94f","url":"assets/js/7dada2e2.222d4402.js"},{"revision":"7d7737a1c697a0f1fe1850f5466bfe42","url":"assets/js/7def8889.85ac93f3.js"},{"revision":"8e23ade3a9f5a23c070b76ccc034d737","url":"assets/js/7f47421d.d1c2aac8.js"},{"revision":"64a779295c27dbc5ad4e3aad63a81911","url":"assets/js/801239f6.0547692f.js"},{"revision":"20bcc6f5c43f54f2fd5d113d64e29455","url":"assets/js/8014d223.bbec9900.js"},{"revision":"4413c01a88a1c7b372975d79d073b4b4","url":"assets/js/806ba1fc.868fc700.js"},{"revision":"a2e4a3dd523f5ade1f6c13afdde4cda4","url":"assets/js/814f3328.985136b9.js"},{"revision":"133b2dc16de361b6e1ecbdd543c73be8","url":"assets/js/815a9703.8a60284d.js"},{"revision":"eae6bcdf75c16e3f62e18d8115048bde","url":"assets/js/818e1d6f.d7dc2f44.js"},{"revision":"1c3971fdcd5053c7bc93ba41b418d806","url":"assets/js/8196ee06.26a14970.js"},{"revision":"d729bbc8b75a731a59728cf341bed091","url":"assets/js/822bd8ab.60154bd6.js"},{"revision":"105f9f3b68bf2173669817afccc118da","url":"assets/js/82323d50.8d6d432e.js"},{"revision":"70c79c1dda38e619ac9ec8dd4f87be4c","url":"assets/js/82c86b42.62c1851e.js"},{"revision":"0c599f18ee81593aee01581c7e1a94fd","url":"assets/js/8313ea8c.fd8b713f.js"},{"revision":"d897b5d10c5352fae301660a59c1c473","url":"assets/js/8436f59e.425f5c33.js"},{"revision":"0f18a240ef24b6a81e37abc88803d9a2","url":"assets/js/84901eba.4a05c3bd.js"},{"revision":"09836a4ca6779cca4f4a74244bc17b2a","url":"assets/js/8575ab21.fc473862.js"},{"revision":"944823eb02f55a3f81a1f28b82fc9a37","url":"assets/js/858306d2.14e43938.js"},{"revision":"01ff96b29a1ae53be4be3965e45c80a8","url":"assets/js/85d8f6ad.7cd126fa.js"},{"revision":"bb17508f1ef9240d8d23975c79aa6a8c","url":"assets/js/863845bd.709ebc0e.js"},{"revision":"979510488ebddfacf53aa24fa8825669","url":"assets/js/8655ed6e.a5c821d2.js"},{"revision":"9870348a9ca68debf877d09c2bf0a901","url":"assets/js/8721d29b.3c496956.js"},{"revision":"bdea3326e1a2679b53b96a1c48b58a87","url":"assets/js/87394690.f2077830.js"},{"revision":"d693b647980982b43c693447664a8889","url":"assets/js/87650e2c.8d596d1a.js"},{"revision":"3ef9766ed4467effa91127959fc1a0b1","url":"assets/js/8894.f447a143.js"},{"revision":"f256c5afeb4f7ee5dbef65a5bdc155ee","url":"assets/js/8969a34c.073558c3.js"},{"revision":"0b31ce7539e168f63e08a9f75ea32826","url":"assets/js/89ae8a86.9cbeb84e.js"},{"revision":"fe126451007108d6b08437b05f7c9597","url":"assets/js/8a810778.aee114ed.js"},{"revision":"df1db750e92fc2ee0a0aaffe58be6c1b","url":"assets/js/8c080c81.4bddfccd.js"},{"revision":"abbb13eb2bc1d8bb6cdab12ff0042aee","url":"assets/js/8d05b77c.b7e1504e.js"},{"revision":"9738e54927147f13b491098c36d87711","url":"assets/js/8dcaccd2.b06eb460.js"},{"revision":"00617f8994d14982a171140d4e4814af","url":"assets/js/8f7eb5fd.74833afa.js"},{"revision":"29baec6e5d27449a461f346855f6647e","url":"assets/js/8fcba009.d9bc5d86.js"},{"revision":"45766fed6e0f23ee743522f6c500e73c","url":"assets/js/90ef4408.98260201.js"},{"revision":"2d92790e617d0a435d6f8a5583598111","url":"assets/js/91b6223d.937971c4.js"},{"revision":"3318c59bc3b5021323872189d499045e","url":"assets/js/933b1e06.b8eedd60.js"},{"revision":"906b8afc4955038c23cb903ad2b5b694","url":"assets/js/935f2afb.11816e9d.js"},{"revision":"ffbe7ab420aadbf3841be8ab5f8f02e3","url":"assets/js/93609995.c2f6de2c.js"},{"revision":"4c992f3e85c9c438b23de59b29a8b69f","url":"assets/js/93974885.3fe8defd.js"},{"revision":"cdcd4c1e94ccdf7f8a2a708dbcc24357","url":"assets/js/93d7f463.5b0e0a39.js"},{"revision":"1a13f7d6b3d453ce55d0e091cfbec78b","url":"assets/js/941984f0.5b7f027f.js"},{"revision":"613fbcc14f07347c9d53f4622523ca52","url":"assets/js/950255c1.1032de7d.js"},{"revision":"7b14236c6615554350cc2c310cb1c7b5","url":"assets/js/9521a72d.c8c37c63.js"},{"revision":"07f03dffbe68bee3f1ac42e93d1903c8","url":"assets/js/9545212f.cdf1597c.js"},{"revision":"ee8ab4f37ff6a7b33f88cbc3f14fa385","url":"assets/js/958fba35.368fca08.js"},{"revision":"10410f7a3dddd37110d8319ad08c7e64","url":"assets/js/95da0807.68e080d7.js"},{"revision":"73dd819c25844196ffd07ba76d007960","url":"assets/js/96f4f500.706142bc.js"},{"revision":"058e481c10e8f58d5513890540dae428","url":"assets/js/974a16ba.555e9a62.js"},{"revision":"55408bdcb3f119341f8a969625196e0d","url":"assets/js/9918b6d4.b9706b90.js"},{"revision":"55db98e20554588ec52e25201912fcc5","url":"assets/js/99918a3d.a0f8b7ed.js"},{"revision":"f584187c1cacb05ef235d65735ea898f","url":"assets/js/9a420ed7.3b821a1d.js"},{"revision":"60aa992f14e7512451725c0a47b7e2ec","url":"assets/js/9b0b945b.6135b048.js"},{"revision":"98d1e99643b99022caafd5a8906022b9","url":"assets/js/9b64139b.40cecb5e.js"},{"revision":"7aa7a678c895613b0df51d121899f847","url":"assets/js/9b7b749e.2557b683.js"},{"revision":"56a4d073ce429ac15c5e6f1e80912c09","url":"assets/js/9bf97810.7d631865.js"},{"revision":"51149dc167b4c5528aa097ba8b5fab4a","url":"assets/js/9c8378d4.5872ed92.js"},{"revision":"1a1df242a1cc0726674c2057c33e4f5d","url":"assets/js/9cfe8fd1.e9397cbe.js"},{"revision":"73b5dadd0b63d23ce5b3bc7c85772cfb","url":"assets/js/9d0f4251.5d569210.js"},{"revision":"2de37e1fa76452138015d89f9e21fe03","url":"assets/js/9d2163bd.cd396c6d.js"},{"revision":"6d178fb5cfdcdf5e628be5e9b0cc156c","url":"assets/js/9d2d4451.1c5538e4.js"},{"revision":"a13f175ecbabddd0beeb4a0f7f61f926","url":"assets/js/9d5b8351.9f8de8bb.js"},{"revision":"f119bc056e2e0cf70b5b692bf84c300b","url":"assets/js/9dbaa154.9a8a5f06.js"},{"revision":"9f047cac6dd8dbbd83a2fd757666bef1","url":"assets/js/9e4087bc.d4d39f9d.js"},{"revision":"164efa2441e4b28bb02c67516e9b0b94","url":"assets/js/9ec04f23.61898234.js"},{"revision":"a89d39bf3004d9437fd627f6c2c476fc","url":"assets/js/9f6622dd.d839d820.js"},{"revision":"650ec33dfa50388551179018d68512f0","url":"assets/js/9fc71e81.0dfcefb3.js"},{"revision":"b4181af179f71c32696ea1b747b2bd4c","url":"assets/js/a054296b.2ffdbf17.js"},{"revision":"d39e69fe894e1a872c9edb5e35a7a1c5","url":"assets/js/a0a539a4.ead03419.js"},{"revision":"67006afb34fa2c983cef83f8ef807fff","url":"assets/js/a10f04de.37abe300.js"},{"revision":"ff6e4f684e03cc31f1b93a0d232aed1a","url":"assets/js/a127eecc.286af440.js"},{"revision":"a16b17f730a53e5e026bd3d69c80eb79","url":"assets/js/a1997df9.9be15dd5.js"},{"revision":"6f13c5fd3ae51eaac5c3672d1dd15fe4","url":"assets/js/a1a730f2.739b65ab.js"},{"revision":"7dc62a5a4c7cef7b68eb1011c57aedd5","url":"assets/js/a219075b.85064378.js"},{"revision":"55c6ab13db59cee4c0ae948391ca2fbb","url":"assets/js/a3524a46.a9e560a2.js"},{"revision":"344a24d6829f08d21bd510588ea69d2a","url":"assets/js/a490ecc4.d0a8ea66.js"},{"revision":"4f6fde01eb9944ead79e0d9b3432e328","url":"assets/js/a4b94f1d.29953bd9.js"},{"revision":"7c3ec7c083647e8f3915841f263b1ea5","url":"assets/js/a4c75f1b.58894f59.js"},{"revision":"95a63dcf6a9e2ca29f8d06fdbd490417","url":"assets/js/a5557bb9.b9fbf33d.js"},{"revision":"2d6dd0aaab79de714f95ec33500458cd","url":"assets/js/a591f971.d079993e.js"},{"revision":"376c7d598f7b836b27f32cc793750af1","url":"assets/js/a5f59b90.708e1119.js"},{"revision":"c01bde1f5092806993ec100c85a8ccc0","url":"assets/js/a6aa9e1f.e22e44b3.js"},{"revision":"3d73a4cd80f59d4c4985092ff10d7a95","url":"assets/js/a6d7e197.5d4817a2.js"},{"revision":"aa72ae58f74e921efd68b483003d3a17","url":"assets/js/a70c5303.641a32c7.js"},{"revision":"2a88d7f9cedd81eaddf8bfa6cfccc5f7","url":"assets/js/a7a040ac.93b9195b.js"},{"revision":"6b827536019a3f3b17e0b7a6783dec2b","url":"assets/js/a89f5b27.caf2f6d6.js"},{"revision":"56aada8cc63622cfd08335b912404be0","url":"assets/js/a8a49694.0429dba7.js"},{"revision":"c1bc384f7a4e7ec616431db23a0967e2","url":"assets/js/a8ced771.a9bd41cd.js"},{"revision":"9e94d2fed16527646efb49dbae6ae6fc","url":"assets/js/aa0ee138.320d2b93.js"},{"revision":"c2c069039a8b7db1740d4ec05fe035bc","url":"assets/js/ab57c688.d1152ffd.js"},{"revision":"422be7533f2c1c4ca2826d083b571343","url":"assets/js/abc07640.c014734a.js"},{"revision":"02fb8855014e863725c81ee2c14c7e2d","url":"assets/js/ac5fd5a1.7b6fae3d.js"},{"revision":"00217cddd2572c4ec2b1c58561b54192","url":"assets/js/acd25518.199959cc.js"},{"revision":"87d7804561761f467d8f6df6d5576e4b","url":"assets/js/ae19e312.eb0309c6.js"},{"revision":"cab6bf99847232a73b3842d7878a98c5","url":"assets/js/aea5358d.1bc7e666.js"},{"revision":"cf966e9ad2c4c3a51a002bc75f4c0d9f","url":"assets/js/aeb65c7d.2a574b4b.js"},{"revision":"660054610a7933c65f6661602a0eb6b4","url":"assets/js/aef39962.b3b26af9.js"},{"revision":"b1e3439d8f69c90d1fff4dfbd031e3b9","url":"assets/js/af9a5834.da7a9f89.js"},{"revision":"14c1524520175fc0fa20d0eeed046dfd","url":"assets/js/b0186b23.34073696.js"},{"revision":"7546584e479ef6f015021c1b2d54ac1b","url":"assets/js/b054d119.6d2d9190.js"},{"revision":"5be123a4015d67aedcb935c133d9c016","url":"assets/js/b0a086f9.685e765c.js"},{"revision":"e33e1894dc417886e8ea623689fae328","url":"assets/js/b0bacb1b.69df751f.js"},{"revision":"47e5ae30bbc7153e876994122938c09b","url":"assets/js/b1d0c93c.f961210b.js"},{"revision":"a626026f9fb9de78a5a3dcfc6881b64a","url":"assets/js/b2198e0f.5f39d42f.js"},{"revision":"1fba634c537e6a7b043684bd11f239c2","url":"assets/js/b2872853.a2a0cb93.js"},{"revision":"caf0ebfc97fa2941386897b390df1fa3","url":"assets/js/b2b75fd4.f420d579.js"},{"revision":"80c693bde667ecfcdb9d3a6d39f83608","url":"assets/js/b32566cf.5a15a80d.js"},{"revision":"37d9e72f24d774c240f440c89c412f2c","url":"assets/js/b3306504.68f48ead.js"},{"revision":"d13744550de121e9d4297bfaffa8149e","url":"assets/js/b47f641a.737f6233.js"},{"revision":"ece31cacca0f2aedbad4a634f96aad09","url":"assets/js/b4d2e3c1.e92de2f3.js"},{"revision":"db9005bc044408dc091ff4e87712ea63","url":"assets/js/b508327d.67b883ec.js"},{"revision":"7517ab9de3424b7087b183177447b572","url":"assets/js/b6117911.dba9fbda.js"},{"revision":"57eb3d6d1c61f0f8c6164c6f7f79e373","url":"assets/js/b64f958e.a6471bef.js"},{"revision":"d7602bec3b4c8dfd68887c8027c5dfbf","url":"assets/js/b6e1d29d.f314183b.js"},{"revision":"efdd50e347c9ae2ac77610809c9775c1","url":"assets/js/b6f0b6cf.aa3468fb.js"},{"revision":"2504dc3ba32b197d36975d6620580b96","url":"assets/js/b784e033.5ac29cc1.js"},{"revision":"41f8ef18a94adc7105d5fd9c9cfb79a6","url":"assets/js/b7938c2e.f0ac794a.js"},{"revision":"3e13ed57c0388c6c588811cdb3163bf4","url":"assets/js/b848e59d.95b36aec.js"},{"revision":"214d76965c908e03bde3f25112a7585a","url":"assets/js/b91cda6a.ebf030b8.js"},{"revision":"ba2ed07d8aaac3f4260b605bc642682a","url":"assets/js/b94fad69.4bdb0312.js"},{"revision":"4ca26bd0515753fc05499fe15e18f99a","url":"assets/js/ba18a555.09ab8d18.js"},{"revision":"da8c85a101198bd94a311cfe7406f0a1","url":"assets/js/ba3fb3b6.20062759.js"},{"revision":"7bda89a38dc5e79f640edacfe8c0ce53","url":"assets/js/bb2c53fd.b6abccd8.js"},{"revision":"4004174346b6524a8f61de2b35feec8f","url":"assets/js/bba1b871.729934c9.js"},{"revision":"ff39f26a849cbc34091337bdb8c44e76","url":"assets/js/bcc3f5c4.ee4bf8f4.js"},{"revision":"ba332045c09db23f56de2d4ad9351dd4","url":"assets/js/bd18894d.571bf66f.js"},{"revision":"a5d1685b4827f46588a9b137204034c0","url":"assets/js/bd2de46e.d71ebbd2.js"},{"revision":"6a85faad6a5f133ba7f809fc5356452b","url":"assets/js/bdaaf414.ff67a54e.js"},{"revision":"35db515b6afbd4ebc6763f85290873bd","url":"assets/js/becf781c.f443667c.js"},{"revision":"46f25715425e989289c12f0f85b3a7e9","url":"assets/js/bfa055de.93808c2c.js"},{"revision":"3b53001020b115a30629ad876dbf23aa","url":"assets/js/c0cb7215.1c96d22b.js"},{"revision":"5596a19a925603348de1d9689c69b62d","url":"assets/js/c107d936.b6bfba5b.js"},{"revision":"719030db65cbc0501289cb1257c043ca","url":"assets/js/c1fc5cfb.f6923bd2.js"},{"revision":"1a0f8c9ab5bbe792b34e0d2d5be9a286","url":"assets/js/c21722ed.385a9dea.js"},{"revision":"edfa9de5a58881c1588afbb6713350b9","url":"assets/js/c253adea.24b617fb.js"},{"revision":"e0027c84d0438c7e3708b98c7b0f7e0b","url":"assets/js/c26439f4.9e70fc2f.js"},{"revision":"0ea101f13d9501a06cf0f38c8e8ff27c","url":"assets/js/c2672e72.e95e5c7d.js"},{"revision":"dc6bb8b1537c2253f279b6d457e23214","url":"assets/js/c267402c.cf3403f6.js"},{"revision":"e7b81a3c46f0fef1c6370254716da272","url":"assets/js/c267ed4f.fd5c9c0c.js"},{"revision":"e4ef68aca91297967410127c4b9ddd92","url":"assets/js/c289abdb.1875043f.js"},{"revision":"c4c2cfe8761f946bf00c538ca445469d","url":"assets/js/c33ba46f.8a437b6e.js"},{"revision":"78a0dbb387eae1de483d6110f60f38db","url":"assets/js/c4ccdc53.02502af8.js"},{"revision":"493977d204222173b4583047e0a0a52a","url":"assets/js/c51a23bf.b1a2d1dd.js"},{"revision":"7bfa2ea7dc142e7e17fd3e11ca3815ab","url":"assets/js/c573638f.d37b2101.js"},{"revision":"188ce804aee816b58ae20cb494210087","url":"assets/js/c59eb898.a47008a3.js"},{"revision":"d06dc0c45a9ba99ae13635a96b622687","url":"assets/js/c61bf98f.f250e3cf.js"},{"revision":"a9ff1c71d1cbfd70d10192d1a168717d","url":"assets/js/c705cefd.9f053a62.js"},{"revision":"bfe9df90a9b215c2c9919f3f86a1523d","url":"assets/js/c844b82d.6f02c0b9.js"},{"revision":"22ec0643872f072eeca2968355f53156","url":"assets/js/c8666c88.425121ba.js"},{"revision":"a2b96b3570d69f949a86cbfa7b35b412","url":"assets/js/c8701bbb.83f06a21.js"},{"revision":"26e11b24df853b644a2eb0d77246180a","url":"assets/js/c9039d83.5d2c0bf8.js"},{"revision":"7988cd2d97aca98aa5a80162c6a8888e","url":"assets/js/c965fa13.a3723c02.js"},{"revision":"8351c761b94921050dc9b3dc77da5ac8","url":"assets/js/c97dabd2.fba7ddd2.js"},{"revision":"151e922fa740656c64cab51808518612","url":"assets/js/c9dc0512.00e3c5f2.js"},{"revision":"a1454979b003b718cec43e216c4a9fbf","url":"assets/js/c9fb4040.d80c55d1.js"},{"revision":"82a4bc6a33126964a89a3f665c8fa413","url":"assets/js/caf4c30e.ee4802ae.js"},{"revision":"60d58d60a7fc87e060cc6c7eac929aee","url":"assets/js/cb824631.04a59f6c.js"},{"revision":"cc289a6de4b94fe5767c8bd571d4ddcf","url":"assets/js/cba9e7e8.c64101c6.js"},{"revision":"74dbce60ff2379aa471f1372ed639db0","url":"assets/js/cbfd05a5.fea04852.js"},{"revision":"089448f4b130c1305759303d56fd31f5","url":"assets/js/cc1b1592.b091f137.js"},{"revision":"6aef1251d39b262c610f30c3a2096b65","url":"assets/js/cc3ec96f.bde97487.js"},{"revision":"6f72dc24736e1310d4bcca51977074e4","url":"assets/js/cc54e380.5ae49f54.js"},{"revision":"6c7d9e5f1516a350775a62e1ee5e264e","url":"assets/js/cc8dc1aa.e01db55c.js"},{"revision":"159b4f5d5585162900487a0bc19bb7a6","url":"assets/js/ccc49370.543a7c74.js"},{"revision":"e9652be160dc57a25403e1b5ea1fd908","url":"assets/js/cced7259.3678b016.js"},{"revision":"b52a874717bd722c612a5ad6604b9f39","url":"assets/js/cd89821c.1ed67913.js"},{"revision":"6d4aa4dedf02cd12ae6dcce2b9e8340b","url":"assets/js/cd8a745e.03782727.js"},{"revision":"a36c037cafdf78918a0cc38a1fbfed4c","url":"assets/js/cde688e7.b1605044.js"},{"revision":"b1a171e15adce184d4bc7898ad49cf06","url":"assets/js/cf28a4f1.1d92ff88.js"},{"revision":"1d3e6e63d0e30a830444032bf25a0e53","url":"assets/js/cfe7eb16.9211b023.js"},{"revision":"084cb45b55731153e1c2bbdbbdb1f4be","url":"assets/js/d012dbbe.d509d9a9.js"},{"revision":"4994d7153c2630e10b5efafcc1533309","url":"assets/js/d0ce2770.91aafdfc.js"},{"revision":"477304b9fbbdd2d4946460786db5c241","url":"assets/js/d0e4cdf1.57257b46.js"},{"revision":"cb110c4261726a7e13b541e384c8b248","url":"assets/js/d1cac185.81b833a8.js"},{"revision":"723cc76ab43fab23a3c1c1cf52aa972b","url":"assets/js/d1cef389.da26e5bf.js"},{"revision":"604226a6463cafb0154472183f82984f","url":"assets/js/d311b2ff.b769099b.js"},{"revision":"0bf86a79ed14969ef1c0cc6eaca46bf3","url":"assets/js/d33f6365.62696254.js"},{"revision":"550507bf040e1c5ca5422bf17406a114","url":"assets/js/d38b13f6.9f9a83bb.js"},{"revision":"ec8019204b73dd8b61215ed52084c04e","url":"assets/js/d3a7a137.b88064f7.js"},{"revision":"0a378b977b628bc3ed7d5af26797cabd","url":"assets/js/d3f5a4af.9ccf7407.js"},{"revision":"a2dc7aaafd9e9aea830ba3998102bdec","url":"assets/js/d4bb82ac.1672e5e3.js"},{"revision":"1e26455555557f43a103a5b25733c15e","url":"assets/js/d516cc57.53a54014.js"},{"revision":"17d9648f2309d9cc2964451f1f977cf2","url":"assets/js/d57c64d8.66f26190.js"},{"revision":"46a9c4b28aa669d896aeeacf78ea3ddc","url":"assets/js/d7b35565.2ba227f6.js"},{"revision":"bb46791bfb4c30a6d7f71ad23ab0337c","url":"assets/js/d7f49184.a8f096e0.js"},{"revision":"2f55040c777ad3f162e77118ff833f35","url":"assets/js/d83f552a.3530ae20.js"},{"revision":"fd51c572f89934ad11e619492162ec10","url":"assets/js/d8ed52bf.0ae434db.js"},{"revision":"5dfa35850b1237361dc85aef07efe147","url":"assets/js/d950c737.6190a0d8.js"},{"revision":"08fb092facd60dc0a2d0dd9583be1ad6","url":"assets/js/d95a4fff.d2ed61b3.js"},{"revision":"937f67d519dbfce25903f7f6e42e18a1","url":"assets/js/d9f32620.54d07bae.js"},{"revision":"34741ed7db1db16398082f60a3d8dd13","url":"assets/js/da025200.0ea9ea8e.js"},{"revision":"a6aa6ca27f453b3a532dc073c733155b","url":"assets/js/dac30986.7d02b71c.js"},{"revision":"68fc76bc0588ee0877c9b89dd9e5de8c","url":"assets/js/dccc328a.370706b0.js"},{"revision":"84ba08da181a0efa2a991f2ba35dff8d","url":"assets/js/dd2dd3e4.200e5eba.js"},{"revision":"b894087fd7bd9cd35adb75562f002fda","url":"assets/js/de33a452.6258b716.js"},{"revision":"d3785a8cc15e6b42efd983ac96d9963b","url":"assets/js/de34dd2d.aab4b5d4.js"},{"revision":"194fe3d02baa44e50d981eaf6923346f","url":"assets/js/defbe44d.b83f04a3.js"},{"revision":"04ac3a95362eeeef35f1634107fc3ffd","url":"assets/js/df7253d5.746a4a7e.js"},{"revision":"14ac7fff2daf5dfef0aad94afe14ba10","url":"assets/js/df862072.33c5df4f.js"},{"revision":"fd701099c8d72cd0ebd8f48246742775","url":"assets/js/dfb8919d.a01f44d5.js"},{"revision":"eaf727668c49824f1f26486b02ed1aac","url":"assets/js/dfc7bbb7.cbeee143.js"},{"revision":"3f8aa9e191ae7dc584b691f7064df974","url":"assets/js/dfec85ea.7d9d62d3.js"},{"revision":"26f6894293ebc219488ba2b035f01435","url":"assets/js/dff1c289.8ff8f82c.js"},{"revision":"2c71f0412f79dca11d657b2fae3317a2","url":"assets/js/e0aa5711.f088327c.js"},{"revision":"14d50604412b38bc03d73c72b280f161","url":"assets/js/e0ce3994.a630d90a.js"},{"revision":"7db4f89381d50faf2ae27feaf42c526e","url":"assets/js/e0f06aa3.990e5967.js"},{"revision":"94e28b40b4f382d5a775e2c26de9deff","url":"assets/js/e0f1e0cc.06390344.js"},{"revision":"48182d91444d9b43e20fa54811a35202","url":"assets/js/e131f08a.ba29e312.js"},{"revision":"f703decb3ee7212182fad1b6756c98a7","url":"assets/js/e1d88fa0.b042e329.js"},{"revision":"e270daec38985063449b0760f45cc738","url":"assets/js/e29269dd.7910d902.js"},{"revision":"317bb1479056ca4dfa56d32b7bb854d2","url":"assets/js/e386114c.0bc07972.js"},{"revision":"3d2866452c53efdbdc73394ba991be9a","url":"assets/js/e44a2883.dd87cf3e.js"},{"revision":"4c838303692c4521648c3b73dc0d9263","url":"assets/js/e48c72e1.30cbe72c.js"},{"revision":"f7b55ee7fd5632a55ca71b8f399e456e","url":"assets/js/e4ebfe18.7cd287b1.js"},{"revision":"bcfa1879a30455f282783cd80975d533","url":"assets/js/e520cd79.65e74a53.js"},{"revision":"db93753192f45c1d72e81f88cfe38bf6","url":"assets/js/e6c20ee6.536d0b43.js"},{"revision":"7eed3a892ea38e19d7369978f73b19c7","url":"assets/js/e7d6847c.8c9db1d7.js"},{"revision":"6f70b86956bc319427602f116f2372cf","url":"assets/js/e84c9e2d.c3698269.js"},{"revision":"11aaf56c6c5e7854a09cc79d2e73c856","url":"assets/js/e8a66195.f2f7bb62.js"},{"revision":"dff4e33eef7153d89f76f9c76d2ac152","url":"assets/js/e916e5b7.3c3072c0.js"},{"revision":"ba89d4b57b6251b88b86a98cab230dd4","url":"assets/js/e99b3a86.80d84d87.js"},{"revision":"283738d0c67e5d950249638deaeb6752","url":"assets/js/e9bf1fd8.0f19169c.js"},{"revision":"d1fecbb0f6acd0f1137e490c223a1621","url":"assets/js/ea88f2a1.c0d3c817.js"},{"revision":"db7dce206c8d68d5a41a68dc9bf44963","url":"assets/js/eac55d34.12375c01.js"},{"revision":"d0884e1270434dc9d0eba9276d867564","url":"assets/js/ec1e4c5a.75052c12.js"},{"revision":"c6fd4345657e4d08ea664b15a7b0f22e","url":"assets/js/ed8efe80.b6409f40.js"},{"revision":"1180940212d598aba188cece4af526d3","url":"assets/js/ef624022.e1d460c3.js"},{"revision":"a9e0f6b122d3482ac5d990f4929c8663","url":"assets/js/f023f078.5ba88358.js"},{"revision":"05a13820dd26a1ae1ad8943e55670f30","url":"assets/js/f05540fb.8d5b961d.js"},{"revision":"aa433e86c80e6cb820c3bcf837fc2ea1","url":"assets/js/f149f106.1c593d4d.js"},{"revision":"b4766b06b1ce1959ed8b5702c14bab77","url":"assets/js/f22d2000.134a2e55.js"},{"revision":"d775196b8657ded4ba70c96e6bbd4dfd","url":"assets/js/f2a564fb.a32ff88f.js"},{"revision":"1b93a92b60873594a42f7933584095b3","url":"assets/js/f332d221.8c8cabf1.js"},{"revision":"b07368fe05e5550a21cd83e207c61b33","url":"assets/js/f4f49e13.d7a7bb25.js"},{"revision":"36f1e631ee5b2e8b57c2ffd483c347c8","url":"assets/js/f55d3e7a.1ad71795.js"},{"revision":"6b48575327909a58b9619f3a0877c7e9","url":"assets/js/f579c1d5.d32b0a0d.js"},{"revision":"deb7cfa10687a40490e81537445c7beb","url":"assets/js/f605dd48.1170a8fc.js"},{"revision":"be227ac309585cc73766b253fe6ba372","url":"assets/js/f65173bf.185a667a.js"},{"revision":"768bd5df24a814b828055ae30dd13a37","url":"assets/js/f75a8651.50532d22.js"},{"revision":"d0822a179d233be24f95db75bb7c7c1a","url":"assets/js/f76ff925.33166a31.js"},{"revision":"7f4f1bf1ae3ac8eda18e35f954ff4323","url":"assets/js/f80b9cf5.1ce271d0.js"},{"revision":"9942c4efb21798c6b28a5ad6babba586","url":"assets/js/f8c59a2a.f64bf226.js"},{"revision":"f53d476c7211b5f6c1976bb3c8daa5c0","url":"assets/js/fa3fa086.940fd686.js"},{"revision":"a2104ad864adcb175db2bef5462f6f01","url":"assets/js/fbd57548.8c527309.js"},{"revision":"6afee0c7029abe9c22a4c2f7415fbc7b","url":"assets/js/fc51b0ee.ea0c3849.js"},{"revision":"5660350ce46b49d437484500c3ba488e","url":"assets/js/fce7d4ac.f5f1f8a6.js"},{"revision":"1400066354e45c9b10984ff8dc1faaa2","url":"assets/js/fdc1b7f2.8dcfa538.js"},{"revision":"ee190c152d16732454ed962d29146934","url":"assets/js/fe439e61.0108f238.js"},{"revision":"96b44aca0ffb0c880326e3e4e1cdbb74","url":"assets/js/fe623907.af11d818.js"},{"revision":"388fb2fe63a1c3f342c43bd407686095","url":"assets/js/fe9c1c6e.18f4046d.js"},{"revision":"43e39fad53c0a7deb7f595499cac2f59","url":"assets/js/ffb0fa11.11e106d4.js"},{"revision":"4a266ecc74a3b4e4182159e2fb3ddda8","url":"assets/js/ffcaa617.877dbbe9.js"},{"revision":"30c477a4e0c797cd6419478091fc0ae6","url":"assets/js/main.40ec2b6e.js"},{"revision":"bfed36cd46f4be755e87c04ed8118aff","url":"assets/js/runtime~main.a8c01639.js"},{"revision":"4eb43616ead5c8dfaa6587eda1605f2e","url":"docs/category/tutorial---basics/index.html"},{"revision":"36bebbb487b7146f567fdb86fafa758c","url":"docs/category/tutorial---extras/index.html"},{"revision":"ecad878e98c57ab8e488c55ab91f7ced","url":"docs/intro/index.html"},{"revision":"d8b8b8bee3e06b7bf6caf584f7278196","url":"docs/tutorial-basics/congratulations/index.html"},{"revision":"97d68d321cead4c2b2aac569d705207d","url":"docs/tutorial-basics/create-a-blog-post/index.html"},{"revision":"2c631a5d0f8ca691ee2f6956208e4e2c","url":"docs/tutorial-basics/create-a-document/index.html"},{"revision":"bded75e8c178da5cc4ac031219a62a0f","url":"docs/tutorial-basics/create-a-page/index.html"},{"revision":"43ceb6e729a0aa7875ebe8b5300ae4a9","url":"docs/tutorial-basics/deploy-your-site/index.html"},{"revision":"50ddab38708534a5342d01737e1ada36","url":"docs/tutorial-basics/markdown-features/index.html"},{"revision":"943db146857f35458264e1794a653354","url":"docs/tutorial-extras/manage-docs-versions/index.html"},{"revision":"9ca95efb286e88fe3b0518e642b09b1f","url":"docs/tutorial-extras/translate-your-site/index.html"},{"revision":"ed945cdb35278954b8bc903937bb3b51","url":"index.html"},{"revision":"3b50d02b57069474c70696fe7fc7f191","url":"manifest.json"},{"revision":"ff0466912154c7517a90c37e0e18ba5a","url":"markdown-page/index.html"},{"revision":"f3fb606b7b20ca1b26344f43fe7c6ccc","url":"page/10/index.html"},{"revision":"dd6f83dacc2a574312fc1e5e5417fcae","url":"page/11/index.html"},{"revision":"17b9b3238653c96e2df30c7a1e107d77","url":"page/12/index.html"},{"revision":"a6c78952e4ff849ce81c0433910b58e9","url":"page/13/index.html"},{"revision":"907977197b83426882ff5b6faee720dd","url":"page/14/index.html"},{"revision":"f68d4fe664a053017d802229064534f3","url":"page/15/index.html"},{"revision":"5012514114e7f4535caa7e1688aa60f9","url":"page/16/index.html"},{"revision":"2dc2c2986767c72926c766021524abb7","url":"page/17/index.html"},{"revision":"621621f9834782dcec6508fea79bd474","url":"page/18/index.html"},{"revision":"796b45cd5bec248d4c830523d7de916b","url":"page/2/index.html"},{"revision":"7c9be3a81e2bf2d381a2b0c016dfd171","url":"page/3/index.html"},{"revision":"7fe263c76079cd5daff017c21ae3d4b5","url":"page/4/index.html"},{"revision":"742530375c5300e6f4e811b890f2fb21","url":"page/5/index.html"},{"revision":"1e867c41416804eed722e8ccc3aff889","url":"page/6/index.html"},{"revision":"c2a6f49c185108efec44a92e94ead634","url":"page/7/index.html"},{"revision":"9ba51f196fafd1c666f1c4fec9c57be9","url":"page/8/index.html"},{"revision":"175051363930d48389359d254b3b9bb9","url":"page/9/index.html"},{"revision":"ecefc6f131a0a0a986996301e06d527a","url":"search/index.html"},{"revision":"d2fe3b4d80b6f5c5738c72cb39c543f0","url":"tags/algorithm/index.html"},{"revision":"5a4f3181e0046577fafccf285d9cc616","url":"tags/book/index.html"},{"revision":"b31fc5a049da8a391afd2f485ffa36b4","url":"tags/book/page/2/index.html"},{"revision":"13e12622161287e13653c9f7a77c13d5","url":"tags/book/page/3/index.html"},{"revision":"c9a9435cd3e56d18ece78348b4504d73","url":"tags/codewars/index.html"},{"revision":"0db41b5f86a08da7f9b2bf9d808d78aa","url":"tags/codewars/page/2/index.html"},{"revision":"781f008eb8e937abc427dbf25215139a","url":"tags/codewars/page/3/index.html"},{"revision":"4977e4d3a9029da8a61e6bc0be1c9748","url":"tags/codewars/page/4/index.html"},{"revision":"bf6b920e6631e9aabf17387d9862a108","url":"tags/codewars/page/5/index.html"},{"revision":"ebf00deb74340d672db23a83bba689f0","url":"tags/codewars/page/6/index.html"},{"revision":"10c162cfc2f06a171dc58ea738feea3a","url":"tags/codewars/page/7/index.html"},{"revision":"c3538838a31343257137a0a4bf28c09b","url":"tags/docusaurus/index.html"},{"revision":"6b562167a3d3fc3d0864ab7aa38c55f9","url":"tags/english/index.html"},{"revision":"7a283edbb14c9c49ad4b50bbe5746501","url":"tags/facebook/index.html"},{"revision":"0a84f890d7e3c9a2af47fc47afacf882","url":"tags/hackerrank/index.html"},{"revision":"d82362b4a41677d60643e5334bf3cbc3","url":"tags/hackerrank/page/2/index.html"},{"revision":"3e10f52f85aba36657481e5fe0545c35","url":"tags/hello/index.html"},{"revision":"464b38edcffddb4d606886f0c602c96e","url":"tags/index.html"},{"revision":"4717613b76303dfacc36d851ae05afe3","url":"tags/interview/index.html"},{"revision":"348d9a805b735b8e87816106a8c31939","url":"tags/jekyll/index.html"},{"revision":"088a0e9c3946228b4a443f0164245714","url":"tags/kata/index.html"},{"revision":"d905f94e4094c473bcc7b708f8e2da4d","url":"tags/kata/page/2/index.html"},{"revision":"47f13d76a6f3baebcb727409b1d3ee25","url":"tags/kata/page/3/index.html"},{"revision":"7bca3cf5661000a777f0cf162376f63f","url":"tags/kata/page/4/index.html"},{"revision":"5fe20033f25bcb06d3085a39398e7ba9","url":"tags/kata/page/5/index.html"},{"revision":"7564da26ef193d69d8ea98f0c40a71d1","url":"tags/kata/page/6/index.html"},{"revision":"2d4d9980f3da9e720ad48ecb33f125cd","url":"tags/kata/page/7/index.html"},{"revision":"8756523386cc393fe6f607db911857b4","url":"tags/knou/index.html"},{"revision":"67d4dca68c419c37d2379247f2f2f8db","url":"tags/list/index.html"},{"revision":"d18a15402e6aa64dbe8b6bee68ad492f","url":"tags/plan/index.html"},{"revision":"6a54491a86f1e221844aa7cfebb0d642","url":"tags/programming/index.html"},{"revision":"0509d6f9d621737772060e47c45f1236","url":"tags/raywenderlich/index.html"},{"revision":"3d5a4ad52bea2b1cf180ef33f883a104","url":"tags/review/index.html"},{"revision":"98f1fe52185529ae2f1189531abed71f","url":"tags/unirx/index.html"},{"revision":"5272a7c2145ade9a10b3548a1e5bb9db","url":"tags/unirx/page/2/index.html"},{"revision":"d20598e2301fe8174b65bdcc716eb29e","url":"tags/unirx/page/3/index.html"},{"revision":"75dfd3042f93f98c2a9ff0261e7c6229","url":"tags/unirx/page/4/index.html"},{"revision":"a3687558d425dee2abb3f18b360ea2c2","url":"tags/unity-3-d/index.html"},{"revision":"43026d37fba59c0e0ab9235f5fae3ec1","url":"tags/unity-3-d/page/2/index.html"},{"revision":"d150e06cc9b8a72e726feffa208ae43f","url":"tags/unity-3-d/page/3/index.html"},{"revision":"18669e2a04ead96df8f91a11dc74e171","url":"tags/unity-3-d/page/4/index.html"},{"revision":"46b848ce3491ec4d3184a0fd449299fe","url":"tags/unity-3-d/page/5/index.html"},{"revision":"73e31262ad87ddff537ff51b8cdd8635","url":"tags/unreal/index.html"},{"revision":"b155e117e373b24c18781e3a7e570f09","url":"welcome/index.html"},{"revision":"87a5a3269ed50faf1e1f9de206822dfd","url":"assets/images/04-skip_setup-445e0c79be9366706526529da00c1866.png"},{"revision":"ad52131aedfae92901662ae3bfb82846","url":"assets/images/05-repository_browser-9bebbc7a2828bd0cd78a93009fa4f796.png"},{"revision":"82799596b1ccbfcab601506c4d2cdbc8","url":"assets/images/06-new_repository_options-0bc8cae189a985dffe6e1753eec09048.png"},{"revision":"b6ad9ec57daab0e27abfdc47091f48b9","url":"assets/images/07-create_a_remote_repository-ad2fa6ac194cdd3e7bdc22b5a56a8151.png"},{"revision":"ee8474397d4f79790b28e81041a71520","url":"assets/images/09-clone_a_repository-fe28266a7adbf7584293e78beaa81c29.png"},{"revision":"c4f09dcbac1963f08d10ff4e12fdffc2","url":"assets/images/1-ad036eba2fcc261cf881599d8c2c8f3e.png"},{"revision":"b527ab7676fe5fdc53077fec05d51b2d","url":"assets/images/10-8d6f83b4049d106a6a13e2afef8b06d0.png"},{"revision":"85b67081643f74ff80c1a96401b6c46a","url":"assets/images/10-empty_repository-fd9dc418c1e4afd5ea3f4d954981bbdf.png"},{"revision":"547fa6e8cde5d08f5ee9c26ac2ef48b4","url":"assets/images/11-f313a8647e03c7bf96a93874a68204c8.png"},{"revision":"a2459d2cba324999ce8538df13d866ea","url":"assets/images/11-user_details-0ab6555f417269f4134cd19adba9548d.png"},{"revision":"7773a002ed10a619f64e5d39257d4cea","url":"assets/images/12-d75b0e97a96fc7c911cfe379011d2c3d.png"},{"revision":"8de03f925d95e930be30271cb9064483","url":"assets/images/12-populate_your_local_repository-dd643c9c7b52f47bcf753e1e5f66e98d.png"},{"revision":"ac46ce8719c7b5593ab744ef9b3dc52e","url":"assets/images/13-4b69284aefa3a334f3e57005e99918d6.png"},{"revision":"d0e7908487abfec87d669c3e8bd6a12a","url":"assets/images/13-first_repsoitory-78b7bf4b8a043856a1e9b64a1da2d69c.png"},{"revision":"4dc1b9e0ea8330ca26f39dafd866377b","url":"assets/images/14-d1058f9455921018a660450af264e9c2.png"},{"revision":"a3c8b34506fe9240c3ee4566b14d1cf7","url":"assets/images/14-first_commit-b13717608814600b073dfba9bdb8a9c2.png"},{"revision":"ed96e3c119431621d277438c1c489d2e","url":"assets/images/15-e3a16bb5a2d9b0cadd1ff126fd097476.png"},{"revision":"8671347e803922e28ac2308b6ff4d38f","url":"assets/images/15-first_commit_2-1ac8b78a790f41a5a24dc7f2c8f7d62b.png"},{"revision":"af8734f85f19a09ade82986181718852","url":"assets/images/16-2b5bc48222d141b085749150b5d17b15.jpg"},{"revision":"423c7393bf285a3343fe1a7a7484d9d9","url":"assets/images/16-nothing_to_commit_0-aa9179d331c34b550543d08042a34d3d.png"},{"revision":"e585eb20250dc78b95ae22293d3de2e9","url":"assets/images/17-66a09241b734788477a1fb7bbd5bff4b.jpg"},{"revision":"d020740a051f4faebf14b88189b15ff0","url":"assets/images/17-push-d3767f938fae9f031153f92c91539741.png"},{"revision":"a3b3e71389d93b9e11dc65219ebcfc63","url":"assets/images/18-561b622d161a715a015e0fa6468fc6ad.jpg"},{"revision":"e7c7752d9fefd379deeebe637c603584","url":"assets/images/18-repote_repository-b3065b9c1d6d6aabef6e4962b4bf8910.png"},{"revision":"88acd0828bb3e87c75bd2aa1e92a66db","url":"assets/images/181031-01-20262e33115402dc92503227bfe9ea23.jpg"},{"revision":"870cf98c426ce42fb2d6f85f37415013","url":"assets/images/181031-02-9cecbaf518f130e2f1632886aef632d0.jpg"},{"revision":"ab9b612003b95a29c17d064d398e071f","url":"assets/images/19-ec28d3d87b63fc7b10e2d3957d1f4d87.jpg"},{"revision":"2472cf505b0ea1548ecd5d836035c901","url":"assets/images/2-88f7b0a5f5824462fcf57d1e207efa4a.png"},{"revision":"28126770a7349dec2006d1c9ae9930a3","url":"assets/images/20-8e801db863f0988a30f40b8d68afbe0d.jpg"},{"revision":"7c00f45ccfcdce0a289071bd7ebe8224","url":"assets/images/2018-12-14-1-c727aeaf02dd3f6bb1157a9b4f899690.png"},{"revision":"0e70f232fbba5d3cb77ebf3b25973e0a","url":"assets/images/2018-12-14-2-71bc2c55458c778cd8c49b1ab9a96159.png"},{"revision":"3c02425a639ad480244b9a90c5babd5a","url":"assets/images/2018-12-14-3-8bb8472b056e9a34242434e0d1a4eca5.png"},{"revision":"35bd1cc1fad8d1e54e8489a9a9616805","url":"assets/images/2019-09-14-1-a3507c8a653f81fc2f053dd8f937f9b9.png"},{"revision":"ed2fc04fdff3eff94ccfa346361b92ea","url":"assets/images/2019-09-14-2-0f583881546d31f52090db7f1ffa6e29.png"},{"revision":"66db136dc43a207640143304a85696f6","url":"assets/images/2019-09-14-3-eb01d202032944890685681c95012167.png"},{"revision":"8dbb4db566130bb1a5a32cc10d268d61","url":"assets/images/2019-09-14-4-ac9341b7a8e027404c44a63142ecd73b.jpeg"},{"revision":"4ebd8e957dee641e2c340d01e58b4520","url":"assets/images/2019-09-14-5-368ccaae12ffa47558aedfc20938a015.jpeg"},{"revision":"cf2b187543b58b6ffa5118718b84dbe9","url":"assets/images/2019-09-15-1-b7b8f72791bbe39f2d32bb508325c8d4.jpeg"},{"revision":"fb5ef1eeccc970634ee3a0f6491e1480","url":"assets/images/2019-09-15-2-75b5fc21a451118a26b0e6ea6642c6d1.jpeg"},{"revision":"8a40e0951ecb7c07d308358436c93699","url":"assets/images/2019-09-29-1-1d3f878b57deeae2502f6032d199931e.jpeg"},{"revision":"6dc44b15b56beb0f55b545dda0cc571f","url":"assets/images/2019-09-29-2-d78fecc16ab6ee4e09ff983fb56d6d3c.jpeg"},{"revision":"414ea820ca816a9f167c394f8bfe1102","url":"assets/images/2019-09-29-3-b6ab08bdb13a5c867d3b54e2e2df0cee.jpeg"},{"revision":"2128d207db1728ce2f61a680725e60c7","url":"assets/images/2019-09-29-4-0277a1ebb8f454bd5db5a50db86b77bb.jpeg"},{"revision":"61ed7553b8c2c7ec5e91d92a62dd6855","url":"assets/images/2019-10-05-1-4908895c007addfa169054905f4a7524.png"},{"revision":"3b9cd29a89a23e6ed0580e34a8ab5438","url":"assets/images/2019-10-05-2-b25f7b162cb9e165d450b9d3f720867b.png"},{"revision":"d36136c827fdbca77c27470147fe0709","url":"assets/images/2019-10-05-3-f41ba0edf8d0481e229d2ccd2cbdfb0f.jpg"},{"revision":"7eb65f25008798565b38672c4aac1775","url":"assets/images/2019-10-10-1-134adc07be4be6c6d60e393d7cfd16c9.png"},{"revision":"9debab2614439eea912886dea1d6de1a","url":"assets/images/2019-10-10-2-601be85ca8cf8b377806345e3e730cf2.png"},{"revision":"4556cdb4fb693b19f5ee6d0a7e07ceb1","url":"assets/images/2019-10-12-1-0ca0e06de3ca01c89a9fb441fbf9dd5c.png"},{"revision":"f9ef817a92c1d962d80f3d21b31818d6","url":"assets/images/2019-10-13-1-b4863b8b835a5b81dbac82a208d0bf3c.jpeg"},{"revision":"9348f5d10acffbbb720a2ced2405ce69","url":"assets/images/2019-10-13-2-ae18f7740688c673d886631c9558f78a.jpeg"},{"revision":"682652696b650aab251c3a10431912cb","url":"assets/images/2019-10-13-3-195cfceeac0b9d84eda94578e5c3c7c6.jpeg"},{"revision":"daa1ce7200e05f5214b754658f909ac8","url":"assets/images/2019-10-29-1-2c186920e5640b233ccb42626351714f.jpeg"},{"revision":"13cb3a6a4a9d8b9da45b975257446e33","url":"assets/images/2019-11-03-1-70d0ac1ee503b9cddf5049c39c6f498b.png"},{"revision":"dceedc367a9e62fd94804a22642056d3","url":"assets/images/2019-11-03-2-99fcd0a2f27abc011124fb1697d637ad.png"},{"revision":"a6c62cd3d748bdf6a970d92ee51624d3","url":"assets/images/2019-11-03-3-72e295568b5dbc6cb09ea9850551f5fe.png"},{"revision":"51d96c406d7e729702be13ea5b336e14","url":"assets/images/2019-11-03-4-621e7b8b7d10b14dacb427452c8efe23.png"},{"revision":"dd61b8759044bbbc56b7b048c443ce25","url":"assets/images/2019-11-03-5-33c4ded4251372c9f76bc224ea66b58d.png"},{"revision":"8af075fcfdd48afbdb240278c6000881","url":"assets/images/2019-11-03-6-5a8aab8324ce8ae650f4f719d908dfbc.png"},{"revision":"a2e98e7521a261ee911577873c526f78","url":"assets/images/2019-11-03-7-665124814da3b24458e8d72a1d53432c.png"},{"revision":"13af0bb27516c05a6ce6a4b9da444321","url":"assets/images/2019-11-06-1-e104e3411f3ecfe5ea49975c176234ad.jpeg"},{"revision":"54a89a67f3200590f64b97c6e793bfe4","url":"assets/images/2019-11-06-2-024b2e8af0c0e7837e240691ceb5d6f8.gif"},{"revision":"01daaac296ec5702c9ea85154f88686a","url":"assets/images/2019-11-06-3-69fec485a675bef6f95b8a7ec6ed90c7.gif"},{"revision":"6bfce41b450fb8b82e3d082f32c4b9d9","url":"assets/images/2019-11-06-4-1610d1128ede196384009f9846d50553.jpeg"},{"revision":"8c9aa5ab52451648ed62522b0c107c9c","url":"assets/images/2019-11-06-5-2d112e75142725f078098d2c73cd4835.gif"},{"revision":"2798cf68c4f93699b128b4c817efac4e","url":"assets/images/2019-11-10-1-af72b6da61b714a0d063cf550fc025a7.png"},{"revision":"02f0ee9499690ae845720ee786a46b3a","url":"assets/images/2020-02-23-1-7d965b0e28fb6c5bc48b139a74350bfb.jpg"},{"revision":"ff18250b75a8450067a4cce6966e3965","url":"assets/images/2020-02-23-10-6abad4d690f5ecbb5e70cb87841ceaad.jpg"},{"revision":"9375395d2c4ff63fe280196a78329b35","url":"assets/images/2020-02-23-11-bb039e2a566ca7e6efb32f8ca1bef851.png"},{"revision":"47c1a2cdc2d7f1ce5f8026eda3f0aeb6","url":"assets/images/2020-02-23-12-7d80788eccfc71039a0fc7754cbd25a2.png"},{"revision":"b9b2085287a8b585e62eeed4a0d7821b","url":"assets/images/2020-02-23-13-e009fd2f2a1ad411a2bf5f76a4d45ded.png"},{"revision":"f54df8ade520fa1046cc5206fa6657a5","url":"assets/images/2020-02-23-14-3378e9f4fc462e5568fadf8ccbd33b53.png"},{"revision":"0d93daa87c718c21d0233d328c50324d","url":"assets/images/2020-02-23-15-ee28117fa5f1d637f6cc509789607a79.png"},{"revision":"c8eae68eabbbf3fe57510de616cceebd","url":"assets/images/2020-02-23-16-11aeececfe23fd8b67a0270b5e9a97fa.png"},{"revision":"da0e64901fd4694572d0730f0ff8db9b","url":"assets/images/2020-02-23-17-4421a70da48ef6b66247081bf2dc9d98.png"},{"revision":"222e81e436add51c9ded8ec6e5c07d1c","url":"assets/images/2020-02-23-2-8e0b141958ef0ea0d3ae01fe2a8b47df.png"},{"revision":"eb6b3e594f7faace24b49e78ec8bce99","url":"assets/images/2020-02-23-3-1b1126c7c6a39e698ca2c98b56ecb735.jpeg"},{"revision":"ef7ecc2d966f70cfffee8988f39aad1b","url":"assets/images/2020-02-23-4-e719009ab81bf5bf147e467b4e6d3e2e.jpeg"},{"revision":"cb1230da0397a58651fad1a9dc46b2fe","url":"assets/images/2020-02-23-5-d2b647f6b2bc17229a2d1f101e6ca910.png"},{"revision":"c33a095f4202d7b075a357142abf83f4","url":"assets/images/2020-02-23-6-9a2a94b26e5fca77e6a0d85a01a67c9e.png"},{"revision":"a04b0e60ece9dd12df2279ef03639b29","url":"assets/images/2020-02-23-7-b952143f5a3aa0ba25588b5da5e217e5.png"},{"revision":"35adcbe1d9555bd484e4b66a01e71997","url":"assets/images/2020-02-23-8-22d6876c785a41cecbf47a99c92080f5.jpg"},{"revision":"2e1ff3464fbcc9d3db28d465d7ad7576","url":"assets/images/2020-02-23-9-e85c9d1f5755716d90ba0fd20395eb7f.gif"},{"revision":"96832a38ab7c1f3748bd4412165b87ae","url":"assets/images/2020-02-26-1-b76680d648a3e3b5fb76e4e6506bf04c.png"},{"revision":"43dd801158cecf8792da93c15ba3d211","url":"assets/images/2020-02-26-2-13030d58b98592c2e9d4ebb719eedf03.gif"},{"revision":"bf65efd8b65715f66034717f77b89c0f","url":"assets/images/2020-02-26-3-b13c6097f79b946a9ea9e59685b71d53.gif"},{"revision":"9ac720e9a9505e86557e0f29c6d58b70","url":"assets/images/2020-02-26-4-1807f0259ac8267c9ea0b35298d771a9.gif"},{"revision":"cb1992c639d4ec03ff5675b6591e54da","url":"assets/images/2020-11-09-1-f281d5ea30c7f61a6a68004f3c07f114.png"},{"revision":"e3a49f695d127800eeb08930f3cdab49","url":"assets/images/2020-11-09-2-12d99d9091b09524a6756d65db3b0d05.png"},{"revision":"056c1b49b577c93fb0d8068a0ddfb80c","url":"assets/images/2020-11-09-3-5af4c7b8168876fe84bb3204cb4deacc.png"},{"revision":"2fd1c1ec2ba35a68e8906e945d8d792a","url":"assets/images/21-d5f02b3235f5120c995b78c01dfc9db1.jpg"},{"revision":"05f9557f71ebae5e0d716a23823c8f6f","url":"assets/images/22-650f06237241f0b32c15a37c9e47607c.jpg"},{"revision":"4e9a882c4c6999076c8af0cc952a26d5","url":"assets/images/23-79b7d20ed425541d3793c05251980cd2.jpg"},{"revision":"ef738113b17fe240ad5d59ad52e5bc4b","url":"assets/images/24-64e51d1d48b9ad5e352238332a4fa8f9.jpg"},{"revision":"202340dee6f903f5a7f106ef068d2a46","url":"assets/images/25-df4f1603ade7b346df67ce3b9461cfcd.jpg"},{"revision":"a15ae416d13dadc3e1ac2356b2e3bf5c","url":"assets/images/26-e84da675e6f5ed72dfc7d352d4df67f3.jpg"},{"revision":"5b4193eb21d4edf30415c58882a56c15","url":"assets/images/27-6ae5d7fbdeae0c06ce54315708bb1c29.jpg"},{"revision":"8736b79697bb81dab72b38761f6522c3","url":"assets/images/3-4bc2b014b134f2678a9da396c6f6789c.png"},{"revision":"b142a210ff51cf84c6ec879baafedfd0","url":"assets/images/3.01-cloud_build_home_page_0-9d189967f92807bff321753613de8bec.png"},{"revision":"862e8dd3e0e3e5485b854ab89766ac3a","url":"assets/images/3.02-create_new_project-ceda1198b79e401dff168a55ec0c9148.png"},{"revision":"7d736faae878a4c549bd2ba99e7d11f5","url":"assets/images/3.03-connect_to_repository-715ad80f5780a2317beae2671821f9ac.png"},{"revision":"40ab80c8aade44feae7c7acf79988d7f","url":"assets/images/3.04-copy_ssh_key-b-c4ffd23c1a877cd7ccec004c30783bd6.png"},{"revision":"ef6915bd158f38c5588bf0684b454c4a","url":"assets/images/3.05-add_ssh_key-b-a583a7500971e9db96a3400ed335a1e4.png"},{"revision":"824503e3a25f09ed3a816e76adbb110e","url":"assets/images/3.06-select_build_targetb_update_0-d93bcb586bab0a732bb0b2a04bc3869e.png"},{"revision":"a66cc7c97c8b4d44cb42cc010f2f111a","url":"assets/images/3.07-select_build_branch-053846c2778d8d96567f3ed9113b8230.png"},{"revision":"e1857096b7eb7adf98779cbe42e845f0","url":"assets/images/3.08-buildb-2b3bcbcc4002153d7eaf682bd2715f80.png"},{"revision":"c5a5843ff525e115cdfe4dc3c93c5f68","url":"assets/images/4-d4573e2dfd88bd5ec9f8670f49fe3faf.png"},{"revision":"53e940f389f7e1f5710f8be6a1ac555c","url":"assets/images/4.01-build_pipeline-856530fea1dc346f8f4b4ace92301040.png"},{"revision":"fdcdfd15007d3c160788041717141264","url":"assets/images/5-aac990731b26fa8a56c6ac430f95aa12.png"},{"revision":"e5d48b2f2dfb2737fa24268c3ffac808","url":"assets/images/6-ff698604d99b285fb7266637ee538dda.png"},{"revision":"d90956b400b4cbc0d78e0a4d94ebd9f7","url":"assets/images/7-301d14305049c7ceb7485c6177bee262.png"},{"revision":"59232e09a7aaeb8dd3e81745b6e613e3","url":"assets/images/8-dc2530aeb819f4d3052b42fb44d9afab.png"},{"revision":"87ecc210c6792045b126ef19b4d9a39d","url":"assets/images/9-be666cd2b0c351bd7bfbfd7383c9f206.png"},{"revision":"d14d814d1e38eed43c7991ef0090f1b2","url":"assets/images/addconfigs-6bd95246f9088acf8537ad98578384ad.gif"},{"revision":"d14d814d1e38eed43c7991ef0090f1b2","url":"assets/images/background-6bd95246f9088acf8537ad98578384ad.gif"},{"revision":"fd04ad515c9b8227eb10de510b81f6e0","url":"assets/images/blue-1005940_640-baa54e6ef38bbc29e820722878c3cc90.jpg"},{"revision":"bb86b82af528b587c02cd311e3a924e6","url":"assets/images/broken-54738e3d336ab3b3e5d8274cd6b34eb8.png"},{"revision":"5b3c59ca3ef83769d27ce961cfe62cf9","url":"assets/images/bullet-asset-69decb756d3bbc4a4e7c9304e53ea7fa.png"},{"revision":"53a35a84a51a3d4b3729d681561cf9a9","url":"assets/images/create_a_repository_on_bitbucket-5b8d59f09be405314880968cd037a79b.png"},{"revision":"21c6f7a49a81d44f4c467668c01d7016","url":"assets/images/create_your_repo-7f92b64fe6699ae6a1f3b0217bf3700d.png"},{"revision":"776a4acec7dc37cb16a9af4a167957be","url":"assets/images/create-scriptable-object-380x500-4f2f8715ce4ce7149e0d19dbf24caeed.png"},{"revision":"3203c137aa4c540a482df192c33b88e8","url":"assets/images/CustomizedEditorFinal-700x405-480x278-b7325ebc62c0bfef09ddab28ae0c3ef2.png"},{"revision":"5bcb11e17eddf618622b7ebb5f81765b","url":"assets/images/CustomizedEditorPreview2-2964111a57fe5a5eff02a431f9448b7a.png"},{"revision":"d92e393ea4c3dbcc5eeda8e71b736184","url":"assets/images/CustomPropertyDrawer_Class-45ebf33d86051e7062483be3180d7ebe.png"},{"revision":"2cfd2820f70c76883c0102f397972c3c","url":"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},{"revision":"192a6a160f31b1689a4c6233bdbbb803","url":"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"},{"revision":"0e276c87f1cfa2157a853d2bad5b5ca9","url":"assets/images/download_sourcetree_0-4a14b04d887e974c9ed8d3808b71d486.png"},{"revision":"272e76d6f66af020d316bc7ee971183d","url":"assets/images/drawerbeforeandafter-650x381-993d1356f0990589cfb167c4f5ce7b18.jpg"},{"revision":"75bc0086ab0e28e1fc28707fc54fcf5c","url":"assets/images/empty-level-editor-window-copy-486484c0171a0a77b35787571a2c4909.png"},{"revision":"adb5c6137aa2b9f3f85fb2296b2b61f7","url":"assets/images/Keep-calm-and-implement-GetPropertyHeight-ab63a6f778709d206268a63dda0cfeb5.png"},{"revision":"2b3c0dd62f6f96a5ea629114c5ddd711","url":"assets/images/landfill-879437_640-bb85645878c95c25b07268a1c3fc6345.jpg"},{"revision":"057dd72a9f913ecb6aeea352229bc73b","url":"assets/images/LevelEditorWindow-1-a3aab0f93caed626c78bb0688e94fe14.png"},{"revision":"057dd72a9f913ecb6aeea352229bc73b","url":"assets/images/LevelEditorWindow-a3aab0f93caed626c78bb0688e94fe14.png"},{"revision":"e87b53839259be1a7bc8d0283cc48c37","url":"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"},{"revision":"628d7a564194995afdf9076254b45876","url":"assets/images/Log-on-click-700x97-3182db4040991cdb824f2e9545ec3274.png"},{"revision":"9a1437a8ae8d4a2a4e40cece7f16c635","url":"assets/images/MoveEnemy-b7b9a7e06ce9b4cc652af28427210d75.png"},{"revision":"1717d783c6552e1b34ea0582631129e8","url":"assets/images/MoveEnemy-before-after-49a62c84f077c2a8ad8f279bd63cafc2.png"},{"revision":"661883522b06816416d6bdb34ebe7625","url":"assets/images/noguiimplementednew-480x297-371b7f2d9d790c721621248f8c881c8d.jpg"},{"revision":"607ecbed0dec2635ca02351b4ef3aad8","url":"assets/images/openspot-122411e652734e579c21114803b35993.gif"},{"revision":"a1ad89b56700b289a7db179c69da937e","url":"assets/images/RequireComponentWarning-d23b6e8abcfa59c81b813db6a244783f.png"},{"revision":"9761e50d3618ec3e9c70d1fc63a0b688","url":"assets/images/Road-1-d0ee8e34b1792a1b51ddf555f2d50b43.png"},{"revision":"cfcdaef0b364bbe8b0c168c95d212952","url":"assets/images/screenshot1-480x182-6e2830e016ce0555533c479884fdd197.jpg"},{"revision":"c26436483a3c66805ad1ed865043c40e","url":"assets/images/UsingTheEditor2-5bc9c757d6f1b226b3c1adc511b91cda.gif"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"74a30a0355bbbd2e6d7ecefd39d558f6","url":"img/favicon.ico"},{"revision":"1840b95942bce19457c984be9b77e184","url":"img/icons/128.png"},{"revision":"166f222a2919ae148bb35e52ed972d8a","url":"img/icons/512.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"73191efe47930c6b5d88dd28e745e102","url":"assets/fonts/CascadiaCode-61442455812b2cee49c42154f4c4ae03.woff2"},{"revision":"73191efe47930c6b5d88dd28e745e102","url":"fonts/CascadiaCode.woff2"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map