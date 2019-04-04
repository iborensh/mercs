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
  sorting = [{"label": "Sort by", "value": "sort_by", "options_type": "checkbox", "options":[{"label": "Recommended", "value": "recommended"},
      {"label": "Cheapest", "value": "cheapest"},
      {"label": "Star rating", "value": "star_rating"}
      ]},
      {"label": "Band People number", "value": "band_number", "options_type": "radio", "options":[{"label": "2", "value": 2},
              {"label": "3", "value": 3},
              {"label": "4", "value": 4},
              {"label": "5+", "value": "more"}
      ]},
  {"label": "Band has manager", "value": "manager", "options_type": "radio", "options":[
              {"label": "Yes", "value": true},
              {"label": "No", "value": false}
      ]}];

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
