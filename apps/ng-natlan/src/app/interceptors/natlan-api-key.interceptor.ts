import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class NatlanApiKeyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.url.includes(environment.NATLAN_API_BASE)
        ? request.clone({
            setParams: {
              key: environment.NATLAN_API_KEY,
            },
          })
        : request
    );
  }
}
