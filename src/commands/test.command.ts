import { MessageHandler } from 'discord-message-handler'
import { Message } from 'discord.js';
import { dependencyInjectionContainer } from '../di-container';
import { ApiClient } from '../clients/apiClient';

export class TestCommand {
    private static client: ApiClient = dependencyInjectionContainer.get<ApiClient>(ApiClient);

    static setup(handler: MessageHandler) {
        handler.onCommand("!debug")
            .minArgs(0)
            .do(async (args: string[], rawArgs: string, message: Message) => {
                await message.author.send(await this.client.post("/scans", null, { url: 'https://docs.npmjs.com/cli/start.html' }))
            })
    }
}
