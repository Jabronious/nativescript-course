"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchbase_service_1 = require("../services/couchbase.service");
var ReservationService = /** @class */ (function () {
    function ReservationService(couchbaseService) {
        this.couchbaseService = couchbaseService;
        this.docId = "reservations";
        this.reservations = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "reservations": [] }, this.docId);
        }
        else {
            this.reservations = doc.reservations;
        }
    }
    ReservationService.prototype.addReservation = function (id) {
        this.reservations.push(id);
        this.couchbaseService.updateDocument(this.docId, { "reservations": this.reservations });
        return true;
    };
    ReservationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [couchbase_service_1.CouchbaseService])
    ], ReservationService);
    return ReservationService;
}());
exports.ReservationService = ReservationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsbUVBQWlFO0FBR2pFO0lBS0UsNEJBQ1UsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFINUMsVUFBSyxHQUFXLGNBQWMsQ0FBQztRQUs3QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUMsY0FBYyxFQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RTthQUNJO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztRQUV0RixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUF4QlUsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBT2lCLG9DQUFnQjtPQU5qQyxrQkFBa0IsQ0F5QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25TZXJ2aWNlIHtcblxuICByZXNlcnZhdGlvbnM6IEFycmF5PG51bWJlcj47XG4gIGRvY0lkOiBzdHJpbmcgPSBcInJlc2VydmF0aW9uc1wiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc2VydmF0aW9ucyA9IFtdO1xuXG4gICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlU2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcbiAgICBpZiggZG9jID09IG51bGwpIHtcbiAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS5jcmVhdGVEb2N1bWVudCh7XCJyZXNlcnZhdGlvbnNcIjogW119LCB0aGlzLmRvY0lkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnJlc2VydmF0aW9ucyA9IGRvYy5yZXNlcnZhdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgYWRkUmVzZXJ2YXRpb24oaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMucmVzZXJ2YXRpb25zLnB1c2goaWQpO1xuICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XCJyZXNlcnZhdGlvbnNcIjogdGhpcy5yZXNlcnZhdGlvbnN9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=