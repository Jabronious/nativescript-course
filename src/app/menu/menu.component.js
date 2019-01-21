"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, baseURL) {
        this.dishService = dishService;
        this.baseURL = baseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './menu.component.html'
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, Object])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFPdkQ7SUFLRSx1QkFBb0IsV0FBd0IsRUFDZixPQUFPO1FBRGhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFJLENBQUM7SUFFekMsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7YUFDekIsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLEVBQ3ZDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBWlUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQztRQU9HLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURhLDBCQUFXO09BTGpDLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lbnUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzaGVzOiBEaXNoW107XG4gIGVyck1lc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hTZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc2hTZXJ2aWNlLmdldERpc2hlcygpXG4gICAgICAuc3Vic2NyaWJlKGRpc2hlcyA9PiB0aGlzLmRpc2hlcyA9IGRpc2hlcyxcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICB9XG5cbn1cbiJdfQ==