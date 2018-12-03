import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
    animations: [routerTransition()]
})
export class NewUserComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  alreadyExist = false;
  items;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  userTypes = ["hire", "worker"];

  ngOnInit() {
      this.items = ['name', 'email', 'password'];
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: [''],
    userType: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
        return;
    }


    let data = {};
    _.forEach(this.messageForm.controls, function(value, key) {
      data[key] = value.value
    });
    this.http.post('/api/users', data).subscribe(data => {
        if(data["_id"] === "already_exist"){
            this.alreadyExist = true;
            return
        }
        this.success = true;
        // localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['login']);
            },
            error => {
                console.log("Error", error);
            }
        );
}

}
