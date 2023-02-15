import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Distribution } from '../models/distribution.model';

const baseUrl = 'http://localhost:8090/api/v1/distribution';

@Injectable({
  providedIn: 'root'
})
export class DistributionService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Distribution[]> {
    return this.http.get<Distribution[]>(`${baseUrl}/user/${2}`);
  }

  get(id:any): Observable<Distribution>{
    return this.http.get<Distribution>(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
