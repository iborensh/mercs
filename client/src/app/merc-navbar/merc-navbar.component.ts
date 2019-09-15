import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-merc-navbar',
  templateUrl: './merc-navbar.component.html',
  styleUrls: ['./merc-navbar.component.scss']
})
export class MercNavbarComponent implements OnInit {

  constructor(private router: Router) { }
  band;
  ngOnInit() {
      this.band = _.includes(this.router.url, 'band')
  }

}
