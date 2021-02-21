import { NBCPlayer } from './index';
import { IHLSPlayer } from './lib/hlsPlayer';


/* Used Mock Player implementation to test */


class mockPlayer implements IHLSPlayer {
    private position: number
    private speed: number
    private progress: any
    constructor() {

    }

    public start(): boolean  {
        this.increment()
        this.speed = 1
        this.position = 1
        return true
    }

    stop(): boolean {
        clearTimeout(this.progress)
        return true
    }

    getPosition(): number {
        return this.position;
    }

    setPosition(position: number): number {
        this.position = position
        return position;
    }

    getSpeed(): number {
        return this.speed
    }

    setSpeed(speed: number): any {
        this.speed = speed
        return this.speed
    }

    increment(): any {
        this.progress = setTimeout(()=> {
            this.position++
            console.log(this.position);
            this.increment()
        }, 1000)
    }
}




// Created a sample player passing mockplayer as object rather than injecting an interface from container. 
// Initial version of IOC as example

const ironMan  = new NBCPlayer(new mockPlayer, 'IronMan', 180000, 0)

ironMan.initiatePlayer()
console.log(ironMan.getPlayerDuration())


//************************************ */
/** Write sample test cases here to test player implementation */
setTimeout(()=> {
    console.log(ironMan.getProgressbar())
    ironMan.skipForward()
    ironMan.pause()
}, 5000)

