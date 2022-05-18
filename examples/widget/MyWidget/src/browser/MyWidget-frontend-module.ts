import { ContainerModule } from '@theia/core/shared/inversify';
import { MyWidgetWidget } from './MyWidget-widget';
import { MyWidgetContribution } from './MyWidget-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, MyWidgetContribution);
    bind(FrontendApplicationContribution).toService(MyWidgetContribution);
    bind(MyWidgetWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: MyWidgetWidget.ID,
        createWidget: () => ctx.container.get<MyWidgetWidget>(MyWidgetWidget)
    })).inSingletonScope();
});
