import { Tag } from './../models/tag.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8090/api/v1/targets';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private http: HttpClient) {}

  getAll(id: any): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${baseUrl}/distribution/${id}`);
  }

  geById(id: any): Observable<Tag> {
    return this.http.get<Tag>(`${baseUrl}/${id}`);
  }
}
