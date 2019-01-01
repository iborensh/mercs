import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandProfileComponent } from './band-profile.component';

describe('BandProfileComponent', () => {
  let component: BandProfileComponent;
  let fixture: ComponentFixture<BandProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
