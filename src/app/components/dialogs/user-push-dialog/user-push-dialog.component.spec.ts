import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPushDialogComponent } from './user-push-dialog.component';

describe('UserPushDialogComponent', () => {
  let component: UserPushDialogComponent;
  let fixture: ComponentFixture<UserPushDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPushDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPushDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
