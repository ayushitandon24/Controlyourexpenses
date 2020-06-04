import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private _http:HttpClient) { }
  expensesinTotal(){
  return this._http.get("http://localhost:4000/expenses").map(result =>{
     console.log(result);
   });

  }
}
