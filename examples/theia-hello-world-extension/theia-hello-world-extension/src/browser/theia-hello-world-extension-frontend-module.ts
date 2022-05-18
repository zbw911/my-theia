/**
 * Generated using theia-extension-generator
 */
import { TheiaHelloWorldExtensionCommandContribution, TheiaHelloWorldExtensionMenuContribution } from './theia-hello-world-extension-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TheiaHelloWorldExtensionCommandContribution);
    bind(MenuContribution).to(TheiaHelloWorldExtensionMenuContribution);
});
