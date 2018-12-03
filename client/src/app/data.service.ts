import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private userData = {};

  get UserData(){
      return this.userData;
  }

  set UserData(data){
      this.userData = data;
  }


  show_all_users(){
    console.log('all users');
    this.getUsers()
  }

  getUsers() {
    return this.http.get('http://localhost:5002/api/users')
  }



}
