import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from "../data.service";
import * as _ from 'lodash';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from "../band-profile/band-profile.component";


@Component({
  selector: 'ngbd-modal-band-info',
  templateUrl: "../modals/band-info.html",
})
export class NgbdModalBandInfo {
    @Input() band;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
    currentRate = 8;
  constructor(private http: HttpClient, private dataService: DataService, private modalService: NgbModal) { }

  bands;
  users;
  /////////////////////   need to delete /////////////
  project = {
    "status" : "started",
    "paths" : [
        [
            "develop",
            "ecommerce",
            "website",
            "android"
        ]
    ],
    "project_name" : "good",
    "calculate" : true,
    "skills" : {
        "SW_General" : {
            "required_by" : [
                "application",
                "testing",
                "website",
                "game"
            ],
            "base_cost" : 3
        }
    },
    "content" : {
        "field" : [
            "ecommerce"
        ],
        "outcome" : [
            "website"
        ],
        "type" : [
            "develop"
        ],
        "time" : [
            "two weeks"
        ],
        "attributes" : [
            "android"
        ]
    },
    "user" : "5c0046688673b26b599f0771",
    "reward" : 100.0,
    "name" : "good"
};
  ////////////////////////////
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
      ////////////////////
      // this.project = this.dataService.ChosenProject;
      /////////////////////////////
      console.log(this.project);
      this.http.get('/api/band_with_users_data').subscribe(data => {
          this.bands = data;
            },
            error => {
                console.log("Error", error);
            }
        );
      this.http.get('/api/users').subscribe(data => {
          this.users = data;
            },
            error => {
                console.log("Error", error);
            }
        );
  }

  intToArray(num){
      return _.fill(Array(num), null);
  }

  openBandModal(band) {
    const modalRef = this.modalService.open(NgbdModalBandInfo, { size: 'lg' });
    modalRef.componentInstance.band = band;
  }


}
