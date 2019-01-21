"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(baseURL) {
        this.baseURL = baseURL;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactInfo = "\n121, Clear Water Bay Road\nClear Water Bay, Kowloon\n" +
            "HONG KONG\nTel: +852 1234 5678\nFax: +852 8765 4321\nEmail:confusion@food.net";
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html'
        }),
        __param(0, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [Object])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQU8xRDtJQUtFLDBCQUF1QyxPQUFPO1FBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFJLENBQUM7SUFFbkQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcseURBQXlEO1lBQzFFLCtFQUErRSxDQUFBO0lBQ25GLENBQUM7SUFWVSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7UUFNYSxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7T0FMbkIsZ0JBQWdCLENBWTVCO0lBQUQsdUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb250YWN0JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnRhY3RJbmZvOiBzdHJpbmc7XG4gIGVyck1lc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnRhY3RJbmZvID0gXCJcXG4xMjEsIENsZWFyIFdhdGVyIEJheSBSb2FkXFxuQ2xlYXIgV2F0ZXIgQmF5LCBLb3dsb29uXFxuXCIgK1xuICAgICAgXCJIT05HIEtPTkdcXG5UZWw6ICs4NTIgMTIzNCA1Njc4XFxuRmF4OiArODUyIDg3NjUgNDMyMVxcbkVtYWlsOmNvbmZ1c2lvbkBmb29kLm5ldFwiXG4gIH1cblxufVxuIl19