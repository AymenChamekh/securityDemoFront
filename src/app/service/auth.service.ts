import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private securityServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public register(data : User):Observable<any>{
    return this.http.post(`${this.securityServerUrl}/api/v1/auth/register`,data);}
  
    public authentificate(data : User):Observable<any>{
      return this.http.post(`${this.securityServerUrl}/api/v1/auth/authenticate`,data);}
    
}

