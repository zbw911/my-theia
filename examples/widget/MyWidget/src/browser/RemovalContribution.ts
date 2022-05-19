import {injectable} from 'inversify';
import {CommandRegistry} from '@theia/core';
import {CommandContribution, MenuContribution, MenuModelRegistry} from '@theia/core/lib/common';
import {CommonCommands} from '@theia/core/lib/browser';

@injectable()
export class RemovalContribution implements CommandContribution, MenuContribution {
    public registerCommands(commandRegistry: CommandRegistry): void {
        console.log("@" , "registerCommands")
        // Help
        commandRegistry.unregisterCommand(CommonCommands.ABOUT_COMMAND);
    }

    public registerMenus(menus: MenuModelRegistry): void {
        // Help
        menus.unregisterMenuAction(CommonCommands.ABOUT_COMMAND);

    }
}