///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { alert, prompt } from 'tns-core-modules/ui/dialogs/dialogs';
import { isAndroid } from 'tns-core-modules/platform';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginViewBaseComponent {
    navigationService: NavigationService;
    authenticationService: AuthenticationService;

    constructor(protected $injector: Injector) {
        this.navigationService = $injector.get(NavigationService);
        this.authenticationService = $injector.get(AuthenticationService);
    }

    login() {
        this.authenticationService.signInExternal().subscribe(
            () => {
                this.navigationService.goToRoot(isAndroid ? { animated: false, transition: {} } : {});
            },
            err => {
                this.alert(`An error occurred: ${err}`);
            }
        );
    }

    private alert(message: string) {
        return alert({
            title: '',
            okButtonText: 'OK',
            message: message
        });
    }
}
