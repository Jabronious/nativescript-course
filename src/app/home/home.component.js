"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, page, fonticon, baseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.page = page;
        this.fonticon = fonticon;
        this.baseURL = baseURL;
        this.showLeftCard = true;
        this.showMiddleCard = false;
        this.showRightCard = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent.prototype.onSwipe = function (args) {
        if (args.direction === gestures_1.SwipeDirection.left) {
            this.animateLeft();
        }
        else if (args.direction === gestures_1.SwipeDirection.right) {
            this.animateRight();
        }
    };
    HomeComponent.prototype.animateLeft = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById('leftCard');
            this.middleCard = this.page.getViewById('middleCard');
            this.rightCard = this.page.getViewById('rightCard');
            if (this.showLeftCard) {
                this.rightCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.leftCard.animate({
                    translate: { x: 2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.middleCard.animate({
                    translate: { x: 2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500
                        });
                    });
                });
            }
        }
    };
    HomeComponent.prototype.animateRight = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById('leftCard');
            this.middleCard = this.page.getViewById('middleCard');
            this.rightCard = this.page.getViewById('rightCard');
            if (this.showLeftCard) {
                this.middleCard.animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.rightCard.animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.leftCard.animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500
                        });
                    });
                });
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html'
        }),
        __param(5, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService,
            page_1.Page,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCx1RUFBK0Q7QUFDL0QsZ0NBQStCO0FBRS9CLHdDQUFvRTtBQUNwRSxnQ0FBa0M7QUFPbEM7SUFnQkUsdUJBQ1UsV0FBd0IsRUFDeEIsZ0JBQWtDLEVBQ2xDLGFBQTRCLEVBQzVCLElBQVUsRUFDVixRQUE0QixFQUNULE9BQU87UUFMMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBZHBDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBWVMsQ0FBQztJQUV2QyxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFDakMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFRLE9BQU8sRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRTthQUN6QyxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBMUIsQ0FBMEIsRUFDaEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLE9BQU8sRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7YUFDbkMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLEVBQ3ZDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBUSxPQUFPLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyx5QkFBYyxDQUFDLElBQUksRUFBRTtZQUMxQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUsseUJBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFBQSxpQkF1RUM7UUF0RUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFPLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQU8sWUFBWSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBTyxXQUFXLENBQUMsQ0FBQztZQUUzRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUc7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO29CQUNyQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7aUJBQzdCLENBQUM7cUJBQ0QsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUNwQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDN0IsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzFCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTO3lCQUN0QyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUc7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUNwQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzVCLFFBQVEsRUFBRSxHQUFHO2lCQUNkLENBQUM7cUJBQ0QsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO3dCQUN0QixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDN0IsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7d0JBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzs0QkFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTO3lCQUN0QyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUc7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUN0QixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzVCLFFBQVEsRUFBRSxHQUFHO2lCQUNkLENBQUM7cUJBQ0QsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO3dCQUNyQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDN0IsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDcEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzt5QkFDZCxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFBQSxpQkF5RUQ7UUF2RUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFPLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQU8sWUFBWSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBTyxXQUFXLENBQUMsQ0FBQztZQUUzRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUc7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUN0QixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDN0IsUUFBUSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQztxQkFDRCxJQUFJLENBQUM7b0JBQ0osS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQ3BCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDNUIsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzs0QkFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTO3lCQUN0QyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUc7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO29CQUNyQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDN0IsUUFBUSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQztxQkFDRCxJQUFJLENBQUM7b0JBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDNUIsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7d0JBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDcEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTO3lCQUN0QyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUc7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUNwQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDN0IsUUFBUSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQztxQkFDRCxJQUFJLENBQUM7b0JBQ0osS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7d0JBQ3JCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDNUIsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzt5QkFDZCxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQS9MVSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUNyQyxDQUFDO1FBdUJHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUxHLDBCQUFXO1lBQ04sb0NBQWdCO1lBQ25CLDhCQUFhO1lBQ3RCLFdBQUk7WUFDQSw4Q0FBa0I7T0FyQjNCLGFBQWEsQ0FnTXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhNRCxJQWdNQztBQWhNWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzaDogRGlzaDtcbiAgcHJvbW90aW9uOiBQcm9tb3Rpb247XG4gIGxlYWRlcjogTGVhZGVyO1xuICBkaXNoRXJyTWVzczogc3RyaW5nO1xuICBwcm9tb0Vyck1lc3M6IHN0cmluZztcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xuICBzaG93TGVmdENhcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBzaG93TWlkZGxlQ2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93UmlnaHRDYXJkOiBib29sZWFuID0gZmFsc2U7XG4gIGxlZnRDYXJkOiBWaWV3O1xuICBtaWRkbGVDYXJkOiBWaWV3O1xuICByaWdodENhcmQ6IFZpZXc7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIHByb21vdGlvbnNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsZWFkZXJzZXJ2aWNlOiBMZWFkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgQEluamVjdCgnYmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RmVhdHVyZWREaXNoKClcbiAgICAgICAgLnN1YnNjcmliZShkaXNoID0+IHRoaXMuZGlzaCA9IGRpc2gsXG4gICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcbiAgICAgIHRoaXMucHJvbW90aW9uc2VydmljZS5nZXRGZWF0dXJlZFByb21vdGlvbigpXG4gICAgICAgIC5zdWJzY3JpYmUocHJvbW90aW9uID0+IHRoaXMucHJvbW90aW9uID0gcHJvbW90aW9uLFxuICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5wcm9tb0Vyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgICAgdGhpcy5sZWFkZXJzZXJ2aWNlLmdldEZlYXR1cmVkTGVhZGVyKClcbiAgICAgICAgLnN1YnNjcmliZShsZWFkZXIgPT4gdGhpcy5sZWFkZXIgPSBsZWFkZXIsXG4gICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmxlYWRlckVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgIH1cblxuICAgIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLmxlZnQpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlTGVmdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnJpZ2h0KSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZUxlZnQoKSB7XG4gICAgICBpZiAodGhpcy5kaXNoICYmIHRoaXMucHJvbW90aW9uICYmIHRoaXMubGVhZGVyKSB7XG4gICAgICAgIHRoaXMubGVmdENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2xlZnRDYXJkJyk7XG4gICAgICAgIHRoaXMubWlkZGxlQ2FyZCAgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21pZGRsZUNhcmQnKTtcbiAgICAgICAgdGhpcy5yaWdodENhcmQgID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdyaWdodENhcmQnKTtcblxuICAgICAgICBpZiggdGhpcy5zaG93TGVmdENhcmQgKSB7XG4gICAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIHRoaXMuc2hvd01pZGRsZUNhcmQgKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggdGhpcy5zaG93UmlnaHRDYXJkICkge1xuICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlUmlnaHQoKSB7XG5cbiAgICBpZiAodGhpcy5kaXNoICYmIHRoaXMucHJvbW90aW9uICYmIHRoaXMubGVhZGVyKSB7XG4gICAgICB0aGlzLmxlZnRDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdsZWZ0Q2FyZCcpO1xuICAgICAgdGhpcy5taWRkbGVDYXJkICA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbWlkZGxlQ2FyZCcpO1xuICAgICAgdGhpcy5yaWdodENhcmQgID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdyaWdodENhcmQnKTtcblxuICAgICAgaWYoIHRoaXMuc2hvd0xlZnRDYXJkICkge1xuICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXG4gICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiggdGhpcy5zaG93TWlkZGxlQ2FyZCApIHtcbiAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXG4gICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCB0aGlzLnNob3dSaWdodENhcmQgKSB7XG4gICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXG4gICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==