import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../auth.service";
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
                private auth: AuthService, private dataService: DataService) {
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

        this.http.get('/api/users/' + this.messageForm.controls.name.value).subscribe(data => {
                if (Object.keys(data).length === 0) {
                    this.wrongName = true;
                    return
                }
                else if (data[0].password != this.messageForm.controls.password.value) {
                    this.wrongPassword = true;
                    return
                }
                localStorage.setItem('isLoggedin', 'true');
                delete data[0]["password"];
                this.auth.UserName = this.messageForm.controls.name.value;
                this.dataService.UserData = data[0];
                this.router.navigate(['home', data[0]._id]);
            },
            error => {
                console.log("Error", error);
            }
        );
    }
}
