import { NBCPlayer } from './index';
import { IHLSPlayer } from './lib/hlsPlayer';

class mockPlayer implements IHLSPlayer {
    constructor() {

    }
    start(): boolean  {
        return true
    }

    stop(): boolean {
        return true
    }

    getPosition(): number {
        return 0;
    }

    setPosition(position: number): number {
        return position;
    }

    getSpeed(): number {
        return 1
    }

    setSpeed(speed: number): any {
        return speed
    }
}

const ironMan  = new NBCPlayer(new mockPlayer, 'IronMan', 180000, 0)

ironMan.initiatePlayer()
console.log(ironMan.getPlayerDuration())

setTimeout(()=> {
    console.log(ironMan.getProgressbar())
}, 5000)

