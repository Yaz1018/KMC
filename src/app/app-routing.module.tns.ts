///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AppTabsComponent } from '@src/app/app-tabs.component';

import { config } from '@src/app/app-routing.config';

export const defaultRoute = '_app';

const routes: Routes = [
    { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
    {
        path: defaultRoute,
        data: { enableDrawer: true },
        component: AppTabsComponent,
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        children: [
            {
                path: 'system',
                outlet: 'systemHomeTab',
                component: NSEmptyOutletComponent,
                loadChildren: '@src/app/modules/system/system.module#SystemModule'
            }
        ]
    },
    {
        path: 'system',
        loadChildren: '@src/app/modules/system/system.module#SystemModule'
    },
    {
        path: 'applications',
        loadChildren: '@src/app/modules/applications/applications.module#ApplicationsModule'
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
