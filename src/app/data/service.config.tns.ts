///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Service } from '@src/app/data/service.model';

export function getServiceConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Service(),
        collection: 'services',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
