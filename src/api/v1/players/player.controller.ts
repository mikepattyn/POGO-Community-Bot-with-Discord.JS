import { PlayerStore } from "../../../stores/player.store";
import { dependencyInjectionContainer } from "../../../di-container";

export interface IPlayerController {
    // GET
    get(userName: string): IPlayer
    // POST
    post(player: IPlayer): boolean
    // UPDATE 
    update(player: IPlayer): boolean
    // DELETE
    delete(player: IPlayer): boolean
}

// TODO: Implement methods

export class PlayerController implements IPlayerController {
    private _playerStore: PlayerStore = dependencyInjectionContainer.get<PlayerStore>(PlayerStore)

    get(userName: string): IPlayer {
        throw new Error("Method not implemented.");
    }    
    post(player: IPlayer): boolean {
        throw new Error("Method not implemented.");
    }
    update(player: IPlayer): boolean {
        throw new Error("Method not implemented.");
    }
    delete(player: IPlayer): boolean {
        throw new Error("Method not implemented.");
    }
}

export interface IPlayer {
    username: string
    player_level: number
}