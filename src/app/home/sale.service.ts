import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
@Injectable()
export class SaleService {
 
  baseURL: string = "http://demo3544572.mockable.io/";
 
  constructor(private http: HttpClient) {
  }
 
  getSalesOnline(): Observable<any> {
    return this.http.get(this.baseURL + 'leilao/online')
  }
 
}
 