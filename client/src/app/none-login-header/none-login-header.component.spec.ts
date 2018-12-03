import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneLoginHeaderComponent } from './none-login-header.component';

describe('NoneLoginHeaderComponent', () => {
  let component: NoneLoginHeaderComponent;
  let fixture: ComponentFixture<NoneLoginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneLoginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
