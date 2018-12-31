import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from "../data.service";
import * as _ from 'lodash';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
    currentRate = 8;
  constructor(private http: HttpClient, private dataService: DataService) { }

  bands;
  project = {};

  ngOnInit() {
      this.project = this.dataService.ChosenProject;
      console.log(this.project);
      this.http.get('/api/bands').subscribe(data => {
          this.bands = data;
            },
            error => {
                console.log("Error", error);
            }
        );
  }

}
