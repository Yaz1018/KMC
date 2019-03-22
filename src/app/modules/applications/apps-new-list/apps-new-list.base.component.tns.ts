///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Injector } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';
import { App } from '@src/app/data/app.model';
import { getAppConfig } from '@src/app/data/app.config';

@Component({
    templateUrl: './apps-new-list.component.html',
    styleUrls: ['./apps-new-list.component.css']
})
export class AppsNewListViewBaseComponent implements OnInit {
    public $config: any = {
        mobilelistviewcomponent0: {
            navigateOnItemTap: {
                parameter: ''
            }
        }
    };

    public $appsDataService: MobileDataService<App, DocumentState>;

    protected $route: ActivatedRoute;
    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$route = injector.get(ActivatedRoute);
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            appsData: getAppConfig()
        };

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        // TODO: consider moving this functionality to separate service
        const routeParamStateChanges: Observable<DocumentState> = this.$route.paramMap.pipe(
            map((params: ParamMap) => ({ id: params.get('id') }))
        );

        this.$appsDataService = this.$serviceFactory.documentData<App>(dataConfig.appsData);
        this.$appsDataService.dataState.onChanges(routeParamStateChanges);
    }
}
