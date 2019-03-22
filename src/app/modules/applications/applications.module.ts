///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ApplicationsModuleComponent } from '@src/app/modules/applications/applications.component';
import { ApplicationsRoutingModule } from '@src/app/modules/applications/applications-routing.module';
import { AppLayoutViewModule } from '@src/app/modules/system/app-layout/app-layout.module';

import { config, transformConfig } from '@src/app/modules/applications/applications.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [ApplicationsModuleComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, ApplicationsRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class ApplicationsModule {}
