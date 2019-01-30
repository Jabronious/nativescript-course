"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var connectivity = require("connectivity");
var rxjs_1 = require("rxjs");
var DeviceInfo = /** @class */ (function () {
    function DeviceInfo(model, deviceType, os, osVersion, sdkVersion, language, manufacture, uuid) {
        this.model = model;
        this.deviceType = deviceType;
        this.os = os;
        this.osVersion = osVersion;
        this.sdkVersion = sdkVersion;
        this.language = language;
        this.manufacture = manufacture;
        this.uuid = uuid;
    }
    return DeviceInfo;
}());
var ScreenInfo = /** @class */ (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
var PlatformService = /** @class */ (function () {
    function PlatformService() {
        this.deviceInformation = new DeviceInfo(platform_1.device.model, platform_1.device.deviceType, platform_1.device.os, platform_1.device.osVersion, platform_1.device.sdkVersion, platform_1.device.language, platform_1.device.manufacturer, platform_1.device.uuid);
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
        var connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this.connectionType = "None";
                break;
            case connectivity.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case connectivity.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            default:
                break;
        }
    }
    PlatformService.prototype.isAndroid = function () {
        return platform_1.isAndroid;
    };
    PlatformService.prototype.isIOS = function () {
        return platform_1.isIOS;
    };
    PlatformService.prototype.screenWidthDIP = function () {
        return this.screenInformation.widthDIPs;
    };
    PlatformService.prototype.networkConnectionType = function () {
        return this.connectionType;
    };
    PlatformService.prototype.startMonitoringNetwork = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            connectivity.startMonitoring(function (newConnectionType) {
                switch (newConnectionType) {
                    case connectivity.connectionType.none:
                        _this.connectionType = "None";
                        observer.next("Connection type changed to none.");
                        break;
                    case connectivity.connectionType.wifi:
                        _this.connectionType = "Wi-Fi";
                        observer.next("Connection type changed to WiFi.");
                        break;
                    case connectivity.connectionType.mobile:
                        _this.connectionType = "Mobile";
                        observer.next("Connection type changed to mobile.");
                        break;
                    default:
                        break;
                }
            });
        });
    };
    PlatformService.prototype.stopMonitoringNetwork = function () {
        connectivity.stopMonitoring();
    };
    PlatformService.prototype.printPlatformInfo = function () {
        console.log('This device model is ' + this.deviceInformation.model);
        console.log('This device OS is ' + this.deviceInformation.os + ' ' + this.deviceInformation.osVersion);
        console.log('This device type is ' + this.deviceInformation.deviceType);
        console.log('This device screen size is ' + this.screenInformation.widthPixels + ' X ' + this.screenInformation.heightPixels + ' pixels');
        console.log('This device is connected to ' + this.connectionType);
    };
    PlatformService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PlatformService);
    return PlatformService;
}());
exports.PlatformService = PlatformService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXRmb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQTREO0FBQzVELDJDQUE2QztBQUM3Qyw2QkFBa0M7QUFFbEM7SUFDRSxvQkFDUyxLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLElBQVk7UUFQWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNqQixDQUFDO0lBQ1AsaUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQUVEO0lBQ0Usb0JBQ1MsVUFBa0IsRUFDbEIsWUFBb0IsRUFDcEIsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLFdBQW1CO1FBSm5CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDeEIsQ0FBQztJQUNQLGlCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFHRDtJQUtFO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksVUFBVSxDQUNuQyxpQkFBTSxDQUFDLEtBQUssRUFDWixpQkFBTSxDQUFDLFVBQVUsRUFDakIsaUJBQU0sQ0FBQyxFQUFFLEVBQ1QsaUJBQU0sQ0FBQyxTQUFTLEVBQ2hCLGlC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QVUsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBQztRQUMxSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBM0ZVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBNEYzQjtJQUFELHNCQUFDO0NBQUEsQUE1RkQsSUE0RkM7QUE1RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tICdjb25uZWN0aXZpdHknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5jbGFzcyBEZXZpY2VJbmZvIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG1vZGVsOiBzdHJpbmcsXG4gICAgcHVibGljIGRldmljZVR5cGU6IHN0cmluZyxcbiAgICBwdWJsaWMgb3M6IHN0cmluZyxcbiAgICBwdWJsaWMgb3NWZXJzaW9uOiBzdHJpbmcsXG4gICAgcHVibGljIHNka1ZlcnNpb246IHN0cmluZyxcbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgbWFudWZhY3R1cmU6IHN0cmluZyxcbiAgICBwdWJsaWMgdXVpZDogc3RyaW5nXG4gICkgeyB9XG59XG5cbmNsYXNzIFNjcmVlbkluZm8ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVpZ2h0RElQczogbnVtYmVyLFxuICAgIHB1YmxpYyBoZWlnaHRQaXhlbHM6IG51bWJlcixcbiAgICBwdWJsaWMgc2NhbGU6IG51bWJlcixcbiAgICBwdWJsaWMgd2lkdGhESVBzOiBudW1iZXIsXG4gICAgcHVibGljIHdpZHRoUGl4ZWxzOiBudW1iZXJcbiAgKSB7IH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU2VydmljZSB7XG4gIHB1YmxpYyBkZXZpY2VJbmZvcm1hdGlvbjogRGV2aWNlSW5mbztcbiAgcHVibGljIHNjcmVlbkluZm9ybWF0aW9uOiBTY3JlZW5JbmZvO1xuICBwdWJsaWMgY29ubmVjdGlvblR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRldmljZUluZm9ybWF0aW9uID0gbmV3IERldmljZUluZm8oXG4gICAgICAgIGRldmljZS5tb2RlbCxcbiAgICAgICAgZGV2aWNlLmRldmljZVR5cGUsXG4gICAgICAgIGRldmljZS5vcyxcbiAgICAgICAgZGV2aWNlLm9zVmVyc2lvbixcbiAgICAgICAgZGV2aWNlLnNka1ZlcnNpb24sXG4gICAgICAgIGRldmljZS5sYW5ndWFnZSxcbiAgICAgICAgZGV2aWNlLm1hbnVmYWN0dXJlcixcbiAgICAgICAgZGV2aWNlLnV1aWRcbiAgICApO1xuXG4gICAgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbiA9IG5ldyBTY3JlZW5JbmZvKFxuICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzLFxuICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMsXG4gICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLnNjYWxlLFxuICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMsXG4gICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzXG4gICAgKTtcblxuICAgIGxldCBjb25uZWN0aW9uVHlwZSA9IGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpO1xuICAgIHN3aXRjaCAoY29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSBcIk5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiV2ktRmlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gXCJNb2JpbGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBpc0FuZHJvaWQ7XG4gIH1cblxuICBwdWJsaWMgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gaXNJT1M7XG4gIH1cblxuICBwdWJsaWMgc2NyZWVuV2lkdGhESVAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcmVlbkluZm9ybWF0aW9uLndpZHRoRElQcztcbiAgfVxuXG4gIHB1YmxpYyBuZXR3b3JrQ29ubmVjdGlvblR5cGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25UeXBlO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0TW9uaXRvcmluZ05ldHdvcmsoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG5cbiAgICAgIGNvbm5lY3Rpdml0eS5zdGFydE1vbml0b3JpbmcoKG5ld0Nvbm5lY3Rpb25UeXBlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc3dpdGNoKG5ld0Nvbm5lY3Rpb25UeXBlKSB7XG4gICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSBcIk5vbmVcIjtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoXCJDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBub25lLlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gXCJXaS1GaVwiO1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChcIkNvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIFdpRmkuXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiTW9iaWxlXCI7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KFwiQ29ubmVjdGlvbiB0eXBlIGNoYW5nZWQgdG8gbW9iaWxlLlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RvcE1vbml0b3JpbmdOZXR3b3JrKCkge1xuICAgICAgY29ubmVjdGl2aXR5LnN0b3BNb25pdG9yaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgcHJpbnRQbGF0Zm9ybUluZm8oKSB7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgZGV2aWNlIG1vZGVsIGlzICcrIHRoaXMuZGV2aWNlSW5mb3JtYXRpb24ubW9kZWwpO1xuICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSBPUyBpcyAnICsgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5vcyArICcgJyArIHRoaXMuZGV2aWNlSW5mb3JtYXRpb24ub3NWZXJzaW9uKTtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBkZXZpY2UgdHlwZSBpcyAnICsgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5kZXZpY2VUeXBlKTtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBkZXZpY2Ugc2NyZWVuIHNpemUgaXMgJyArIHRoaXMuc2NyZWVuSW5mb3JtYXRpb24ud2lkdGhQaXhlbHMgKyAnIFggJyArIHRoaXMuc2NyZWVuSW5mb3JtYXRpb24uaGVpZ2h0UGl4ZWxzICsgJyBwaXhlbHMnKTtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBkZXZpY2UgaXMgY29ubmVjdGVkIHRvICcgKyB0aGlzLmNvbm5lY3Rpb25UeXBlKTtcbiAgfVxufVxuIl19