import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
  import { from } from 'rxjs';
  import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }


   url = "http://localhost:3000";
  
    headers= new HttpHeaders()
   .set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*');


   GetAzureBaseUrl()
   {
    return this.http.get(this.url+'/projectsDetails');
   }

    GetData() 
    {
      return this.http.get(this.url+'/data');
    }


}
