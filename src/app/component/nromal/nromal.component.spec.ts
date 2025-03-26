import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NromalComponent } from './nromal.component';

describe('NromalComponent', () => {
  let component: NromalComponent;
  let fixture: ComponentFixture<NromalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NromalComponent]
    });
    fixture = TestBed.createComponent(NromalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
