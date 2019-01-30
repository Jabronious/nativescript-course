"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var camera = require("nativescript-camera");
var app = require("application");
var UserAuthComponent = /** @class */ (function () {
    function UserAuthComponent(page, routerExtensions, formBuilder) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.tabSelectedIndex = 0;
        this.loginForm = this.formBuilder.group({
            userName: [application_settings_1.getString('userName', ''), forms_1.Validators.required],
            password: [application_settings_1.getString('password', ''), forms_1.Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            telnum: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    UserAuthComponent.prototype.ngOnInit = function () {
    };
    UserAuthComponent.prototype.takePicture = function () {
        var _this = this;
        var isAvailable = camera.isAvailable();
        if (isAvailable) {
            camera.requestPermissions();
            var options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: true };
            camera.takePicture(options)
                .then(function (imageAsset) {
                var image = _this.page.getViewById('myPicture');
                image.src = imageAsset;
            })
                .catch(function (err) { return console.log('Error -> ' + err.message); });
        }
    };
    UserAuthComponent.prototype.register = function () {
        this.tabSelectedIndex = 1;
    };
    UserAuthComponent.prototype.onLoginSubmit = function () {
        console.log(JSON.stringify(this.loginForm.value));
        application_settings_1.setString("userName", this.loginForm.get('userName').value);
        application_settings_1.setString("password", this.loginForm.get('password').value);
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    UserAuthComponent.prototype.onRegisterSubmit = function () {
        console.log(JSON.stringify(this.registerForm.value));
        application_settings_1.setString("userName", this.registerForm.get('userName').value);
        application_settings_1.setString("password", this.registerForm.get('password').value);
        this.loginForm.patchValue({
            'userName': this.registerForm.get('userName').value,
            'password': this.registerForm.get('password').value
        });
        this.tabSelectedIndex = 0;
    };
    UserAuthComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './userauth.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmF1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQix3Q0FBb0U7QUFDcEUsNkRBQTREO0FBQzVELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFFOUMsaUNBQW1DO0FBT25DO0lBTUksMkJBQW9CLElBQVUsRUFDbEIsZ0JBQWtDLEVBQ2xDLFdBQXdCO1FBRmhCLFNBQUksR0FBSixJQUFJLENBQU07UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFNekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUMxRCxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUM3RCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUs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QjtTQUMzQyxDQUFDO3lDQU80QixXQUFJO1lBQ0EseUJBQWdCO1lBQ3JCLG1CQUFXO09BUjNCLGlCQUFpQixDQTRFN0I7SUFBRCx3QkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndWkvaW1hZ2UnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyYXV0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gICAgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB1c2VyTmFtZTogW2dldFN0cmluZygndXNlck5hbWUnLCAnJyksIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFtnZXRTdHJpbmcoJ3Bhc3N3b3JkJywgJycpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICB1c2VyTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgdGVsbnVtOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIHRha2VQaWN0dXJlKCkge1xuICAgICAgICBsZXQgaXNBdmFpbGFibGUgPSBjYW1lcmEuaXNBdmFpbGFibGUoKTtcbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGtlZXBBc3BlY3RSYXRpbzogZmFsc2UsIHNhdmVUb0dhbGxlcnk6IHRydWV9O1xuXG4gICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSA8SW1hZ2U+dGhpcy5wYWdlLmdldFZpZXdCeUlkPEltYWdlPignbXlQaWN0dXJlJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ0Vycm9yIC0+ICcgKyBlcnIubWVzc2FnZSkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcbiAgICB9XG5cbiAgICBvbkxvZ2luU3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRm9ybS52YWx1ZSkpO1xuXG4gICAgICAgIHNldFN0cmluZyhcInVzZXJOYW1lXCIsIHRoaXMubG9naW5Gb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSk7XG4gICAgICAgIHNldFN0cmluZyhcInBhc3N3b3JkXCIsIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIG9uUmVnaXN0ZXJTdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlKSk7XG5cbiAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwgdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCd1c2VyTmFtZScpLnZhbHVlKTtcbiAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmxvZ2luRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IHRoaXMucmVnaXN0ZXJGb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IHRoaXMucmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZX0pO1xuXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==