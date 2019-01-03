import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-band-profile',
  templateUrl: './band-profile.component.html',
  styleUrls: ['./band-profile.component.scss']
})
export class BandProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
    id = '';
  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id)
  }
}
