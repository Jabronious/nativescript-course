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
                reservation_service_1.ReservationService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUF3RDtBQUN4RCxrREFBbUU7QUFDbkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUNoRix1RUFBOEQ7QUFDOUQsb0RBQXFFO0FBQ3JFLHdDQUFxRDtBQUVyRCwyREFBd0Q7QUFFeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUVsRSx3REFBc0Q7QUFDdEQsOEVBQTJFO0FBQzNFLGtFQUFnRTtBQUNoRSw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBQzlELGtFQUFnRTtBQUNoRSxzRUFBb0U7QUFFcEUsNENBQTJDO0FBRTNDLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQXFEbkY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBbkRyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsNkJBQXNCO2dCQUN0Qix1QkFBZ0I7Z0JBQ2hCLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLDJCQUFtQjtnQkFDbkIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUMzQixJQUFJLEVBQUUsMEJBQTBCO2lCQUNoQyxDQUFDO2FBQ0Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsMENBQW1CO2dCQUNuQiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsNENBQW9CO2dCQUNwQixzREFBeUI7Z0JBQ3pCLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQU8sRUFBQztnQkFDdkMsMEJBQVc7Z0JBQ1gsK0NBQXFCO2dCQUNyQixvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLG9DQUFnQjtnQkFDaEIsd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELGVBQWUsRUFBRTtnQkFDZixzREFBeUI7Z0JBQ3pCLG9DQUFnQjthQUNqQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzaGRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZGlzaGRldGFpbC9kaXNoZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc2VydmF0aW9ubW9kYWwvcmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckF1dGhDb21wb25lbnQgfSBmcm9tICcuL3VzZXJhdXRoL3VzZXJhdXRoLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNlcnZhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vc2hhcmVkL2Jhc2V1cmwnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gIFx0XHRcdCdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnXG4gIFx0XHR9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnQsXG4gICAgICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgUmVzZXJ2YXRpb25Db21wb25lbnQsXG4gICAgICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsXG4gICAgICAgIENvbW1lbnRDb21wb25lbnQsXG4gICAgICAgIFVzZXJBdXRoQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdiYXNlVVJMJywgdXNlVmFsdWU6IGJhc2VVUkx9LFxuICAgICAgICBEaXNoU2VydmljZSxcbiAgICAgICAgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLFxuICAgICAgICBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgICAgICBMZWFkZXJTZXJ2aWNlLFxuICAgICAgICBGYXZvcml0ZVNlcnZpY2UsXG4gICAgICAgIENvdWNoYmFzZVNlcnZpY2UsXG4gICAgICAgIFJlc2VydmF0aW9uU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsXG4gICAgICBDb21tZW50Q29tcG9uZW50XG4gICAgXSxcbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=