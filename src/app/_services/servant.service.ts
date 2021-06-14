import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servant } from '../Servant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServantService {
  private apiUrl = 'http://localhost:5000/servants';

  constructor(private http: HttpClient) {}

  getServants(): Observable<Servant[]> {
    return this.http.get<Servant[]>(this.apiUrl);
  }

  addServant(servant: Servant): Observable<Servant> {
    return this.http.post<Servant>(this.apiUrl, servant, httpOptions);
  }
}
