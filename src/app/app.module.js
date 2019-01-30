"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("@angular/common/http");
var http_2 = require("nativescript-angular/http");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var reservation_component_1 = require("./reservation/reservation.component");
var reservationmodal_component_1 = require("./reservationmodal/reservationmodal.component");
var comment_component_1 = require("./comment/comment.component");
var userauth_component_1 = require("./userauth/userauth.component");
var dish_service_1 = require("./services/dish.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
var favorite_service_1 = require("./services/favorite.service");
var couchbase_service_1 = require("./services/couchbase.service");
var reservation_service_1 = require("./services/reservation.service");
var platform_service_1 = require("./services/platform.service");
var baseurl_1 = require("./shared/baseurl");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_2.NativeScriptHttpModule,
                http_1.HttpClientModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.css'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                favorites_component_1.FavoritesComponent,
                reservation_component_1.ReservationComponent,
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentComponent,
                userauth_component_1.UserAuthComponent
            ],
            providers: [
                { provide: 'baseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                promotion_service_1.PromotionService,
                leader_service_1.LeaderService,
                favorite_service_1.FavoriteService,
                couchbase_service_1.CouchbaseService,
                reservation_service_1.ReservationService,
                platform_service_1.PlatformService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentComponent
            ],
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUF3RDtBQUN4RCxrREFBbUU7QUFDbkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUNoRix1RUFBOEQ7QUFDOUQsb0RBQXFFO0FBQ3JFLHdDQUFxRDtBQUVyRCwyREFBd0Q7QUFFeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUVsRSx3REFBc0Q7QUFDdEQsOEVBQTJFO0FBQzNFLGtFQUFnRTtBQUNoRSw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBQzlELGtFQUFnRTtBQUNoRSxzRUFBb0U7QUFDcEUsZ0VBQThEO0FBRTlELDRDQUEyQztBQUUzQywyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLGtGQUFrRjtBQUNsRixtRkFBbUY7QUFzRG5GO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBEckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsdUJBQWdCO2dCQUNoQix3Q0FBOEI7Z0JBQzlCLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDM0IsSUFBSSxFQUFFLDBCQUEwQjtpQkFDaEMsQ0FBQzthQUNEO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsOEJBQWE7Z0JBQ2Isb0NBQWdCO2dCQUNoQixnQ0FBYztnQkFDZCx3Q0FBa0I7Z0JBQ2xCLDRDQUFvQjtnQkFDcEIsc0RBQXlCO2dCQUN6QixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFPLEVBQUM7Z0JBQ3ZDLDBCQUFXO2dCQUNYLCtDQUFxQjtnQkFDckIsb0NBQWdCO2dCQUNoQiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixvQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLHNEQUF5QjtnQkFDekIsb0NBQWdCO2FBQ2pCO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNoZGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyQXV0aENvbXBvbmVudCB9IGZyb20gJy4vdXNlcmF1dGgvdXNlcmF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Jlc2VydmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wbGF0Zm9ybS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vc2hhcmVkL2Jhc2V1cmwnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gIFx0XHRcdCdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnXG4gIFx0XHR9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnQsXG4gICAgICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgUmVzZXJ2YXRpb25Db21wb25lbnQsXG4gICAgICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsXG4gICAgICAgIENvbW1lbnRDb21wb25lbnQsXG4gICAgICAgIFVzZXJBdXRoQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdiYXNlVVJMJywgdXNlVmFsdWU6IGJhc2VVUkx9LFxuICAgICAgICBEaXNoU2VydmljZSxcbiAgICAgICAgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLFxuICAgICAgICBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgICAgICBMZWFkZXJTZXJ2aWNlLFxuICAgICAgICBGYXZvcml0ZVNlcnZpY2UsXG4gICAgICAgIENvdWNoYmFzZVNlcnZpY2UsXG4gICAgICAgIFJlc2VydmF0aW9uU2VydmljZSxcbiAgICAgICAgUGxhdGZvcm1TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCxcbiAgICAgIENvbW1lbnRDb21wb25lbnRcbiAgICBdLFxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==