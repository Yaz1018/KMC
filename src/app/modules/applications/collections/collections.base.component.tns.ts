///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, OnInit } from '@angular/core';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { Collection } from '@src/app/data/collection.model';
import { getCollectionConfig } from '@src/app/data/collection.config';

@Component({
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.css']
})
export class CollectionsViewBaseComponent implements OnInit {
    public $config: any = {
        listView: {
            navigateOnItemTap: {
                parameter: ''
            }
        }
    };

    public $collectionsService: MobileDataService<Collection, CollectionState>;

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            collections: getCollectionConfig()
        };

        this.initDataServices(dataConfig);
    }

    ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$collectionsService = this.$serviceFactory.collectionData<Collection>(dataConfig.collections, {
            skip: 0,
            take: 20
        });
    }
}
