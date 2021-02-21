"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var mockPlayer = /** @class */ (function () {
    function mockPlayer() {
    }
    mockPlayer.prototype.start = function () {
        this.increment();
        this.speed = 1;
        this.position = 1;
        return true;
    };
    mockPlayer.prototype.stop = function () {
        clearTimeout(this.progress);
        return true;
    };
    mockPlayer.prototype.getPosition = function () {
        return this.position;
    };
    mockPlayer.prototype.setPosition = function (position) {
        this.position = position;
        return position;
    };
    mockPlayer.prototype.getSpeed = function () {
        return this.speed;
    };
    mockPlayer.prototype.setSpeed = function (speed) {
        this.speed = speed;
        return this.speed;
    };
    mockPlayer.prototype.increment = function () {
        var _this = this;
        this.progress = setTimeout(function () {
            _this.position++;
            console.log(_this.position);
            _this.increment();
        }, 1000);
    };
    return mockPlayer;
}());
var ironMan = new index_1.NBCPlayer(new mockPlayer, 'IronMan', 180000, 0);
ironMan.initiatePlayer();
console.log(ironMan.getPlayerDuration());
setTimeout(function () {
    console.log(ironMan.getProgressbar());
    ironMan.skipForward();
}, 5000);
