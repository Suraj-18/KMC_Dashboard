import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
      constructor() { }
    ​
      intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const envObj: any = {
          url: environment.BACKEND_URL + request.url,
        };
        request = request.clone(envObj);
        return next.handle(request);
    ​
        // if (!user) {
        //   request = request.clone(envObj);
        //   return next.handle(request);
        // }
    ​
        //     if (
        //       request.url.includes('/kpmc_api/subscribe/topic') ||
        //       request.url.includes('/kpmc_api/complain/counter') ||
        //       request.url.includes('/kpmc_api/news') ||
        //       request.url.includes('/kpmc_api/press-release') ||
        //       request.url.includes('/kpmc_api/tender')
        //     ) {
        //       envObj.setHeaders = { Authorization: 'Bearer ' };
        //     } else { envObj.setHeaders = { Authorization: 'Bearer ' + user.token }; }
        // ​
        //     request = request.clone(envObj);
        //     return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
        //       if (err.status === 401 || err.status === 403) this.auth.logout();
        //       return next.handle(request);
        //     }));
    ​
    }
}