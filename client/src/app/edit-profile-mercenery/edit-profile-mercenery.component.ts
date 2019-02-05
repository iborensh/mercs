import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DataService} from "../data.service";


@Component({
    selector: 'app-edit-profile-mercenery',
    templateUrl: './edit-profile-mercenery.component.html',
    styleUrls: ['./edit-profile-mercenery.component.scss']
})
export class EditProfileMerceneryComponent implements OnInit {
    check = '';
    myControl = new FormControl();
    options: string[] = ['put', 'options', 'for', 'each', 'title'];
    filteredOptions: Observable<string[]>;
    // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    // images = ['/assets/images/software.jpeg', '/assets/images/hardware.jpeg', '/assets/images/software.jpeg'];
    constructor(private formBuilder: FormBuilder, private http: HttpClient, public router: Router, private dataService: DataService) {
    }

    messageForm: FormGroup;
    mercSkills = {};
    current = 'user_class';
    public isCollapsed = false;
    skills = [
        {"label": "User class", "value": "user_class", "percent": "12%"},
        {"label": "Education", "value": "education", "percent": "30%"},
        {"label": "Work Experience", "value": "work_experience", "percent": "12%"},
        {"label": "Online courses", "value": "online_courses", "percent": "55%"},
        {"label": "Projects", "value": "projects", "percent": "99%"}];

    skillOptions = {
        "job_title": [{"label": "Job title", "value": "job_title", "percent": "12%"},
            {"label": "Education", "value": "education", "percent": "30%"},
            {"label": "Certificate", "value": "certificate", "percent": "55%"}],
        "education": [
            {"label": "usr_class", "value": "usr_class", "percent": "12%", "chosen": ""},
            {"label": "school", "value": "school", "percent": "30%", "chosen": ""},
            {
                "label": "degree", "value": "degree", "percent": "30%", "chosen": "", "options": [
                    {"label": "Bachelor", "value": "bachelor"},
                    {"label": "Sheni", "value": "sheni"},
                    {"label": "DR", "value": "doctor"}]
            },
            {"label": "degree_subject", "value": "degree_subject", "percent": "30%", "chosen": ""},
            {"label": "average", "value": "average", "percent": "55%", "chosen": ""}
        ],
        "certificate": [
            {"label": "Job title3", "value": "job_title", "percent": "12%"},
            {"label": "Education3", "value": "education", "percent": "30%"},
            {"label": "Certificate3", "value": "certificate", "percent": "55%"}],
        "online_courses": [
            {"label": "course type", "value": "course", "percent": "12%", "chosen": ""},
            {"label": "Web", "value": "web", "percent": "30%", "chosen": ""},
            {"label": "Hours", "value": "hours", "percent": "30%", "chosen": ""},
            {"label": "Link to certificate", "value": "certificate_link", "percent": "55%", "chosen": ""}
        ],
        "work_experience": [
            {"label": "usr_class", "value": "usr_class", "percent": "12%", "chosen": ""},
            {"label": "company", "value": "company", "percent": "30%", "chosen": ""},
            {"label": "title", "value": "title", "percent": "55%", "chosen": ""},
            {
                "label": "seniority", "value": "seniority", "percent": "30%", "chosen": "", "options": [
                    {"label": "junior", "value": "junior"},
                    {"label": "senior", "value": "senior"},
                    {"label": "people manager", "value": "people manager"},
                    {"label": "tech lead", "value": "tech lead"}]
            },
            {"label": "years", "value": "years", "percent": "55%", "chosen": ""}

        ]
    };

    job_title = [
        {
            "src": "assets/images/logo.png",
            "label": "Software developer",
            "value": "sw",
            "explanation": "explain here if needed"
        },
        {"src": "assets/images/logo.png", "label": "Designer", "value": "designer", "explanation": "explain if needed"},
        {"src": "assets/images/logo.png", "label": "Hardware developer", "value": "hw", "explanation": "what???"},
    ];

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

    onSlide(e) {
        console.log(e.current.substr(-1))
    }

    onSubmit() {

        console.log(this.messageForm.value);
        // this.router.navigate(['']);
    }

    saveInDb() {
        console.log(this.skillOptions);
        let userId = _.get(this.dataService.UserData, '_id', '');
        console.log(userId);
        this.http.put('/api/merc-profile/' + userId, this.skillOptions).subscribe(data => {
            console.log(data);
            this.mercSkills = data;
            // this.router.navigate(['login']);
        })
    }


}
