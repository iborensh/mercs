import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import {Router} from '@angular/router';
    import {DataService} from "../data.service";
import {FormBuilder} from "@angular/forms";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  templateUrl: "../modals/course.html",
    styleUrls: ['../modals/course.css']
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-band-profile',
  templateUrl: './band-profile.component.html',
  styleUrls: ['./band-profile.component.scss']
})
export class BandProfileComponent implements OnInit {

    userId = _.get(this.dataService.UserData, '_id', '');
    user = this.dataService.UserData;
    character = '';
    bandSkills = {};
    data = {};
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient, private dataService: DataService, private modalService: NgbModal) {

  }
    // id = '';
    activate_ids = [];
    current = {"label": "Add member", "value": "add_member", "show": "users"};
  actions = [
        {"label": "Add member", "value": "add_member", "show": "users"},
        {"label": "Delete member", "value": "delete_member", "show": "users"},
        {"label": "Merge bands", "value": "merge_bands", "show": "bands"},
        {"label": "Look for band", "value": "look_for_band", "show": "bands"},
        {"label": "Projects", "value": "projects", "show": "projects"}];

  ngOnInit() {
      console.log('user_id', this.userId);
      let profile = _.get(this.dataService.UserData, 'profile', '');
        this.character = profile.character;
        console.log(profile);
        if (profile) {
            this.bandSkills = profile;
        }
        this.http.get('/api/user-bands/'+this.userId).subscribe(data => {
          this.data["bands"] = data;
          console.log('bands', data)
            },
            error => {
                console.log("Error", error);
            }
        );
        this.http.get('/api/users').subscribe(data => {
          this.data["users"] = data;
            },
            error => {
                console.log("Error", error);
            }
        );

      // this.id = this.route.snapshot.paramMap.get('id');
      // console.log(this.id)
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  static run_function(functionName){
      if (functionName == 'add_member'){

      }

  }

}
