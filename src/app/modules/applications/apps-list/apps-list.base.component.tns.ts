///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, OnInit } from '@angular/core';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { App } from '@src/app/data/app.model';
import { getAppConfig } from '@src/app/data/app.config';

@Component({
    templateUrl: './apps-list.component.html',
    styleUrls: ['./apps-list.component.css']
})
export class AppsListViewBaseComponent implements OnInit {
    public $config: any = {
        listView: {
            navigateOnItemTap: {
                parameter: ''
            }
        }
    };

    public $appsService: MobileDataService<App, CollectionState>;

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            apps: getAppConfig()
        };

        this.initDataServices(dataConfig);
    }

    ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$appsService = this.$serviceFactory.collectionData<App>(dataConfig.apps, {
            skip: 0,
            take: 20
        });
    }
}
