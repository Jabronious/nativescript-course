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
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var comment_component_1 = require("../comment/comment.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var color_1 = require("color");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(favoriteservice, fonticon, dishservice, route, routerExtensions, modalService, vcRef, page, baseURL) {
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.dishservice = dishservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.page = page;
        this.baseURL = baseURL;
        this.favorite = false;
        this.showComments = false;
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
    DishdetailComponent.prototype.onSwipe = function (args) {
        if (this.dish) {
            this.cardImage = this.page.getViewById("cardImage");
            this.cardLayout = this.page.getViewById("cardLayout");
            this.commentList = this.page.getViewById("commentList");
            if (args.direction === gestures_1.SwipeDirection.up && !this.showComments) {
                this.animateUp();
            }
            else if (args.direction === gestures_1.SwipeDirection.down && this.showComments) {
                this.showComments = false;
                this.animateDown();
            }
        }
    };
    DishdetailComponent.prototype.showAndHideComments = function () {
        this.cardImage = this.page.getViewById("cardImage");
        this.cardLayout = this.page.getViewById("cardLayout");
        this.commentList = this.page.getViewById("commentList");
        if (!this.showComments) {
            this.animateUp();
        }
        else if (this.showComments) {
            this.showComments = false;
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.animateUp = function () {
        var _this = this;
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 0 },
            translate: { x: 0, y: -200 },
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffc107"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            _this.showComments = true;
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent.prototype.animateDown = function () {
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffffff"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
        })
            .catch(function (e) {
            console.log(e.message);
        });
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
    DishdetailComponent.prototype.createAction = function () {
        var _this = this;
        var options = {
            title: "Dish Actions",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add comment"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result === "Add to Favorites") {
                _this.addToFavorites();
            }
            else {
                console.log('Adding comment');
                _this.createModalView();
            }
        });
    };
    DishdetailComponent.prototype.createModalView = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(comment_component_1.CommentComponent, options)
            .then(function (result) {
            _this.dish.comments.push(result);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        });
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
        }),
        __param(8, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            page_1.Page, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCw0Q0FBMkM7QUFDM0MsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwwQ0FBNEM7QUFDNUMsc0NBQW9DO0FBQ3BDLGtFQUEyRjtBQUMzRixrRUFBZ0U7QUFDaEUsZ0NBQStCO0FBRS9CLDBDQUE4RDtBQUM5RCwrQkFBOEI7QUFDOUIsd0NBQW9FO0FBQ3BFLGdDQUFrQztBQU9sQztJQWFFLDZCQUNVLGVBQWdDLEVBQ2hDLFFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxZQUFnQyxFQUNoQyxLQUF1QixFQUN2QixJQUFVLEVBQ1MsT0FBTztRQVIxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNTLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFsQnBDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFJMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFlekIsQ0FBQztJQUVOLHNDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNkLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxD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QUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQTVLVSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQztRQXVCRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FSTyxrQ0FBZTtZQUN0Qiw4Q0FBa0I7WUFDZiwwQkFBVztZQUNqQix1QkFBYztZQUNILHlCQUFnQjtZQUNwQixpQ0FBa0I7WUFDekIsdUJBQWdCO1lBQ2pCLFdBQUk7T0FyQlQsbUJBQW1CLENBNksvQjtJQUFELDBCQUFDO0NBQUEsQUE3S0QsSUE2S0M7QUE3S1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaXNoZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhdmdzdGFyczogc3RyaW5nO1xuICBudW1jb21tZW50czogbnVtYmVyO1xuICBmYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBkaXNoOiBEaXNoO1xuICBjb21tZW50OiBDb21tZW50O1xuICBlcnJNZXNzOiBzdHJpbmc7XG4gIHNob3dDb21tZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICBjYXJkSW1hZ2U6IFZpZXc7XG4gIGNvbW1lbnRMaXN0OiBWaWV3O1xuICBjYXJkTGF5b3V0OiBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMXG4gICkgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddKSkpXG4gICAgICAuc3Vic2NyaWJlKGRpc2ggPT4ge1xuICAgICAgICB0aGlzLmRpc2ggPSBkaXNoO1xuICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xuICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcblxuICAgICAgICBsZXQgdG90YWwgPSAwXG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xuICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XG4gICAgICB9LFxuICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XG4gIH1cblxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGlmICh0aGlzLmRpc2gpIHtcbiAgICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZEltYWdlXCIpO1xuICAgICAgdGhpcy5jYXJkTGF5b3V0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZExheW91dFwiKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcblxuICAgICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi51cCAmJiAhdGhpcy5zaG93Q29tbWVudHMgKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24uZG93biAmJiB0aGlzLnNob3dDb21tZW50cyApIHtcbiAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgc2hvd0FuZEhpZGVDb21tZW50cygpIHtcbiAgICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZEltYWdlXCIpO1xuICAgICAgdGhpcy5jYXJkTGF5b3V0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZExheW91dFwiKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcblxuICAgICAgaWYgKCF0aGlzLnNob3dDb21tZW50cyApIHtcbiAgICAgICAgdGhpcy5hbmltYXRlVXAoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd0NvbW1lbnRzICkge1xuICAgICAgICB0aGlzLnNob3dDb21tZW50cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEb3duKCk7XG4gICAgICB9XG4gIH1cblxuICBhbmltYXRlVXAoKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZEltYWdlLFxuICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMjAwIH0sXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZExheW91dCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZjMTA3XCIpLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcblxuICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNob3dDb21tZW50cyA9IHRydWU7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGVEb3duKCkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcblxuICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI2ZmZmZmZlwiKSxcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG5cbiAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb0Zhdm9yaXRlcygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5mYXZvcml0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLmRpc2guaWQpO1xuICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmFkZEZhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XG4gICAgICBUb2FzdC5tYWtlVGV4dChcIkFkZGVkIERpc2ggXCIgKyB0aGlzLmRpc2guaWQpLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgfVxuXG4gIGNyZWF0ZUFjdGlvbigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiBcIkRpc2ggQWN0aW9uc1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgIGFjdGlvbnM6IFtcIkFkZCB0byBGYXZvcml0ZXNcIiwgXCJBZGQgY29tbWVudFwiXVxuICAgIH07XG4gICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiQWRkIHRvIEZhdm9yaXRlc1wiKSB7XG4gICAgICAgIHRoaXMuYWRkVG9GYXZvcml0ZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgY29tbWVudCcpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsVmlldygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTW9kYWxWaWV3KCkge1xuICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzdWx0OiBDb21tZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKChjb21tZW50OiBDb21tZW50KSA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgICB9KTtcbiAgfVxufVxuIl19