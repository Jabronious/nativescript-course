import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { login, LoginResult } from "ui/dialogs";
import { getString, setString } from "application-settings";
import { PlatformService } from './services/platform.service';


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
      private router: Router,
      private routerExtensions: RouterExtensions,
      private platformservice: PlatformService
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/menu";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        this.platformservice.printPlatformInfo();
        this.platformservice.startMonitoringNetwork()
        .subscribe((message: string) => {
          console.log(message);

        });
    }

    ngOnDestroy() {

      this.platformservice.stopMonitoringNetwork();

    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    displayLoginDialog() {
      let options = {
        title: "Login",
        message: "Enter Your Credentials",
        userName: getString("userName", ""),
        password: getString("password", ""),
        okButtonText: "Login",
        cancelButtonText: "Cancel"
      }

      login(options)
        .then((loginResult: LoginResult) => {
          setString("userName", loginResult.userName);
          setString("password", loginResult.password);
        },
        () => { console.log("Login Cancelled")
      });
    }
}
