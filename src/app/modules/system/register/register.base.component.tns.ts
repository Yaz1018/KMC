///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';
import { isAndroid } from 'tns-core-modules/platform';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterViewBaseComponent {
    isLoading: boolean;
    user: any;
    activatedRoute: ActivatedRoute;
    navigationService: NavigationService;
    authenticationService: AuthenticationService;
    @ViewChild('username')
    username: ElementRef;
    @ViewChild('password')
    password: ElementRef;
    @ViewChild('confirmPassword')
    confirmPassword: ElementRef;

    constructor(protected $injector: Injector) {
        this.activatedRoute = $injector.get(ActivatedRoute);
        this.navigationService = $injector.get(NavigationService);
        this.authenticationService = $injector.get(AuthenticationService);
        this.isLoading = false;
        this.user = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    }

    submit() {
        if (!this.user.username || !this.user.password || !this.user.email) {
            this.alert('Please provide username, password and email.');
            return;
        }

        if (this.isLoading) {
            return;
        }

        this.register();
    }

    backToLogin() {
        if (this.isLoading) {
            return;
        }

        this.navigationService.goBack(this.activatedRoute);
    }

    register() {
        if (this.user.password !== this.user.confirmPassword) {
            this.alert('Your passwords do not match.');
            return;
        }

        this.isLoading = true;
        this.authenticationService.signUp(this.user).subscribe(
            () => {
                this.isLoading = false;
                this.navigationService.goToRoot(isAndroid ? { animated: false, transition: {} } : {});
            },
            () => {
                this.isLoading = false;
                this.alert('An error occurred.');
            }
        );
    }

    focusUsername() {
        this.username.nativeElement.focus();
    }

    focusConfirmPassword() {
        this.confirmPassword.nativeElement.focus();
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    private alert(message: string) {
        return alert({
            title: '',
            okButtonText: 'OK',
            message: message
        });
    }
}
