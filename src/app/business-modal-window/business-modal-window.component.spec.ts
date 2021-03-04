import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessModalWindowComponent } from './business-modal-window.component';

describe('BusinessModalWindowComponent', () => {
  let component: BusinessModalWindowComponent;
  let fixture: ComponentFixture<BusinessModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
