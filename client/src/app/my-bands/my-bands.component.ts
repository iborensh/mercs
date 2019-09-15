import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";


@Component({
  selector: 'app-my-bands',
  templateUrl: './my-bands.component.html',
  styleUrls: ['./my-bands.component.scss']
})
export class MyBandsComponent implements OnInit {

  constructor(private dataService: DataService) { }
    myBands;
  ngOnInit() {
      this.myBands = this.dataService.UserData.bands
  }

}
