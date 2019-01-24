"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(formBuilder, params) {
        this.formBuilder = formBuilder;
        this.params = params;
        this.commentForm = this.formBuilder.group({
            author: ['', forms_1.Validators.required],
            rating: 5,
            comment: ['', forms_1.Validators.required]
        });
    }
    CommentComponent.prototype.ngOnInit = function () { };
    CommentComponent.prototype.onAuthorChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ author: textField.text });
    };
    CommentComponent.prototype.onRatingChange = function (args) {
        var slider = args.object;
        this.commentForm.patchValue({ rating: slider.value });
    };
    CommentComponent.prototype.onCommentChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ comment: textField.text });
    };
    CommentComponent.prototype.onSubmit = function () {
        this.newComment = this.commentForm.value;
        var date = new Date();
        this.newComment.date = date.toISOString();
        console.log(this.newComment);
        this.params.closeCallback(this.newComment);
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'app-comment',
            moduleId: module.id,
            templateUrl: './comment.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            modal_dialog_1.ModalDialogParams])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx3Q0FBbUU7QUFJbkUsa0VBQXNFO0FBT3RFO0lBS0ksMEJBQW9CLFdBQXdCLEVBQ2hDLE1BQXlCO1FBRGpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUVOLHlDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDdEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSwwQ0FBZSxHQUF0QixVQUF1QixJQUFJO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBckNRLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FNbUMsbUJBQVc7WUFDeEIsZ0NBQWlCO09BTjVCLGdCQUFnQixDQXNDNUI7SUFBRCx1QkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICd1aS9zbGlkZXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jb21tZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21tZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21tZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG5ld0NvbW1lbnQ6IENvbW1lbnQ7XG4gICAgY29tbWVudEZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICAgICBhdXRob3I6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA1LFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIHB1YmxpYyBvbkF1dGhvckNoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLnBhdGNoVmFsdWUoeyBhdXRob3I6IHRleHRGaWVsZC50ZXh0IH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJhdGluZ0NoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCBzbGlkZXIgPSA8U2xpZGVyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLnBhdGNoVmFsdWUoeyByYXRpbmc6IHNsaWRlci52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Db21tZW50Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IGNvbW1lbnQ6IHRleHRGaWVsZC50ZXh0IH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPSB0aGlzLmNvbW1lbnRGb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5uZXdDb21tZW50LmRhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3Q29tbWVudCk7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5uZXdDb21tZW50KTtcbiAgICB9XG59XG4iXX0=