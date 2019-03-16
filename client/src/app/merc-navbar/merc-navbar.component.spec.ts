import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercNavbarComponent } from './merc-navbar.component';

describe('MercNavbarComponent', () => {
  let component: MercNavbarComponent;
  let fixture: ComponentFixture<MercNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
