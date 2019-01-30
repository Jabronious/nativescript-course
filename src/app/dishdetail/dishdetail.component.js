"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var favorite_service_1 = require("../services/favorite.service");
var Toast = require("nativescript-toast");
var dialogs_1 = require("ui/dialogs");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var comment_component_1 = require("../comment/comment.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var color_1 = require("color");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var SocialShare = require("nativescript-social-share");
var image_source_1 = require("image-source");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(favoriteservice, dishservice, route, routerExtensions, modalService, vcRef, page, baseURL) {
        this.favoriteservice = favoriteservice;
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
    DishdetailComponent.prototype.socialShare = function () {
        var image;
        image_source_1.fromUrl(this.baseURL + this.dish.image)
            .then(function (img) {
            image = img;
            SocialShare.shareImage(image, "How would you like to share this image?");
        }).catch(function () { console.log('Error loading image'); });
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
            actions: ["Add to Favorites", "Add comment", "Social Sharing"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result === "Add to Favorites") {
                _this.addToFavorites();
            }
            else if (result === "Social Sharing") {
                _this.socialShare();
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
        __param(7, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCw0Q0FBMkM7QUFDM0MsaUVBQStEO0FBQy9ELDBDQUE0QztBQUM1QyxzQ0FBb0M7QUFDcEMsa0VBQTJGO0FBQzNGLGtFQUFnRTtBQUNoRSxnQ0FBK0I7QUFFL0IsMENBQThEO0FBQzlELCtCQUE4QjtBQUM5Qix3Q0FBb0U7QUFDcEUsZ0NBQWtDO0FBQ2xDLHVEQUF5RDtBQUN6RCw2Q0FBb0Q7QUFPcEQ7SUFhRSw2QkFDVSxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDdkIsSUFBVSxFQUNTLE9BQU87UUFQMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQU07UUFDUyxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBakJwQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBSTFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBY3pCLENBQUM7SUFFTixzQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF0QyxD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QixFQUFFLE9BQU8sQ0FBQzthQUNqRCxJQUFJLENBQUMsVUFBQyxNQUFlO1lBQ3BCLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM3QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFnQixJQUFLLE9BQUEsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQXZCLENBQXVCLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxHQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBdkxVLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDO1FBc0JHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQVBPLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2pCLHVCQUFjO1lBQ0gseUJBQWdCO1lBQ3BCLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDakIsV0FBSTtPQXBCVCxtQkFBbUIsQ0F3TC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXhMRCxJQXdMQztBQXhMWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21tZW50JztcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tICduYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlJztcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tVXJsIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlzaGRldGFpbCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYXZnc3RhcnM6IHN0cmluZztcbiAgbnVtY29tbWVudHM6IG51bWJlcjtcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGlzaDogRGlzaDtcbiAgY29tbWVudDogQ29tbWVudDtcbiAgZXJyTWVzczogc3RyaW5nO1xuICBzaG93Q29tbWVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2FyZEltYWdlOiBWaWV3O1xuICBjb21tZW50TGlzdDogVmlldztcbiAgY2FyZExheW91dDogVmlldztcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSxcbiAgICBwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMXG4gICkgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddKSkpXG4gICAgICAuc3Vic2NyaWJlKGRpc2ggPT4ge1xuICAgICAgICB0aGlzLmRpc2ggPSBkaXNoO1xuICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xuICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcblxuICAgICAgICBsZXQgdG90YWwgPSAwXG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xuICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XG4gICAgICB9LFxuICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XG4gIH1cblxuICBzb2NpYWxTaGFyZSgpIHtcbiAgICAgIGxldCBpbWFnZTogSW1hZ2VTb3VyY2U7XG5cbiAgICAgIGZyb21VcmwodGhpcy5iYXNlVVJMICsgdGhpcy5kaXNoLmltYWdlKVxuICAgICAgICAudGhlbigoaW1nOiBJbWFnZVNvdXJjZSkgPT4ge1xuICAgICAgICAgIGltYWdlID0gaW1nO1xuICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UsIFwiSG93IHdvdWxkIHlvdSBsaWtlIHRvIHNoYXJlIHRoaXMgaW1hZ2U/XCIpXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHsgY29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgaW1hZ2UnKTsgfSk7XG4gIH1cblxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGlmICh0aGlzLmRpc2gpIHtcbiAgICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZEltYWdlXCIpO1xuICAgICAgdGhpcy5jYXJkTGF5b3V0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZExheW91dFwiKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcblxuICAgICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi51cCAmJiAhdGhpcy5zaG93Q29tbWVudHMgKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24uZG93biAmJiB0aGlzLnNob3dDb21tZW50cyApIHtcbiAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgc2hvd0FuZEhpZGVDb21tZW50cygpIHtcbiAgICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZEltYWdlXCIpO1xuICAgICAgdGhpcy5jYXJkTGF5b3V0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZExheW91dFwiKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcblxuICAgICAgaWYgKCF0aGlzLnNob3dDb21tZW50cyApIHtcbiAgICAgICAgdGhpcy5hbmltYXRlVXAoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd0NvbW1lbnRzICkge1xuICAgICAgICB0aGlzLnNob3dDb21tZW50cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEb3duKCk7XG4gICAgICB9XG4gIH1cblxuICBhbmltYXRlVXAoKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZEltYWdlLFxuICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMjAwIH0sXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZExheW91dCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZjMTA3XCIpLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcblxuICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNob3dDb21tZW50cyA9IHRydWU7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGVEb3duKCkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcblxuICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI2ZmZmZmZlwiKSxcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG5cbiAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb0Zhdm9yaXRlcygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5mYXZvcml0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLmRpc2guaWQpO1xuICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmFkZEZhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XG4gICAgICBUb2FzdC5tYWtlVGV4dChcIkFkZGVkIERpc2ggXCIgKyB0aGlzLmRpc2guaWQpLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgfVxuXG4gIGNyZWF0ZUFjdGlvbigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiBcIkRpc2ggQWN0aW9uc1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgIGFjdGlvbnM6IFtcIkFkZCB0byBGYXZvcml0ZXNcIiwgXCJBZGQgY29tbWVudFwiLCBcIlNvY2lhbCBTaGFyaW5nXCJdXG4gICAgfTtcbiAgICBhY3Rpb24ob3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBZGQgdG8gRmF2b3JpdGVzXCIpIHtcbiAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xuICAgICAgfSBlbHNlIGlmKHJlc3VsdCA9PT0gXCJTb2NpYWwgU2hhcmluZ1wiKSB7XG4gICAgICAgIHRoaXMuc29jaWFsU2hhcmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgY29tbWVudCcpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsVmlldygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTW9kYWxWaWV3KCkge1xuICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzdWx0OiBDb21tZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKChjb21tZW50OiBDb21tZW50KSA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgICB9KTtcbiAgfVxufVxuIl19