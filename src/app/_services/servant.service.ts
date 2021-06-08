import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servant } from '../Servant';

@Injectable({
  providedIn: 'root',
})
export class ServantService {
  private apiUrl = 'http://localhost:5000/servants';

  getServants(): Observable<Servant[]> {
    return this.http.get<Servant[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) {}
}
