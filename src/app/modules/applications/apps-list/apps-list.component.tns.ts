/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { AppsListViewBaseComponent } from '@src/app/modules/applications/apps-list/apps-list.base.component';

export class AppsListViewComponent extends AppsListViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
