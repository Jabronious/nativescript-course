"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
var phone = require("nativescript-phone");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fonticon) {
        this.fonticon = fonticon;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactInfo = "\n121, Clear Water Bay Road\nClear Water Bay, Kowloon\n" +
            "HONG KONG\nTel: +852 1234 5678\nFax: +852 8765 4321\nEmail:confusion@food.net";
    };
    ContactComponent.prototype.sendEmail = function () {
        Email.available()
            .then(function (avail) {
            if (avail) {
                Email.compose({
                    to: ['confusion@food.net'],
                    subject: '[ConFusion]: Query',
                    body: 'Dear Sir/Madam:'
                });
            }
            else {
                console.log('No Email Configured');
            }
        });
    };
    ContactComponent.prototype.callRestaurant = function () {
        console.log('Make phone call');
        phone.dial("212-555-1234", false);
    };
    ContactComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html'
        }),
        __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxpQ0FBbUM7QUFFbkMsdUVBQStEO0FBQy9ELDBDQUE0QztBQUM1QywwQ0FBNEM7QUFPNUM7SUFLRSwwQkFDVSxRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUNsQyxDQUFDO0lBRUwsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcseURBQXlEO1lBQzFFLCtFQUErRSxDQUFBO0lBQ25GLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsS0FBSyxDQUFDLFNBQVMsRUFBRTthQUNkLElBQUksQ0FBQyxVQUFDLEtBQWM7WUFDbkIsSUFBRyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsSUFBSSxFQUFFLGlCQUFpQjtpQkFDeEIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQXJDVSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7eUNBT29CLDhDQUFrQjtPQU4zQixnQkFBZ0IsQ0FzQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCAqIGFzIEVtYWlsIGZyb20gJ25hdGl2ZXNjcmlwdC1lbWFpbCc7XG5pbXBvcnQgKiBhcyBwaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb250YWN0SW5mbzogc3RyaW5nO1xuICBlcnJNZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb250YWN0SW5mbyA9IFwiXFxuMTIxLCBDbGVhciBXYXRlciBCYXkgUm9hZFxcbkNsZWFyIFdhdGVyIEJheSwgS293bG9vblxcblwiICtcbiAgICAgIFwiSE9ORyBLT05HXFxuVGVsOiArODUyIDEyMzQgNTY3OFxcbkZheDogKzg1MiA4NzY1IDQzMjFcXG5FbWFpbDpjb25mdXNpb25AZm9vZC5uZXRcIlxuICB9XG5cbiAgc2VuZEVtYWlsKCkge1xuICAgIEVtYWlsLmF2YWlsYWJsZSgpXG4gICAgICAudGhlbigoYXZhaWw6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYoYXZhaWwpIHtcbiAgICAgICAgICBFbWFpbC5jb21wb3NlKHtcbiAgICAgICAgICAgIHRvOiBbJ2NvbmZ1c2lvbkBmb29kLm5ldCddLFxuICAgICAgICAgICAgc3ViamVjdDogJ1tDb25GdXNpb25dOiBRdWVyeScsXG4gICAgICAgICAgICBib2R5OiAnRGVhciBTaXIvTWFkYW06J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBFbWFpbCBDb25maWd1cmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgY2FsbFJlc3RhdXJhbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ01ha2UgcGhvbmUgY2FsbCcpO1xuICAgIHBob25lLmRpYWwoXCIyMTItNTU1LTEyMzRcIixmYWxzZSk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbn1cbiJdfQ==