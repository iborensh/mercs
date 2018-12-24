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
      {"label": "New user? Sign up", "link": ["/user-type"], "class": "btn btn-default-red"},
      {"label": "sign in", "link": ["/login"], "class": "btn btn-default"},
      {"label": "default", "link": ["home"], "class": "btn btn-default"},
      {"label": "default", "link": ["home"], "class": "btn btn-default"},
      ];
  userType = '';
  userData = this.dataService.UserData;

  ngOnInit() {
      this.userType = _.get(this.userData, 'userType', '');
      let userId = _.get(this.userData, '_id', '');
      if(this.userType === 'hire') {
          this.buttons = [
              {"label": "Hire group", "link": ["/user-type"], "class": "btn btn-default"},
              {"label": "upload project", "link": ["/upload-project"], "class": "btn btn-default"},
              {"label": "My projects", "link": ["/my-projects-warlord"], "class": "btn btn-default"},
              {"label": "look for project to buy", "link": ["home"], "class": "btn btn-default"},
          ];
      }
          else if(this.userType === 'worker'){
          this.buttons = [
      {"label": "offer to project", "link": [""], "class": "btn btn-default"},
      {"label": "edit profile", "link": ["/edit-profile-mercenery"], "class": "btn btn-default"},
      {"label": "upload ready project", "link": [""], "class": "btn btn-default"},
      {"label": "default", "link": [""], "class": "btn btn-default"},
      ];

      }
  }

}
