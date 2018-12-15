import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsWarlordComponent } from './my-projects-warlord.component';

describe('MyProjectsWarlordComponent', () => {
  let component: MyProjectsWarlordComponent;
  let fixture: ComponentFixture<MyProjectsWarlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectsWarlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsWarlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
