"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var couchbase_service_1 = require("../services/couchbase.service");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            nativescript_local_notifications_1.LocalNotifications.schedule([{
                    id: +id,
                    title: "ConFusion Favorites",
                    body: 'Dish ' + id + ' added successfully'
                }]).then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing notification ' + error); });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .pipe(operators_1.map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); }));
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFDckMsbUVBQWlFO0FBQ2pFLHFGQUFzRTtBQUd0RTtJQUtFLHlCQUNVLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjVDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFNMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckU7YUFDSTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLHFEQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMzQixFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUNQLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLHFCQUFxQjtpQkFDM0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQXJDLENBQXFDLEVBQ2xELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQUdDO1FBRkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUNoQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQWQsQ0FBYyxDQUFDLEVBQXpDLENBQXlDLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDaEYsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUI7YUFDSTtZQUNILE9BQU8saUJBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQXREVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBT1ksMEJBQVc7WUFDTixvQ0FBZ0I7T0FQakMsZUFBZSxDQXVEM0I7SUFBRCxzQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvdWNoYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVNlcnZpY2Uge1xuXG4gIGZhdm9yaXRlczogQXJyYXk8bnVtYmVyPjtcbiAgZG9jSWQ6IHN0cmluZyA9IFwiZmF2b3JpdGVzXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb3VjaGJhc2VTZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZmF2b3JpdGVzID0gW107XG5cbiAgICBsZXQgZG9jID0gdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmdldERvY3VtZW50KHRoaXMuZG9jSWQpO1xuICAgIGlmKCBkb2MgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHtcImZhdm9yaXRlc1wiOiBbXX0sIHRoaXMuZG9jSWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVzID0gZG9jLmZhdm9yaXRlcztcbiAgICB9XG4gIH1cblxuICBpc0Zhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xuICB9XG5cbiAgYWRkRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZXMucHVzaChpZCk7XG4gICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwge1wiZmF2b3JpdGVzXCI6IHRoaXMuZmF2b3JpdGVzfSk7XG4gICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgaWQ6ICtpZCxcbiAgICAgICAgdGl0bGU6IFwiQ29uRnVzaW9uIEZhdm9yaXRlc1wiLFxuICAgICAgICBib2R5OiAnRGlzaCAnICsgaWQgKyAnIGFkZGVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgIH1dKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdOb3RpZmljYXRpb24gc2NoZWR1bGVkJyksXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coJ0Vycm9yIHNob3dpbmcgbm90aWZpY2F0aW9uICcgKyBlcnJvcikpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0RmF2b3JpdGVzKCk6IE9ic2VydmFibGU8RGlzaFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaGVzKClcbiAgICAgIC5waXBlKG1hcChkaXNoZXMgPT4gZGlzaGVzLmZpbHRlcihkaXNoID0+IHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGRpc2guaWQpKSkpO1xuICB9XG5cbiAgZGVsZXRlRmF2b3JpdGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RGlzaFtdPiB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwxKTtcbiAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXN9KTtcbiAgICAgIHJldHVybiB0aGlzLmdldEZhdm9yaXRlcygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdEZWxldGluZyBub24tZXhpc3RhbnQgZmF2b3JpdGUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==