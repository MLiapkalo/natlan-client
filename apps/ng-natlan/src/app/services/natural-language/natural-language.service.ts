import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AnnotateTextRequest,
  AnnotateTextResponse,
} from '@natlan-workspace/natlan-data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NaturalLanguageService {
  constructor(private readonly http: HttpClient) {}

  annotateText = (req: AnnotateTextRequest): Observable<AnnotateTextResponse> =>
    this.http.post<AnnotateTextResponse>(
      `${environment.NATLAN_API_BASE}/documents:annotateText`,
      req
    );
}
