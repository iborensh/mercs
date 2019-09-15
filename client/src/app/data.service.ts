import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private userData = JSON.parse(sessionStorage.getItem('user')) || {};

  get UserData(){
      return this.userData;
  }

  set UserData(data){
      this.userData = data;
      sessionStorage.setItem('user', JSON.stringify(data));
  }


  show_all_users(){
    console.log('all users');
    this.getUsers()
  }

  getUsers() {
    return this.http.get('http://localhost:5002/api/users')
  }

  private chosenProject = null;

  get ChosenProject(){
      return this.chosenProject;
  }

  set ChosenProject(data){
      this.chosenProject = data;
  }

}
