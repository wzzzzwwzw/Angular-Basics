import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({setHeaders: {'Custom-Header-1': 'firstValue'}});
    return next.handle(modified);
  }
}

@Injectable()
export class SecondInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({setHeaders: {'Custom-Header-2': 'secondValue'}});
    return next.handle(modified).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body !== null) {
            console.log (event.body); //tratamiento
          }
          return event;
        }
      })
    );
  }
}
