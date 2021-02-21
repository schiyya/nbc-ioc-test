"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var mockPlayer = /** @class */ (function () {
    function mockPlayer() {
    }
    mockPlayer.prototype.start = function () {
        return true;
    };
    mockPlayer.prototype.stop = function () {
        return true;
    };
    mockPlayer.prototype.getPosition = function () {
        return 0;
    };
    mockPlayer.prototype.setPosition = function (position) {
        return position;
    };
    mockPlayer.prototype.getSpeed = function () {
        return 1;
    };
    mockPlayer.prototype.setSpeed = function (speed) {
        return speed;
    };
    return mockPlayer;
}());
var ironMan = new index_1.NBCPlayer(new mockPlayer, 'IronMan', 180000, 0);
ironMan.initiatePlayer();
console.log(ironMan.getPlayerDuration());
setTimeout(function () {
    console.log(ironMan.getProgressbar());
}, 5000);
