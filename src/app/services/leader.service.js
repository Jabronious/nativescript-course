"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var LeaderService = /** @class */ (function () {
    function LeaderService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.http.get(baseurl_1.baseURL + 'leaders')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.http.get(baseurl_1.baseURL + 'leaders/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.http.get(baseurl_1.baseURL + 'leaders?featured=true').pipe(operators_1.map(function (leaders) { return leaders[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyw0Q0FBaUQ7QUFDakQsNkNBQStEO0FBQy9ELDZDQUE0QztBQUM1QyxxRUFBa0U7QUFLbEU7SUFFRSx1QkFBb0IsSUFBZ0IsRUFDMUIscUJBQTRDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFM0Qsa0NBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsaUJBQU8sR0FBRyxTQUFTLENBQUM7YUFDaEQsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsaUJBQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO2FBQ3BELElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGlCQUFPLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO2FBQy9GLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFsQlUsYUFBYTtRQUh6QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHMEIsaUJBQVU7WUFDSCwrQ0FBcUI7T0FIM0MsYUFBYSxDQW1CekI7SUFBRCxvQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGVhZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxuXG4gIGdldExlYWRlcnMoKTogT2JzZXJ2YWJsZTxMZWFkZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PExlYWRlcltdPihiYXNlVVJMICsgJ2xlYWRlcnMnKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xuICB9XG5cbiAgZ2V0TGVhZGVyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPExlYWRlcj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PExlYWRlcj4oYmFzZVVSTCArICdsZWFkZXJzLycgKyBpZClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxuXG4gIGdldEZlYXR1cmVkTGVhZGVyKCk6IE9ic2VydmFibGU8TGVhZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGVhZGVyW10+KGJhc2VVUkwgKyAnbGVhZGVycz9mZWF0dXJlZD10cnVlJykucGlwZShtYXAobGVhZGVycyA9PiBsZWFkZXJzWzBdKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxufVxuIl19