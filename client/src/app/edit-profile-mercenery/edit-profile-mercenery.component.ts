import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-edit-profile-mercenery',
    templateUrl: './edit-profile-mercenery.component.html',
    styleUrls: ['./edit-profile-mercenery.component.scss']
})
export class EditProfileMerceneryComponent implements OnInit {

    constructor() {
    }

    percent = '75%';
    skills = [{"label": "Education", "value": "education", "percent": "30%"},
        {"label": "Certificate", "value": "certificate", "percent": "55%"},
        {"label": "Experience", "value": "experience", "percent": "12%"},
        {"label": "Projects", "value": "projects", "percent": "99%"}];

    ngOnInit() {
    }

}
