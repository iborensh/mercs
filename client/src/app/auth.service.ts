import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userName = 'Guest';

  get UserName(){
      return this.userName;
  }

  set UserName(name){
      this.userName = name;
  }

}
