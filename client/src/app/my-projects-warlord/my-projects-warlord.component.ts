import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from "../data.service";
import * as _ from 'lodash';


@Component({
  selector: 'app-my-projects-warlord',
  templateUrl: './my-projects-warlord.component.html',
  styleUrls: ['./my-projects-warlord.component.scss']
})
export class MyProjectsWarlordComponent implements OnInit {

  constructor(private http: HttpClient, private dataService: DataService) { }
    projects;
    userId = _.get(this.dataService.UserData, '_id', '');

  ngOnInit() {
      this.http.get('/api/projects/'+ this.userId).subscribe(data => {
          this.projects = data;
            },
            error => {
                console.log("Error", error);
            }
        );
  }

  deletFromList(id) {
      this.projects.remove()
  }

}
