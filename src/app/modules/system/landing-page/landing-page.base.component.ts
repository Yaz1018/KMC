///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { TranslationsProvider } from '@src/app/core/translations.provider';
import { AuthorizationService } from '@src/app/core/auth/authorization.service';

@Component({
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $authorizationService: AuthorizationService;

    public $modules = [
        {
            description: '',
            thumbnail: {
                background: '#00a2e8',
                color: '#ffffff',
                icon: 'fa-area-chart'
            },
            label: 'Applications',
            labelKey: 'modules.Applications.label',
            name: 'Applications',
            url: 'applications',
            children: [] as View[]
        }
    ];

    constructor(public injector: Injector) {
        this.$authorizationService = this.injector.get(AuthorizationService);

        this.filterModules();

        const translationsProvider = this.injector.get(TranslationsProvider);
        translationsProvider.useDefaultLanguage();
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    private filterModules(): void {
        this.$modules.forEach(module => {
            module.children = module.children.filter(view => this.$authorizationService.isAuthorized(view.authorization));
        });

        this.$modules = this.$modules.filter(m => m.children.length);
    }
}

interface View {
    name: string;
    routerLink: string;
    authorization: {
        allowedRoles: any[];
    };
}
