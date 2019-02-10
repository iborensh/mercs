import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbovenavComponent } from './abovenav.component';

describe('AbovenavComponent', () => {
  let component: AbovenavComponent;
  let fixture: ComponentFixture<AbovenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbovenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbovenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
