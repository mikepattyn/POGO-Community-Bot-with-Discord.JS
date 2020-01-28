import { injectable } from "inversify";
import { IPlayer } from "../api/v1/players/player.controller";

const { Datastore } = require("@google-cloud/datastore")

@injectable()
export class PlayerStore {
    private datastore = new Datastore();

    async insert(players: IPlayer[]) {
        try {
            players.forEach(async (player: IPlayer) => {
                return await this.datastore.save({
                    key: this.datastore.key('Players'),
                    data: player
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
    async get(key: string) {
        try {
            return await this.datastore.get(key)
        } catch (error) {
            console.log(error)
        }
    }
    
    async searchByUsername(name: string) {
        var retVal = null
        const q = this.datastore
            .createQuery("Players")
            .filter('userName', '=', name)
        await this.datastore.runQuery(q).then((result: any) => {
            // entities = An array of records.
            retVal = result
        })
        return retVal
    }
}