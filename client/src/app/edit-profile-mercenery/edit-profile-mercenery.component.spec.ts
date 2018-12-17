import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileMerceneryComponent } from './edit-profile-mercenery.component';

describe('EditProfileMerceneryComponent', () => {
  let component: EditProfileMerceneryComponent;
  let fixture: ComponentFixture<EditProfileMerceneryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileMerceneryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileMerceneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
