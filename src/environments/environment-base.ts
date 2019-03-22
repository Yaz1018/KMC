///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { AppConfigService } from '@src/app/core/app-config.service';

export const environmentBase = {
    appId: 'c7b96ef1-9569-4b1d-a824-8265570e8685',
    appName: 'KinveyMobileConsole',
    getDataProviders() {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication() {
        return AppConfigService.settings.authentication;
    }
};
