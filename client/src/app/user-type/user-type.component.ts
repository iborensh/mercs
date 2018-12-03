import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  public isCollapsed = false;
  constructor() { }
  isHovering = false;
  isHovering2 = false;

  ngOnInit() {
  }


mouseHovering() {
    this.isHovering = true;
}
mouseLeft() {
    this.isHovering = false;
}

mouseHovering2() {
    this.isHovering2 = true;
}
mouseLeft2() {
    this.isHovering2 = false;
}

}
