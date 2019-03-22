///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Collection } from '@src/app/data/collection.model';

export function getCollectionConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Collection(),
        collection: 'collections',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
