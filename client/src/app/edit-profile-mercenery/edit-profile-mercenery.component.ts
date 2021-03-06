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
    userId = _.get(this.dataService.UserData, '_id', '');
    user = this.dataService.UserData;
    character = '';
    imgeSrc = 'img_avatar.png';
    // userId = "5c2931824c3b21ef2ba44674";
    // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    // images = ['/assets/images/software.jpeg', '/assets/images/hardware.jpeg', '/assets/images/software.jpeg'];
    constructor(private formBuilder: FormBuilder, private http: HttpClient, public router: Router, private dataService: DataService) {
    }

    messageForm: FormGroup;
    mercSkills = {};
    current = 'user_class';
    public isCollapsed = false;
    peopleFaces = ['img_avatar.png', 'img_avatar2.png', 'people1.jpg', 'people3.jpg', 'people8.jpg', 'people9.jpg'];
    first = 0;
    skills = [
        {"label": "User class", "value": "user_class", "percent": "12%"},
        {"label": "Education", "value": "education", "percent": "30%"},
        {"label": "Work Experience", "value": "work", "percent": "12%"},
        {"label": "Online courses", "value": "online_courses", "percent": "55%"},
        {"label": "Projects", "value": "projects", "percent": "99%"}];

    skillOptions = {
        "job_title": [{"label": "Job title", "value": "job_title", "percent": "12%"},
            {"label": "Education", "value": "education", "percent": "30%"},
            {"label": "Certificate", "value": "certificate", "percent": "55%"}],
        "education": [
            // {"label": "usr_class", "value": "usr_class", "percent": "12%", "chosen": ""},
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
        "projects": [
            {"label": "Web name", "value": "web_name", "percent": "12%"},
            {"label": "Project name", "value": "project_name", "percent": "30%"},
            {"label": "Money", "value": "money", "percent": "55%"}],
        "online_courses": [
            {"label": "course type", "value": "course", "percent": "12%", "chosen": ""},
            {"label": "Web", "value": "web", "percent": "30%", "chosen": ""},
            {"label": "Hours", "value": "hours", "percent": "30%", "chosen": ""},
            {"label": "Link to certificate", "value": "certificate_link", "percent": "55%", "chosen": ""}
        ],
        "work": [
            // {"label": "usr_class", "value": "usr_class", "percent": "12%", "chosen": ""},
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
            "src": "assets/images/sw_general.png",
            "label": "Software developer",
            "value": "software developer",
            "color": "white",
            "explanation": "explain here if needed"
        },
        {
            "src": "assets/images/design_general.png",
            "label": "Designer",
            "value": "designer",
            "color": "white",
            "explanation": "explain if needed"
        },
        {
            "src": "assets/images/hw_general.png",
            "label": "hardware developer",
            "value": "hw",
            "color": "white",
            "explanation": "what???"
        },
    ];

    ngOnInit() {
        let profile = _.get(this.dataService.UserData, 'profile', '');
        this.character = profile.character;
        console.log(profile);
        if (profile) {
            this.mercSkills = profile;
        }
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

    addToList(type) {
        console.log(this.skillOptions);
        console.log('this.character', this.character);
        let character = this.character != undefined ? this.character : "";
        let newInformation = {};
        this.skillOptions[type].forEach(function (title) {
                newInformation[title.value] = title.chosen
            });
        this.http.put('/api/merc-profile/' + this.userId, {
            "character": this.character,
            "field": type,
            // "chosen": newInformation
            "chosen": this.skillOptions[type]
        }).subscribe(data => {
            console.log(data);
            this.mercSkills = data['profile'];
            // this.router.navigate(['login']);
        })
    }

    choose_character(character) {
        this.character = character;
        _.forEach(this.job_title, function (dict) {
            if(dict.value === character){
                dict.color = 'blue';
            }
            else {
                dict.color = 'white';
            }
        });
        console.log(this.job_title)
    }

    saveInDb() {
        console.log(this.skillOptions);
        // this.http.put('/api/merc-profile/' + this.userId, this.skillOptions).subscribe(data => {
        //     console.log(data);
        //     this.mercSkills = data['profile']['skills'];
        //     console.log(this.mercSkills);
        this.router.navigate(['band-profile']);
        // })
    }

    changeImageSrc(){
        if(this.first + 1 == this.peopleFaces.length){
            this.first=0;
        }
        else {this.first ++}
        this.imgeSrc = this.peopleFaces[this.first];

    }


}
