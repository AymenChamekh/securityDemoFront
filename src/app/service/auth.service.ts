import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private securityServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }



}
