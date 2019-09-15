import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsComponent } from './my-bands.component';

describe('MyBandsComponent', () => {
  let component: MyBandsComponent;
  let fixture: ComponentFixture<MyBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
