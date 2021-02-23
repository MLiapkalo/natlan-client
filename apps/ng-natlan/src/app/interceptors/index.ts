import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NatlanApiKeyInterceptor } from './natlan-api-key.interceptor';
import { HttpErrorsInterceptor } from './http-errors.interceptor';

export default [NatlanApiKeyInterceptor, HttpErrorsInterceptor].map(
  interceptorClass => ({
    provide: HTTP_INTERCEPTORS,
    useClass: interceptorClass,
    multi: true,
  })
);
