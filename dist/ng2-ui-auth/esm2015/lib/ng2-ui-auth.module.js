/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CONFIG_OPTIONS, ConfigService } from './config.service';
import { StorageService } from './storage-service';
import { BrowserStorageService } from './browser-storage.service';
import { SharedService } from './shared.service';
import { JwtInterceptor } from './interceptor.service';
import { OauthService } from './oauth.service';
import { HttpClient } from '@angular/common/http';
import { PopupService } from './popup.service';
import { LocalService } from './local.service';
import { AuthService } from './auth.service';
export class Ng2UiAuthModule {
    /**
     * @param {?=} configOptions
     * @param {?=} defaultJwtInterceptor
     * @return {?}
     */
    static forRoot(configOptions, defaultJwtInterceptor = true) {
        return {
            ngModule: Ng2UiAuthModule,
            providers: [
                ...(configOptions ? [{ provide: CONFIG_OPTIONS, useValue: configOptions }] : []),
                { provide: ConfigService, useClass: ConfigService, deps: [CONFIG_OPTIONS] },
                { provide: StorageService, useClass: BrowserStorageService, deps: [ConfigService] },
                { provide: SharedService, useClass: SharedService, deps: [StorageService, ConfigService] },
                { provide: LocalService, useClass: LocalService, deps: [HttpClient, SharedService, ConfigService] },
                { provide: PopupService, useClass: PopupService, deps: [ConfigService] },
                { provide: OauthService, useClass: OauthService, deps: [HttpClient, SharedService, ConfigService, PopupService] },
                { provide: AuthService, useClass: AuthService, deps: [SharedService, LocalService, OauthService] },
                ...(defaultJwtInterceptor
                    ? [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true, deps: [SharedService, ConfigService] }]
                    : [])
            ]
        };
    }
}
Ng2UiAuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [HttpClientModule],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXVpLWF1dGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXVpLWF1dGgvIiwic291cmNlcyI6WyJsaWIvbmcyLXVpLWF1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQXFDLEVBQUUscUJBQXFCLEdBQUcsSUFBSTtRQUNoRixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hGLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUMzRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNuRixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBQzFGLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBQ25HLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN4RSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsRUFBRTtnQkFDakgsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRTtnQkFDbEcsR0FBRyxDQUFDLHFCQUFxQjtvQkFDdkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDO29CQUMvRyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ1I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdkJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSUNvbmZpZ09wdGlvbnMsIElQYXJ0aWFsQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLWludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBDT05GSUdfT1BUSU9OUywgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJvd3NlclN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9icm93c2VyLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnd0SW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBQb3B1cFNlcnZpY2UgfSBmcm9tICcuL3BvcHVwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlVpQXV0aE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnT3B0aW9ucz86IElQYXJ0aWFsQ29uZmlnT3B0aW9ucywgZGVmYXVsdEp3dEludGVyY2VwdG9yID0gdHJ1ZSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5nMlVpQXV0aE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLi4uKGNvbmZpZ09wdGlvbnMgPyBbeyBwcm92aWRlOiBDT05GSUdfT1BUSU9OUywgdXNlVmFsdWU6IGNvbmZpZ09wdGlvbnMgfV0gOiBbXSksXHJcbiAgICAgICAgeyBwcm92aWRlOiBDb25maWdTZXJ2aWNlLCB1c2VDbGFzczogQ29uZmlnU2VydmljZSwgZGVwczogW0NPTkZJR19PUFRJT05TXSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZUNsYXNzOiBCcm93c2VyU3RvcmFnZVNlcnZpY2UsIGRlcHM6IFtDb25maWdTZXJ2aWNlXSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogU2hhcmVkU2VydmljZSwgdXNlQ2xhc3M6IFNoYXJlZFNlcnZpY2UsIGRlcHM6IFtTdG9yYWdlU2VydmljZSwgQ29uZmlnU2VydmljZV0gfSxcclxuICAgICAgICB7IHByb3ZpZGU6IExvY2FsU2VydmljZSwgdXNlQ2xhc3M6IExvY2FsU2VydmljZSwgZGVwczogW0h0dHBDbGllbnQsIFNoYXJlZFNlcnZpY2UsIENvbmZpZ1NlcnZpY2VdIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBQb3B1cFNlcnZpY2UsIHVzZUNsYXNzOiBQb3B1cFNlcnZpY2UsIGRlcHM6IFtDb25maWdTZXJ2aWNlXSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogT2F1dGhTZXJ2aWNlLCB1c2VDbGFzczogT2F1dGhTZXJ2aWNlLCBkZXBzOiBbSHR0cENsaWVudCwgU2hhcmVkU2VydmljZSwgQ29uZmlnU2VydmljZSwgUG9wdXBTZXJ2aWNlXSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogQXV0aFNlcnZpY2UsIHVzZUNsYXNzOiBBdXRoU2VydmljZSwgZGVwczogW1NoYXJlZFNlcnZpY2UsIExvY2FsU2VydmljZSwgT2F1dGhTZXJ2aWNlXSB9LFxyXG4gICAgICAgIC4uLihkZWZhdWx0Snd0SW50ZXJjZXB0b3JcclxuICAgICAgICAgID8gW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBKd3RJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUsIGRlcHM6IFtTaGFyZWRTZXJ2aWNlLCBDb25maWdTZXJ2aWNlXSB9XVxyXG4gICAgICAgICAgOiBbXSlcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19