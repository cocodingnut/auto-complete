import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = 'api/complete/search?client=firefox&q='
  constructor(private http: HttpClient) { }

  getInfo(input: string): Observable<string[]> {
    const url = this.apiUrl + input;
    return this.http.get<string[]>(url);
  }
}
