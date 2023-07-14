import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seats } from '../Interfaces/Seats.Interface';
import { Observable } from 'rxjs';
import { ResponseData } from '../Interfaces/ResponseAPIInterface';
import { SearchSeats } from '../Interfaces/SearchSeats.Interfaces';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class ListSeatsService {

  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  fetchSeats(data: SearchSeats): Observable<ResponseData<Seats[]>> {
    return this.http.post<ResponseData<Seats[]>>(this.baseUrl + '/search/seats', data)
  }
}
