/* eslint-env node, browser */
"use strict";

module.exports = function(element, type, handler) {
    if (element.addEventListener) {
        return element.addEventListener(type, handler);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + type, handler);
    } else {
        throw "No event handler adding interface found";
    }
};
