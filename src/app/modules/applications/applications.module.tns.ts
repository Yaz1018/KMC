///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { ApplicationsRoutingModule } from '@src/app/modules/applications/applications-routing.module';

import { AppsListViewComponent } from '@src/app/modules/applications/apps-list/apps-list.component';
import { AppsNewListViewComponent } from '@src/app/modules/applications/apps-new-list/apps-new-list.component';
import { CollectionsViewComponent } from '@src/app/modules/applications/collections/collections.component';

import { config, transformConfig } from '@src/app/modules/applications/applications.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [AppsListViewComponent, AppsNewListViewComponent, CollectionsViewComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, ApplicationsRoutingModule, ...config.imports],
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
