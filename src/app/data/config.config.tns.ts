///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Config } from '@src/app/data/config.model';

export function getConfigConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Config(),
        collection: 'config',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
