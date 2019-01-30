"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var app = require("application");
var animation_1 = require("ui/animation");
var enums = require("ui/enums");
var reservation_service_1 = require("../services/reservation.service");
var page_1 = require("ui/page");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(reservationservice, formBuilder, modalService, vcRef, page) {
        this.reservationservice = reservationservice;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.page = page;
        this.formSubmitted = false;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(JSON.stringify(this.reservation.value));
        this.content = this.page.getViewById("reservation");
        this.animateInOut(this.content, 0, 0, 0.5).then(function () {
            _this.formSubmitted = _this.reservationservice.addReservation(_this.reservation.value);
            _this.animateInOut(_this.content, 1, 1, 1).then(function () {
            }).catch(function (e) {
                console.log(e.message);
            });
        }).catch(function (e) {
            console.log(e.message);
        });
    };
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this.modalService.showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === "guest") {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === "date-time") {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
    };
    ReservationComponent.prototype.animateInOut = function (view, x, y, opacity) {
        var definitions = new Array();
        var animation = {
            target: view,
            scale: { x: x, y: y },
            opacity: opacity,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(animation);
        var animationSet = new animation_1.Animation(definitions);
        return animationSet.play();
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html',
        }),
        __metadata("design:paramtypes", [reservation_service_1.ReservationService,
            forms_1.FormBuilder,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            page_1.Page])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBR3BFLHdDQUFtRTtBQUNuRSxrRUFBMkY7QUFDM0YsNkZBQTJGO0FBQzNGLGlDQUFtQztBQUduQywwQ0FBOEQ7QUFDOUQsZ0NBQWtDO0FBQ2xDLHVFQUFxRTtBQUNyRSxnQ0FBK0I7QUFPL0I7SUFNRSw4QkFDVSxrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDdkIsSUFBVTtRQUpWLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQU07UUFQcEIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFVN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENB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LEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTTtTQUNuQyxDQUFDO1FBRUYsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLFlBQVksR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXBHUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDNUMsQ0FBQzt5Q0FROEIsd0NBQWtCO1lBQ3pCLG1CQUFXO1lBQ1YsaUNBQWtCO1lBQ3pCLHVCQUFnQjtZQUNqQixXQUFJO09BWFQsb0JBQW9CLENBcUdoQztJQUFELDJCQUFDO0NBQUEsQUFyR0QsSUFxR0M7QUFyR1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9yZXNlcnZhdGlvbm1vZGFsL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcbmltcG9ydCB7IFJlc2VydmF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Jlc2VydmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVzZXJ2YXRpb24nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzZXJ2YXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcmVzZXJ2YXRpb246IEZvcm1Hcm91cDtcbiAgY29udGVudDogVmlldztcbiAgZm9ybVN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzZXJ2YXRpb25zZXJ2aWNlOiBSZXNlcnZhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxuICApIHtcblxuICAgIHRoaXMucmVzZXJ2YXRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGd1ZXN0czogMyxcbiAgICAgIHNtb2tpbmc6IGZhbHNlLFxuICAgICAgZGF0ZVRpbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBvblNtb2tpbmdDaGVja2VkKGFyZ3MpIHtcbiAgICBsZXQgc21va2luZ1N3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XG4gICAgaWYoc21va2luZ1N3aXRjaC5jaGVja2VkKSB7XG4gICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvbkd1ZXN0Q2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcblxuICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGd1ZXN0czogdGV4dEZpZWxkLnRleHQgfSk7XG4gIH1cblxuICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcblxuICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiB0ZXh0RmllbGQudGV4dCB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzZXJ2YXRpb24udmFsdWUpKTtcbiAgICB0aGlzLmNvbnRlbnQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJyZXNlcnZhdGlvblwiKTtcbiAgICB0aGlzLmFuaW1hdGVJbk91dCh0aGlzLmNvbnRlbnQsIDAsIDAgLCAwLjUpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5mb3JtU3VibWl0dGVkID0gdGhpcy5yZXNlcnZhdGlvbnNlcnZpY2UuYWRkUmVzZXJ2YXRpb24odGhpcy5yZXNlcnZhdGlvbi52YWx1ZSk7XG4gICAgICB0aGlzLmFuaW1hdGVJbk91dCh0aGlzLmNvbnRlbnQsIDEsIDEsIDEpLnRoZW4oKCkgPT4ge1xuXG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1vZGFsVmlldyhhcmdzKSB7XG5cbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiBhcmdzLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzID09PSBcImd1ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHtndWVzdHM6IHJlc3VsdH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSBcImRhdGUtdGltZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiByZXN1bHR9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGFuaW1hdGVJbk91dCh2aWV3OiBWaWV3LCB4OiBudW1iZXIsIHk6IG51bWJlciwgb3BhY2l0eTpudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgICBsZXQgYW5pbWF0aW9uOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHZpZXcsXG4gICAgICAgIHNjYWxlOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgICAgfTtcblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuXG4gICAgICByZXR1cm4gYW5pbWF0aW9uU2V0LnBsYXkoKTtcbiAgICB9XG59XG4iXX0=