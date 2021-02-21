
export interface IHLSPlayer {
    start(): boolean
    stop(): any
    getPosition(): number
    setPosition(position: number): number
    getSpeed(): number
    setSpeed(speed: any): any
}


class HLSPlayer implements IHLSPlayer {
    private position: number
    private speed: number
    constructor() {

    }

    public start(): boolean  {
        this.increment()
        this.speed = 1
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
        return this.speed
    }

    setSpeed(speed: number): any {
        this.speed = speed
        return this.speed
    }

    increment(): any {
        setTimeout(()=> {
            this.position++
            this.increment()
        }, 1000)
    }
}