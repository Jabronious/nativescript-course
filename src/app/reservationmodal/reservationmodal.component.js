"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var ReservationModalComponent = /** @class */ (function () {
    function ReservationModalComponent(params, page) {
        this.params = params;
        this.page = page;
        this.guestArray = [1, 2, 3, 4, 5, 6];
        this.isDateTime = false;
        if (params.context === "guest") {
            this.isDateTime = false;
        }
        else if (params.context === "date-time") {
            this.isDateTime = true;
        }
    }
    ReservationModalComponent.prototype.ngOnInit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            console.log(datePicker);
            var currentdate = new Date();
            datePicker.year = currentdate.getFullYear();
            datePicker.month = currentdate.getMonth() + 1;
            datePicker.day = currentdate.getDate();
            datePicker.minDate = currentdate;
            datePicker.maxDate = new Date(2045, 4, 12);
            var timePicker = this.timePickerElement.nativeElement;
            timePicker.hour = currentdate.getHours();
            timePicker.minute = currentdate.getMinutes();
        }
    };
    ReservationModalComponent.prototype.submit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            var selectedDate = datePicker.date;
            var timePicker = this.timePickerElement.nativeElement;
            var selectedTime = timePicker.time;
            var reserveTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
            this.params.closeCallback(reserveTime.toISOString());
        }
        else {
            var picker = this.guestPickerElement.nativeElement;
            this.params.closeCallback(this.guestArray[picker.selectedIndex]);
        }
    };
    __decorate([
        core_1.ViewChild("datePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "datePickerElement", void 0);
    __decorate([
        core_1.ViewChild("timePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "timePickerElement", void 0);
    __decorate([
        core_1.ViewChild("guestPicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "guestPickerElement", void 0);
    ReservationModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './reservationmodal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page])
    ], ReservationModalComponent);
    return ReservationModalComponent;
}());
exports.ReservationModalComponent = ReservationModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFJdEUsZ0NBQStCO0FBTS9CO0lBU0ksbUNBQW9CLE1BQXlCLEVBQ2pDLElBQVU7UUFERixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBUnRCLGVBQVUsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVFwQixJQUFHLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQ0ksSUFBRyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNULENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBRUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBRWpCLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBRTlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEIsSUFBSSxXQUFXLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxVQUFVLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDakMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTNDLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQzlFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUVNLDBDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDOUUsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLFVBQVUsR0FBMkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUM5RSxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFDekIsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsT0FBTyxFQUFFLEVBQ3RCLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDeEQ7YUFDSTtZQUNELElBQUksTUFBTSxHQUFnQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7U0FDbkU7SUFDTCxDQUFDO0lBckR3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsaUJBQVU7d0VBQUM7SUFDOUI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLGlCQUFVO3dFQUFDO0lBQzdCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFxQixpQkFBVTt5RUFBQztJQVBoRCx5QkFBeUI7UUFKckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBVThCLGdDQUFpQjtZQUMzQixXQUFJO09BVmIseUJBQXlCLENBMkRyQztJQUFELGdDQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICd1aS90aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSAndWkvbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGd1ZXN0QXJyYXk9WzEsIDIsIDMsIDQsIDUsIDZdO1xuICAgIGd1ZXN0czogbnVtYmVyO1xuICAgIGlzRGF0ZVRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKFwiZGF0ZVBpY2tlclwiKSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGltZVBpY2tlclwiKSB0aW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiZ3Vlc3RQaWNrZXJcIikgZ3Vlc3RQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblxuICAgICAgICAgICAgaWYocGFyYW1zLmNvbnRleHQgPT09IFwiZ3Vlc3RcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRlVGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwYXJhbXMuY29udGV4dCA9PT0gXCJkYXRlLXRpbWVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRlVGltZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEYXRlVGltZSkge1xuXG4gICAgICAgICAgICBsZXQgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZVBpY2tlcik7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50ZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBkYXRlUGlja2VyLnllYXIgPSBjdXJyZW50ZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IGN1cnJlbnRkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSBjdXJyZW50ZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBjdXJyZW50ZGF0ZTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5ldyBEYXRlKDIwNDUsIDQsIDEyKTtcblxuICAgICAgICAgICAgbGV0IHRpbWVQaWNrZXI6IFRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj50aGlzLnRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aW1lUGlja2VyLmhvdXIgPSBjdXJyZW50ZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgdGltZVBpY2tlci5taW51dGUgPSBjdXJyZW50ZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0RhdGVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBkYXRlUGlja2VyLmRhdGU7XG4gICAgICAgICAgICBsZXQgdGltZVBpY2tlcjogVGltZVBpY2tlciA9IDxUaW1lUGlja2VyPnRoaXMudGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFRpbWUgPSB0aW1lUGlja2VyLnRpbWU7XG4gICAgICAgICAgICBsZXQgcmVzZXJ2ZVRpbWUgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXNlcnZlVGltZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj4gdGhpcy5ndWVzdFBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5ndWVzdEFycmF5W3BpY2tlci5zZWxlY3RlZEluZGV4XSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==