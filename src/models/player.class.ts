import { IPlayer } from "../interfaces/player.interface"
export class Player implements IPlayer {
    id: string;
    name: string;
    additions = 0;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
    setAddition(count: number) {
        this.additions = count;
    }
    resetAddition() {
        this.additions = 0;
    }
    static RegisterRankCommandRegularExpression() {
        return "(register\\s)(instinct|Instinct|mystic|Mystic|valor|Valor)( \\w+){2}(\\s)(\\d{1,2})"
    }
    static RegisterRankCommandInvalidMessage(){
        return "Invalid command. Usage: !register <instinct|mystic|valor> <firstname> <pokemon-go name> <level 1-40>"
    }
}
