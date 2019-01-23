"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-ui-listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("ui/dialogs");
var Toast = require("nativescript-toast");
var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteservice, baseURL) {
        this.favoriteservice = favoriteservice;
        this.baseURL = baseURL;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = new observable_array_1.ObservableArray(favorites); }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        console.log("Delete", id);
        var options = {
            title: "Confirm Delete",
            message: "Do you want to delete Dish " + id,
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result) {
                _this.favorites = null;
                _this.favoriteservice.deleteFavorite(id)
                    .subscribe(function (favorites) {
                    var toast = Toast.makeText("Deleted Dish " + id).show();
                    _this.favorites = new observable_array_1.ObservableArray(favorites);
                }, function (errmess) { return _this.errMess = errmess; });
            }
            else {
                console.log('Delete cancelled');
            }
        });
    };
    FavoritesComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x > 200) {
        }
        else if (args.data.x < -200) {
        }
    };
    FavoritesComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FavoritesComponent.prototype.onSwipeCellFinished = function (args) {
    };
    FavoritesComponent.prototype.onLeftSwipeClick = function (args) {
        console.log('Left swipe click');
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    FavoritesComponent.prototype.onRightSwipeClick = function (args) {
        this.deleteFavorite(args.object.bindingContext.id);
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FavoritesComponent.prototype, "listViewComponent", void 0);
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            moduleId: module.id,
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService, Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUVBQStEO0FBRy9ELDREQUF3RTtBQUN4RSwyRUFBeUU7QUFFekUsc0NBQXFDO0FBQ3JDLDBDQUE0QztBQVE1QztJQU9JLDRCQUFvQixlQUFnQyxFQUNyQixPQUFPO1FBRGxCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTthQUM5QixTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsRUFBL0MsQ0FBK0MsRUFDbkUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkEwQkM7UUF6QkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUIsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE9BQU8sRUFBRSw2QkFBNkIsR0FBRyxFQUFFO1lBQzNDLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtTQUM1QixDQUFDO1FBRUYsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFlO1lBQ2xDLElBQUcsTUFBTSxFQUFFO2dCQUNULEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUV0QixLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7cUJBQ2xDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7b0JBQ2xCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN6RCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUNELFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQzthQUN4QztpQkFDSTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwwQ0FBYSxHQUFwQixVQUFxQixJQUF1QjtRQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksV0FBVyxDQUFDO1FBRWhCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO1NBRXJCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtTQUU1QjtJQUNMLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsSUFBdUI7UUFDN0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQU8sV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBTyxhQUFhLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9DLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGdEQUFtQixHQUExQixVQUEyQixJQUF1QjtJQUVsRCxDQUFDO0lBRU0sNkNBQWdCLEdBQXZCLFVBQXdCLElBQXVCO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVNLDhDQUFpQixHQUF4QixVQUF5QixJQUF1QjtRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBNUV3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsOEJBQW9CO2lFQUFDO0lBTHhELGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQztRQVNPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURlLGtDQUFlO09BUDNDLGtCQUFrQixDQWtGOUI7SUFBRCx5QkFBQztDQUFBLEFBbEZELElBa0ZDO0FBbEZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tICd1aS9kaWFsb2dzJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZmF2b3JpdGVzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mYXZvcml0ZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZhdm9yaXRlczogT2JzZXJ2YWJsZUFycmF5PERpc2g+O1xuICAgIGVyck1lc3M6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ215TGlzdFZpZXcnKSBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmdldEZhdm9yaXRlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZhdm9yaXRlcyA9PiB0aGlzLmZhdm9yaXRlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoZmF2b3JpdGVzKSxcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xuICAgIH1cblxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlXCIsIGlkKTtcblxuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gRGVsZXRlXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIERpc2ggXCIgKyBpZCxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICB9O1xuXG4gICAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlc2VydmljZS5kZWxldGVGYXZvcml0ZShpZClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZhdm9yaXRlcyA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0b2FzdCA9IFRvYXN0Lm1ha2VUZXh0KFwiRGVsZXRlZCBEaXNoIFwiKyBpZCkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGUgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICB2YXIgY3VycmVudEl0ZW1WaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIHZhciBjdXJyZW50VmlldztcblxuICAgICAgICBpZihhcmdzLmRhdGEueCA+IDIwMCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICB2YXIgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG5cbiAgICAgICAgdmFyIGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdtYXJrLXZpZXcnKTtcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignZGVsZXRlLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkvMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Td2lwZUNlbGxGaW5pc2hlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgc3dpcGUgY2xpY2snKTtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlRmF2b3JpdGUoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuaWQpO1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgICB9XG59XG4iXX0=