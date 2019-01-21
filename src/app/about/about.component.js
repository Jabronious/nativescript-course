"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderservice, baseURL) {
        this.leaderservice = leaderservice;
        this.baseURL = baseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
        this.history = "Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.\n\nThe restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.";
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            moduleId: module.id,
            templateUrl: './about.component.html',
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService, Object])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBRTFELDZEQUEyRDtBQU8zRDtJQU1FLHdCQUNVLGFBQTRCLEVBQ1QsT0FBTztRQUQxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNULFlBQU8sR0FBUCxPQUFPLENBQUE7SUFDL0IsQ0FBQztJQUVOLGlDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUMxQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyx3a0JBQXdrQixDQUFBO0lBQ3psQixDQUFDO0lBakJVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7UUFTRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FESyw4QkFBYTtPQVAzQixjQUFjLENBa0IxQjtJQUFELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hYm91dCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsZWFkZXJzOiBMZWFkZXJbXTtcbiAgaGlzdG9yeTogc3RyaW5nO1xuICBlcnJNZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IgKFxuICAgIHByaXZhdGUgbGVhZGVyc2VydmljZTogTGVhZGVyU2VydmljZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMXG4gICkgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGVhZGVyc2VydmljZS5nZXRMZWFkZXJzKClcbiAgICAgIC5zdWJzY3JpYmUobGVhZGVycyA9PiB0aGlzLmxlYWRlcnMgPSBsZWFkZXJzLFxuICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XG5cbiAgICB0aGlzLmhpc3RvcnkgPSBcIlN0YXJ0ZWQgaW4gMjAxMCwgUmlzdG9yYW50ZSBjb24gRnVzaW9uIHF1aWNrbHkgZXN0YWJsaXNoZWQgaXRzZWxmIGFzIGEgY3VsaW5hcnkgaWNvbiBwYXIgZXhjZWxsZW5jZSBpbiBIb25nIEtvbmcuIFdpdGggaXRzIHVuaXF1ZSBicmFuZCBvZiB3b3JsZCBmdXNpb24gY3Vpc2luZSB0aGF0IGNhbiBiZSBmb3VuZCBub3doZXJlIGVsc2UsIGl0IGVuam95cyBwYXRyb25hZ2UgZnJvbSB0aGUgQS1saXN0IGNsaWVudGVsZSBpbiBIb25nIEtvbmcuICBGZWF0dXJpbmcgZm91ciBvZiB0aGUgYmVzdCB0aHJlZS1zdGFyIE1pY2hlbGluIGNoZWZzIGluIHRoZSB3b3JsZCwgeW91IG5ldmVyIGtub3cgd2hhdCB3aWxsIGFycml2ZSBvbiB5b3VyIHBsYXRlIHRoZSBuZXh0IHRpbWUgeW91IHZpc2l0IHVzLlxcblxcblRoZSByZXN0YXVyYW50IHRyYWNlcyBpdHMgaHVtYmxlIGJlZ2lubmluZ3MgdG8gVGhlIEZyeWluZyBQYW4sIGEgc3VjY2Vzc2Z1bCBjaGFpbiBzdGFydGVkIGJ5IG91ciBDRU8sIE1yLiBQZXRlciBQYW4sIHRoYXQgZmVhdHVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lIHRoZSB3b3JsZCdzIGJlc3QgY3Vpc2luZXMgaW4gYSBwYW4uXCJcbiAgfVxufVxuIl19