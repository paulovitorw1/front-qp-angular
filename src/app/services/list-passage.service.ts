import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { City } from '../Interfaces/City.Interface';
import { ResponseData } from '../Interfaces/ResponseAPIInterface';
import { SearchTravel } from '../Interfaces/SearchTravel.Interface';
import { Travel } from '../Interfaces/Travel.Interface';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})

export class ListPassageService {
  private baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  fetchCities(): Observable<ResponseData<City[]>> {
    return this.http.get<ResponseData<City[]>>(this.baseUrl + '/cities')
  }

  fetchPassage(data: SearchTravel): Observable<ResponseData<Travel[]>> {
    return this.http.post<ResponseData<Travel[]>>(this.baseUrl + '/search/passage', data)
  }
}