///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { App } from '@src/app/data/app.model';

export function getAppConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new App(),
        collection: 'apps',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
