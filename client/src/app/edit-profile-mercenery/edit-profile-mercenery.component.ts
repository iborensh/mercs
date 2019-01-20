import {Component, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
    selector: 'app-edit-profile-mercenery',
    templateUrl: './edit-profile-mercenery.component.html',
    styleUrls: ['./edit-profile-mercenery.component.scss']
})
export class EditProfileMerceneryComponent implements OnInit {

    myControl = new FormControl();
  options: string[] = ['put', 'options', 'for', 'each', 'title'];
  filteredOptions: Observable<string[]>;
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    // images = ['/assets/images/software.jpeg', '/assets/images/hardware.jpeg', '/assets/images/software.jpeg'];
    constructor(private formBuilder: FormBuilder, private http: HttpClient, public router: Router) {
    }
    messageForm: FormGroup;
    percent = '75%';
    current = '';
    public isCollapsed = false;
    skills = [
        {"label": "Job title", "value": "job_title", "percent": "12%"},
        {"label": "Education", "value": "education", "percent": "30%"},
        {"label": "Certificate", "value": "certificate", "percent": "55%"},
        {"label": "Experience", "value": "experience", "percent": "12%"},
        {"label": "Projects", "value": "projects", "percent": "99%"}];

    skillOptions = {"job_title": [{"label": "Job title", "value": "job_title", "percent": "12%"},
        {"label": "Education", "value": "education", "percent": "30%"},
        {"label": "Certificate", "value": "certificate", "percent": "55%"}],
        "education": [{"label": "Job title2", "value": "job_title", "percent": "12%"},
        {"label": "Education2", "value": "education", "percent": "30%"},
        {"label": "Certificate2", "value": "certificate", "percent": "55%"}],
        "certificate": [{"label": "Job title3", "value": "job_title", "percent": "12%"},
        {"label": "Education3", "value": "education", "percent": "30%"},
        {"label": "Certificate3", "value": "certificate", "percent": "55%"}]
        };

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
        this.messageForm = this.formBuilder.group({
            education: ['', Validators.required],
            certificate: ['', Validators.required],
            experience: ['', Validators.required],
            job_title: ['', Validators.required],
            projects: ['', Validators.required]
        });
    }

    private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

    onSubmit() {

        console.log(this.messageForm.value);
        this.router.navigate(['']);
    }

}
