import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  buttons = [
      {"label": "New user? Sign up", "link": ["/user-type"], "class": "btn btn-default-red", "image": "merc.jpeg", "description": "this is description"},
      {"label": "Sign in", "link": ["/login"], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"},
      {"label": "Just looking", "link": ["home"], "class": "btn btn-default", "image": "merc3.jpeg", "description": "this is description"}
      ];
  userType = '';
  userData = this.dataService.UserData;

  ngOnInit() {
      this.userType = _.get(this.userData, 'userType', '');
      let userId = _.get(this.userData, '_id', '');
      if(this.userType === 'hire') {
          this.buttons = [
              {"label": "Hire group", "link": ["/user-type"], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"},
              {"label": "upload project", "link": ["/upload-project"], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"},
              {"label": "My projects", "link": ["/my-projects-warlord"], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"}
          ];
      }
          else if(this.userType === 'worker'){
          this.buttons = [
      {"label": "offer to project", "link": [""], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"},
      {"label": "edit profile", "link": ["/edit-profile-mercenery"], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"},
      {"label": "upload ready project", "link": [""], "class": "btn btn-default", "image": "merc2.jpeg", "description": "this is description"}
      ];

      }
  }

}
