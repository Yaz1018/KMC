///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isAndroid } from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';
import { defaultRoute } from '@src/app/app-routing.module'

@Injectable()
export class NavigationService {
    constructor(private zone: NgZone, private routerExtensions: RouterExtensions) {}

    navigate(command: any[], extras: ExtendedNavigationExtras = {}) {
        command = command.slice(0);
        extras.animated = true;

        if (!isAndroid) {
            extras.transition = extras.transition || {
                name: 'slide',
                duration: 300,
                curve: 'ease'
            };
        }

        const { relative, command: relativeNavCommand } = this.checkForNavigationRelativeToCurrentModule({ extras, command });
        if (relative) {
            command = relativeNavCommand;
        }

        this.zone.run(() => this.routerExtensions.navigate(command, extras));
    }

    goToRoot(extras: ExtendedNavigationExtras = {}) {
        extras.clearHistory = true;
        this.navigate([''], extras);
    }

    canGoBack(activatedRoute: ActivatedRoute) {
        return this.routerExtensions.canGoBack({ relativeTo: activatedRoute });
    }

    goBack(activatedRoute: ActivatedRoute) {
        return this.routerExtensions.back({ relativeTo: activatedRoute });
    }

    private checkForNavigationRelativeToCurrentModule({ extras, command }) {
        if (!extras.relativeTo || command[0].outlets) {
            return { relative: false };
        }

        if (command.length === 1) {
            command = command[0].split('/');
        }

        const currentModuleName = this.getCurrentModuleFromActivatedRoute(extras.relativeTo);
        if (currentModuleName === command[0] || command[0] === '..') {
            // relative navigation
            command[0] = '..'
            return { relative: true, command };
        }

        // absolute navigation e.g. in primary outlet
        delete extras.relativeTo;
        return { relative: false };
    }

    private getCurrentModuleFromActivatedRoute(activatedRoute) {
        return activatedRoute.snapshot.pathFromRoot
            .map(x => x.url[0])
            .join('/')
            .split(`/${defaultRoute}/`)
            .pop()
            .split('/')
            .shift();
    }
}
