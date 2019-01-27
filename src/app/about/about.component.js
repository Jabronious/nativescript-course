"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var app = require("application");
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
    AboutComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBRTFELDZEQUEyRDtBQUMzRCxpQ0FBbUM7QUFRbkM7SUFNRSx3QkFDVSxhQUE0QixFQUNULE9BQU87UUFEMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQy9CLENBQUM7SUFFTixpQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTthQUM1QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFDMUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFRLE9BQU8sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsd2tCQUF3a0IsQ0FBQTtJQUN6bEIsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUF0QlUsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQztRQVNHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURLLDhCQUFhO09BUDNCLGNBQWMsQ0F1QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExlYWRlciB9IGZyb20gJy4uL3NoYXJlZC9sZWFkZXInO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxlYWRlcnM6IExlYWRlcltdO1xuICBoaXN0b3J5OiBzdHJpbmc7XG4gIGVyck1lc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBsZWFkZXJzZXJ2aWNlOiBMZWFkZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkxcbiAgKSB7ICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sZWFkZXJzZXJ2aWNlLmdldExlYWRlcnMoKVxuICAgICAgLnN1YnNjcmliZShsZWFkZXJzID0+IHRoaXMubGVhZGVycyA9IGxlYWRlcnMsXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IFwiU3RhcnRlZCBpbiAyMDEwLCBSaXN0b3JhbnRlIGNvbiBGdXNpb24gcXVpY2tseSBlc3RhYmxpc2hlZCBpdHNlbGYgYXMgYSBjdWxpbmFyeSBpY29uIHBhciBleGNlbGxlbmNlIGluIEhvbmcgS29uZy4gV2l0aCBpdHMgdW5pcXVlIGJyYW5kIG9mIHdvcmxkIGZ1c2lvbiBjdWlzaW5lIHRoYXQgY2FuIGJlIGZvdW5kIG5vd2hlcmUgZWxzZSwgaXQgZW5qb3lzIHBhdHJvbmFnZSBmcm9tIHRoZSBBLWxpc3QgY2xpZW50ZWxlIGluIEhvbmcgS29uZy4gIEZlYXR1cmluZyBmb3VyIG9mIHRoZSBiZXN0IHRocmVlLXN0YXIgTWljaGVsaW4gY2hlZnMgaW4gdGhlIHdvcmxkLCB5b3UgbmV2ZXIga25vdyB3aGF0IHdpbGwgYXJyaXZlIG9uIHlvdXIgcGxhdGUgdGhlIG5leHQgdGltZSB5b3UgdmlzaXQgdXMuXFxuXFxuVGhlIHJlc3RhdXJhbnQgdHJhY2VzIGl0cyBodW1ibGUgYmVnaW5uaW5ncyB0byBUaGUgRnJ5aW5nIFBhbiwgYSBzdWNjZXNzZnVsIGNoYWluIHN0YXJ0ZWQgYnkgb3VyIENFTywgTXIuIFBldGVyIFBhbiwgdGhhdCBmZWF0dXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUgdGhlIHdvcmxkJ3MgYmVzdCBjdWlzaW5lcyBpbiBhIHBhbi5cIlxuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG59XG4iXX0=