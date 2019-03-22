/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { AppsNewListViewBaseComponent } from '@src/app/modules/applications/apps-new-list/apps-new-list.base.component';

export class AppsNewListViewComponent extends AppsNewListViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
