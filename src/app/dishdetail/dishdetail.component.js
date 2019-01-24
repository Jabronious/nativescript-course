"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Toast = require("nativescript-toast");
var dialogs_1 = require("ui/dialogs");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(favoriteservice, fonticon, dishservice, route, routerExtensions, baseURL) {
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.dishservice = dishservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.baseURL = baseURL;
        this.favorite = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.switchMap(function (params) { return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            Toast.makeText("Added Dish " + this.dish.id).show();
        }
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent.prototype.dishActions = function () {
        var _this = this;
        var options = {
            title: "Dish Actions",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add Comment"]
        };
        dialogs_1.action(options).then(function (result) {
            if ("Add to Favorites" === result) {
                _this.addToFavorites();
            }
            else {
                console.log(result);
            }
        });
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
        }),
        __param(5, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCw0Q0FBMkM7QUFDM0MsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwwQ0FBNEM7QUFDNUMsc0NBQW9DO0FBT3BDO0lBU0UsNkJBQ1UsZUFBZ0MsRUFDaEMsUUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2YsT0FBTztRQUwxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFYcEMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQVlyQixDQUFDO0lBRU4sc0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFN0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQXZCLENBQXVCLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxHQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUNELFVBQUEsT0FBTyxJQUFNLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsNENBQWMsR0FBZDtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQUEsaUJBY0M7UUFiQyxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxjQUFjO1lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO1NBQy9DLENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsSUFBRyxrQkFBa0IsS0FBSyxNQUFNLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTthQUN0QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0RVLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDO1FBZ0JHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUxPLGtDQUFlO1lBQ3RCLDhDQUFrQjtZQUNmLDBCQUFXO1lBQ2pCLHVCQUFjO1lBQ0gseUJBQWdCO09BZGpDLG1CQUFtQixDQTZEL0I7SUFBRCwwQkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlzaGRldGFpbCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYXZnc3RhcnM6IHN0cmluZztcbiAgbnVtY29tbWVudHM6IG51bWJlcjtcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGlzaDogRGlzaDtcbiAgY29tbWVudDogQ29tbWVudDtcbiAgZXJyTWVzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgQEluamVjdCgnYmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTFxuICApIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLnBpcGUoc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoKHBhcmFtc1snaWQnXSkpKVxuICAgICAgLnN1YnNjcmliZShkaXNoID0+IHtcbiAgICAgICAgdGhpcy5kaXNoID0gZGlzaDtcbiAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XG5cbiAgICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcbiAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgfSxcbiAgICAgIGVycm1lc3MgPT4geyB0aGlzLmRpc2ggPSBudWxsOyB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3M7IH0pO1xuICB9XG5cbiAgYWRkVG9GYXZvcml0ZXMoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuZmF2b3JpdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgdG8gRmF2b3JpdGVzJywgdGhpcy5kaXNoLmlkKTtcbiAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xuICAgICAgVG9hc3QubWFrZVRleHQoXCJBZGRlZCBEaXNoIFwiICsgdGhpcy5kaXNoLmlkKS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgZ29CYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cblxuICBkaXNoQWN0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiRGlzaCBBY3Rpb25zXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIGFjdGlvbnM6IFtcIkFkZCB0byBGYXZvcml0ZXNcIiwgXCJBZGQgQ29tbWVudFwiXVxuICAgIH07XG5cbiAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKFwiQWRkIHRvIEZhdm9yaXRlc1wiID09PSByZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmFkZFRvRmF2b3JpdGVzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19