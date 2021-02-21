import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NatlanApiKeyInterceptor } from './natlan-api-key.interceptor';

export default [NatlanApiKeyInterceptor].map(interceptorClass => ({
  provide: HTTP_INTERCEPTORS,
  useClass: interceptorClass,
  multi: true,
}));
