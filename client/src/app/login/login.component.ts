import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DataService} from "../data.service";
import * as _ from 'lodash';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private formBuilder: FormBuilder, private http: HttpClient,
                private dataService: DataService) {
    }

    messageForm: FormGroup;
    submitted = false;
    success = false;
    wrongPassword = false;
    wrongName = false;
    login_check;

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        this.success = true;
        let userData = {"name": this.messageForm.controls.name.value, "password": this.messageForm.controls.password.value};
        this.http.post('/api/login', userData).subscribe(data => {
                if (Object.keys(data).length === 0) {
                    this.wrongName = true;
                    return
                }
                else if (data["password"] === false) {
                    this.wrongPassword = true;
                    return
                }
                delete data["password"];
                localStorage.setItem('isLoggedin', 'true');
                this.dataService.UserData = data;
                this.router.navigate(['home', data["_id"]]);
            },
            error => {
                console.log("Error", error);
            }
        );
    }
}
