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

  loginName(name){
      this.userName = name;
  }

  checkUserLogin(name, password) {
      this.http.get('/api/users/'+name).subscribe(data => {
          console.log(data);
                if(Object.keys(data).length === 0){
                    return {"status": false, "message": "wrong_name"}
                }
                else if(data[0].password != password){
                    return {"status": false, "message": "wrong_password"}
                }
                return {"status": true, "id": data[0]._id}
            },
            error => {
                console.log("Error", error);
                return {"status": false, "message": "API problem"}
            }
        );
  }
}
