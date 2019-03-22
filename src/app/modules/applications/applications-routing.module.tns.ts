///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AppsListViewComponent } from '@src/app/modules/applications/apps-list/apps-list.component';
import { AppsNewListViewComponent } from '@src/app/modules/applications/apps-new-list/apps-new-list.component';
import { CollectionsViewComponent } from '@src/app/modules/applications/collections/collections.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/applications/applications-routing.config';

const routes: Routes = [
    {
        path: 'apps-new-list/:id',
        canActivate: [AuthenticationGuardService],
        component: AppsNewListViewComponent
    },
    {
        path: 'apps-list',
        canActivate: [AuthenticationGuardService],
        component: AppsListViewComponent
    },
    {
        path: 'apps-new-list',
        canActivate: [AuthenticationGuardService],
        component: AppsNewListViewComponent
    },
    {
        path: 'collections',
        canActivate: [AuthenticationGuardService],
        component: CollectionsViewComponent
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ApplicationsRoutingModule {}
