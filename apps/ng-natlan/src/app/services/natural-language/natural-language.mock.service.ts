import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnnotateTextResponse } from '@natlan-workspace/natlan-data';
import { delay } from 'rxjs/operators';
import responseMock from '../../shared/mocks/response-data.mock';

@Injectable({
  providedIn: 'root',
})
export class NaturalLanguageMockService {
  annotateText = (): Observable<AnnotateTextResponse> =>
    of(responseMock as AnnotateTextResponse).pipe(delay(1000));
}
