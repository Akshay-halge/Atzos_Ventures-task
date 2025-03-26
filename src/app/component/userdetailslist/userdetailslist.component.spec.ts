import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailslistComponent } from './userdetailslist.component';

describe('UserdetailslistComponent', () => {
  let component: UserdetailslistComponent;
  let fixture: ComponentFixture<UserdetailslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdetailslistComponent]
    });
    fixture = TestBed.createComponent(UserdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
