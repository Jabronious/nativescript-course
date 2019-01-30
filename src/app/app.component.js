"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var app = require("tns-core-modules/application");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
var platform_service_1 = require("./services/platform.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions, platformservice) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.platformservice = platformservice;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/menu";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
        this.platformservice.printPlatformInfo();
        this.platformservice.startMonitoringNetwork()
            .subscribe(function (message) {
            console.log(message);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.platformservice.stopMonitoringNetwork();
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: "Login",
            message: "Enter Your Credentials",
            userName: application_settings_1.getString("userName", ""),
            password: application_settings_1.getString("password", ""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        };
        dialogs_1.login(options)
            .then(function (loginResult) {
            application_settings_1.setString("userName", loginResult.userName);
            application_settings_1.setString("password", loginResult.password);
        }, function () {
            console.log("Login Cancelled");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            platform_service_1.PlatformService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQUNwRCxzQ0FBZ0Q7QUFDaEQsNkRBQTREO0FBQzVELGdFQUE4RDtBQVE5RDtJQUlJLHNCQUNVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsZUFBZ0M7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRXRDLG9EQUFvRDtJQUN4RCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbURBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDakIsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFO2FBQzVDLFNBQVMsQ0FBQyxVQUFDLE9BQWU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBRUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELDBDQUFtQixHQUFuQixVQUFvQixHQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFvQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0MsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsUUFBUSxFQUFFLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNuQyxRQUFRLEVBQUUsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ25DLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7U0FDM0IsQ0FBQTtRQUVELGVBQUssQ0FBQyxPQUFPLENBQUM7YUFDWCxJQUFJLENBQUMsVUFBQyxXQUF3QjtZQUM3QixnQ0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFDRDtZQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyRVEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FNb0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNqQixrQ0FBZTtPQVBqQyxZQUFZLENBc0V4QjtJQUFELG1CQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgUmFkU2lkZURyYXdlciwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGxvZ2luLCBMb2dpblJlc3VsdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wbGF0Zm9ybS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICBwcml2YXRlIHBsYXRmb3Jtc2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gXCIvbWVudVwiO1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXNlcnZpY2UucHJpbnRQbGF0Zm9ybUluZm8oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXNlcnZpY2Uuc3RhcnRNb25pdG9yaW5nTmV0d29yaygpXG4gICAgICAgIC5zdWJzY3JpYmUoKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgICB0aGlzLnBsYXRmb3Jtc2VydmljZS5zdG9wTW9uaXRvcmluZ05ldHdvcmsoKTtcblxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBpc0NvbXBvbmVudFNlbGVjdGVkKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgICB9XG5cbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheUxvZ2luRGlhbG9nKCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgWW91ciBDcmVkZW50aWFsc1wiLFxuICAgICAgICB1c2VyTmFtZTogZ2V0U3RyaW5nKFwidXNlck5hbWVcIiwgXCJcIiksXG4gICAgICAgIHBhc3N3b3JkOiBnZXRTdHJpbmcoXCJwYXNzd29yZFwiLCBcIlwiKSxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIkxvZ2luXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgIH1cblxuICAgICAgbG9naW4ob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKGxvZ2luUmVzdWx0OiBMb2dpblJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldFN0cmluZyhcInVzZXJOYW1lXCIsIGxvZ2luUmVzdWx0LnVzZXJOYW1lKTtcbiAgICAgICAgICBzZXRTdHJpbmcoXCJwYXNzd29yZFwiLCBsb2dpblJlc3VsdC5wYXNzd29yZCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJMb2dpbiBDYW5jZWxsZWRcIilcbiAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==