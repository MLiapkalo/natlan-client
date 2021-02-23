import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  private readonly genericErrorMessage = 'Something went wrong';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(({ error, status }: HttpErrorResponse) =>
        throwError({
          status,
          message: error.error?.message || this.genericErrorMessage,
        })
      )
    );
  }
}
