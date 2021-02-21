import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { natlanApiBase, natlanApiKey } from '../../utils';

@Injectable()
export class NatlanApiKeyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.url.includes(natlanApiBase())
        ? request.clone({
            setParams: {
              key: natlanApiKey(),
            },
          })
        : request
    );
  }
}
