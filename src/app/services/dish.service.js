"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var DishService = /** @class */ (function () {
    function DishService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.http.get(baseurl_1.baseURL + 'dishes')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getDish = function (id) {
        return this.http.get(baseurl_1.baseURL + 'dishes/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.http.get(baseurl_1.baseURL + 'dishes?featured=true').pipe(operators_1.map(function (dishes) { return dishes[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDRDQUFpRDtBQUNqRCw2Q0FBK0Q7QUFDL0QsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUtsRTtJQUVFLHFCQUFvQixJQUFnQixFQUMxQixxQkFBNEM7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUksQ0FBQztJQUUzRCwrQkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxpQkFBTyxHQUFHLFFBQVEsQ0FBQzthQUM3QyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxpQkFBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDakQsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLGlCQUFPLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO2FBQzFGLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFsQlUsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHMEIsaUJBQVU7WUFDSCwrQ0FBcUI7T0FIM0MsV0FBVyxDQW1CdkI7SUFBRCxrQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaXNoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxuXG4gIGdldERpc2hlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERpc2hbXT4oYmFzZVVSTCArICdkaXNoZXMnKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xuICB9XG5cbiAgZ2V0RGlzaChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaXNoPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGlzaD4oYmFzZVVSTCArICdkaXNoZXMvJyArIGlkKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xuICB9XG5cbiAgZ2V0RmVhdHVyZWREaXNoKCk6IE9ic2VydmFibGU8RGlzaD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERpc2hbXT4oYmFzZVVSTCArICdkaXNoZXM/ZmVhdHVyZWQ9dHJ1ZScpLnBpcGUobWFwKGRpc2hlcyA9PiBkaXNoZXNbMF0pKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xuICB9XG59XG4iXX0=