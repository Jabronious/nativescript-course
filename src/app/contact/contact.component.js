"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxpQ0FBbUM7QUFFbkMsdUVBQStEO0FBQy9ELDBDQUE0QztBQU81QztJQUtFLDBCQUNVLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO0lBQ2xDLENBQUM7SUFFTCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyx5REFBeUQ7WUFDMUUsK0VBQStFLENBQUE7SUFDbkYsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSxLQUFLLENBQUMsU0FBUyxFQUFFO2FBQ2QsSUFBSSxDQUFDLFVBQUMsS0FBYztZQUNuQixJQUFHLEtBQUssRUFBRTtnQkFDUixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixJQUFJLEVBQUUsaUJBQWlCO2lCQUN4QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw0Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBL0JVLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzt5Q0FPb0IsOENBQWtCO09BTjNCLGdCQUFnQixDQWdDNUI7SUFBRCx1QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0ICogYXMgRW1haWwgZnJvbSAnbmF0aXZlc2NyaXB0LWVtYWlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3QnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29udGFjdEluZm86IHN0cmluZztcbiAgZXJyTWVzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGFjdEluZm8gPSBcIlxcbjEyMSwgQ2xlYXIgV2F0ZXIgQmF5IFJvYWRcXG5DbGVhciBXYXRlciBCYXksIEtvd2xvb25cXG5cIiArXG4gICAgICBcIkhPTkcgS09OR1xcblRlbDogKzg1MiAxMjM0IDU2NzhcXG5GYXg6ICs4NTIgODc2NSA0MzIxXFxuRW1haWw6Y29uZnVzaW9uQGZvb2QubmV0XCJcbiAgfVxuXG4gIHNlbmRFbWFpbCgpIHtcbiAgICBFbWFpbC5hdmFpbGFibGUoKVxuICAgICAgLnRoZW4oKGF2YWlsOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmKGF2YWlsKSB7XG4gICAgICAgICAgRW1haWwuY29tcG9zZSh7XG4gICAgICAgICAgICB0bzogWydjb25mdXNpb25AZm9vZC5uZXQnXSxcbiAgICAgICAgICAgIHN1YmplY3Q6ICdbQ29uRnVzaW9uXTogUXVlcnknLFxuICAgICAgICAgICAgYm9keTogJ0RlYXIgU2lyL01hZGFtOidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm8gRW1haWwgQ29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbn1cbiJdfQ==