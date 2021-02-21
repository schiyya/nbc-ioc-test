"use strict";
exports.__esModule = true;
exports.NBCPlayer = void 0;
var NBCPlayer = /** @class */ (function () {
    function NBCPlayer(hlsPlayer, title, duration, bookmark) {
        this.hlsPlayer = hlsPlayer;
        this.title = title;
        this.duration = duration;
        this.bookmark = bookmark;
    }
    NBCPlayer.prototype.getPlayerTitle = function () {
        return this.title;
    };
    NBCPlayer.prototype.getPlayerDuration = function () {
        return this.duration;
    };
    NBCPlayer.prototype.initiatePlayer = function () {
        return this.hlsPlayer.start();
    };
    NBCPlayer.prototype.stopPlayer = function () {
        return this.hlsPlayer.stop();
    };
    NBCPlayer.prototype.getProgressbar = function () {
        return this.hlsPlayer.getPosition();
    };
    NBCPlayer.prototype.skipForward = function () {
        return this.hlsPlayer.setPosition(this.hlsPlayer.getPosition() + 5);
    };
    NBCPlayer.prototype.skipBackward = function () {
        return this.hlsPlayer.setPosition(this.hlsPlayer.getPosition() - 5);
    };
    NBCPlayer.prototype.fastForward = function () {
        this.hlsPlayer.setSpeed(this.hlsPlayer.getSpeed() + 1);
    };
    NBCPlayer.prototype.rewind = function () {
        this.hlsPlayer.setSpeed(this.hlsPlayer.getSpeed() - 1);
    };
    NBCPlayer.prototype.pause = function () {
        this.hlsPlayer.setSpeed(0);
    };
    NBCPlayer.prototype.play = function () {
        this.hlsPlayer.setSpeed(1);
    };
    return NBCPlayer;
}());
exports.NBCPlayer = NBCPlayer;
