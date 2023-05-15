import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolferService {

  constructor(private _http: HttpClient) { }

  addGolfer(data : any): Observable<any> {
    return this._http.post('http://localhost:3000/golfers', data);
  }

  updateGolfer(id:number, data : any): Observable<any> {
    return this._http.put(`http://localhost:3000/golfers/${id}`, data);
  }

  getGolferList(): Observable<any> {
    return this._http.get('http://localhost:3000/golfers');
  }


  deleteGolfer(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/golfers/${id}`);
  }
}
