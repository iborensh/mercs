import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {DataService} from "../data.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-band-profile',
  templateUrl: './band-profile.component.html',
  styleUrls: ['./band-profile.component.scss']
})
export class BandProfileComponent implements OnInit {

    userId = _.get(this.dataService.UserData, '_id', '');
    user = this.dataService.UserData;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient, private dataService: DataService) {

  }
    // id = '';
  ngOnInit() {
      // this.id = this.route.snapshot.paramMap.get('id');
      // console.log(this.id)
  }

}
