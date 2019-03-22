///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Collaborator } from '@src/app/data/collaborator.model';

export function getCollaboratorConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Collaborator(),
        collection: 'collaborators',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
