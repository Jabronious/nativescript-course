"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseService = /** @class */ (function () {
    function CouchbaseService() {
        this.database = new nativescript_couchbase_1.Couchbase("confusion");
    }
    CouchbaseService.prototype.getDatabase = function () {
        return this.database;
    };
    CouchbaseService.prototype.getDocument = function (docId) {
        return this.database.getDocument(docId);
    };
    CouchbaseService.prototype.createDocument = function (data, docId) {
        return this.database.createDocument(data, docId);
    };
    CouchbaseService.prototype.updateDocument = function (docId, data) {
        return this.database.updateDocument(docId, data);
    };
    CouchbaseService.prototype.deleteDocument = function (docId) {
        return this.database.deleteDocument(docId);
    };
    CouchbaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseService);
    return CouchbaseService;
}());
exports.CouchbaseService = CouchbaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VjaGJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQ7SUFJSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sc0NBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx5Q0FBYyxHQUFyQixVQUFzQixJQUFTLEVBQUUsS0FBYTtRQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLElBQVM7UUFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLHlDQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBMUJRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFOztPQUNBLGdCQUFnQixDQTJCNUI7SUFBRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNvdWNoYmFzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3VjaGJhc2VTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UoXCJjb25mdXNpb25cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGFiYXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jdW1lbnQoZG9jSWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5nZXREb2N1bWVudChkb2NJZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZURvY3VtZW50KGRhdGE6IGFueSwgZG9jSWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5jcmVhdGVEb2N1bWVudChkYXRhLCBkb2NJZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZURvY3VtZW50KGRvY0lkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS51cGRhdGVEb2N1bWVudChkb2NJZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZURvY3VtZW50KGRvY0lkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuZGVsZXRlRG9jdW1lbnQoZG9jSWQpO1xuICAgIH1cbn1cbiJdfQ==