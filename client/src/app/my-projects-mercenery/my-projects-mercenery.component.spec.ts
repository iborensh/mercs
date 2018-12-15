import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsMerceneryComponent } from './my-projects-mercenery.component';

describe('MyProjectsMerceneryComponent', () => {
  let component: MyProjectsMerceneryComponent;
  let fixture: ComponentFixture<MyProjectsMerceneryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectsMerceneryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsMerceneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
