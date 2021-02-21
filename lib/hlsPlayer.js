"use strict";
exports.__esModule = true;
var HLSPlayer = /** @class */ (function () {
    function HLSPlayer() {
    }
    HLSPlayer.prototype.start = function () {
        this.increment();
        this.speed = 1;
        return true;
    };
    HLSPlayer.prototype.stop = function () {
        return true;
    };
    HLSPlayer.prototype.getPosition = function () {
        return 0;
    };
    HLSPlayer.prototype.setPosition = function (position) {
        return position;
    };
    HLSPlayer.prototype.getSpeed = function () {
        return this.speed;
    };
    HLSPlayer.prototype.setSpeed = function (speed) {
        this.speed = speed;
        return this.speed;
    };
    HLSPlayer.prototype.increment = function () {
        var _this = this;
        setTimeout(function () {
            _this.position++;
            _this.increment();
        }, 1000);
    };
    return HLSPlayer;
}());
