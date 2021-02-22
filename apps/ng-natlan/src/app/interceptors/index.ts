import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NatlanApiKeyInterceptor } from './natlan-api-key.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export default [NatlanApiKeyInterceptor, ErrorInterceptor].map(
  interceptorClass => ({
    provide: HTTP_INTERCEPTORS,
    useClass: interceptorClass,
    multi: true,
  })
);
