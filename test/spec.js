/* eslint-env node, jasmine, browser */
"use strict";

var addEventHandler = require("..");
var element = document.createElement("div");
document.body.appendChild(element);
var triggered = false;
var handler = function(){
    triggered = true;
};
var type = "click";
var synth = require("synthetic-dom-events");
var fire = require("fire-native-event");

describe("add-event-handler", function(){
    it("Adds an event handler", function(){
        addEventHandler(element, type, handler);
        var event = synth(type);
        fire(element, event);
        expect(triggered).toEqual(true);
    });
});
