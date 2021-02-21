import { IHLSPlayer } from './lib/hlsPlayer';


export class NBCPlayer {
    private hlsPlayer: IHLSPlayer
    private title: string
    private duration: number
    private bookmark: number
    constructor (hlsPlayer: IHLSPlayer, title: string, duration: number, bookmark: number) {
        this.hlsPlayer = hlsPlayer
        this.title = title
        this.duration = duration
        this.bookmark = bookmark
    }

    getPlayerTitle(): string {
        return this.title
    }

    getPlayerDuration (): number {
        return this.duration
    }


    initiatePlayer(): boolean {
        return this.hlsPlayer.start()
    }

    stopPlayer(): boolean {
        return this.hlsPlayer.stop()
    }

    getProgressbar(): number {
        return this.hlsPlayer.getPosition()
    }

    skipForward(): number {
        return this.hlsPlayer.setPosition(this.hlsPlayer.getPosition() + 5)
    }

    skipBackward(): number {
        return this.hlsPlayer.setPosition(this.hlsPlayer.getPosition() - 5)
    }

    fastForward(): any {
        this.hlsPlayer.setSpeed(this.hlsPlayer.getSpeed() + 1)
    }

    rewind(): any {
        this.hlsPlayer.setSpeed(this.hlsPlayer.getSpeed() - 1)
    }

    pause(): any {
        this.hlsPlayer.setSpeed(0)
    }

    play(): any {
        this.hlsPlayer.setSpeed(1)
    }
}

