import {Component, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-profile-mercenery',
    templateUrl: './edit-profile-mercenery.component.html',
    styleUrls: ['./edit-profile-mercenery.component.scss']
})
export class EditProfileMerceneryComponent implements OnInit {

    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    // images = ['/assets/images/software.jpeg', '/assets/images/hardware.jpeg', '/assets/images/software.jpeg'];
    constructor() {
    }

    percent = '75%';
    skills = [{"label": "Education", "value": "education", "percent": "30%"},
        {"label": "Certificate", "value": "certificate", "percent": "55%"},
        {"label": "Experience", "value": "experience", "percent": "12%"},
        {"label": "Job title", "value": "job_title", "percent": "12%"},
        {"label": "Projects", "value": "projects", "percent": "99%"}];

    ngOnInit() {
    }

}
