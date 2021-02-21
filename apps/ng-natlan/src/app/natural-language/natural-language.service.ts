import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { natlanEndpoint } from '../../utils';
import {
  AnnotateTextRequest,
  AnnotateTextResponse,
} from '@natlan-workspace/natlan-data';

@Injectable({
  providedIn: 'root',
})
export class NaturalLanguageService {
  constructor(private readonly http: HttpClient) {}

  annotateText = (req: AnnotateTextRequest): Observable<AnnotateTextResponse> =>
    this.http.post<AnnotateTextResponse>(natlanEndpoint('annotateText'), req);
}
