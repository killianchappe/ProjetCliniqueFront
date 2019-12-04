import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceMComponent } from './add-service-m.component';

describe('AddServiceMComponent', () => {
  let component: AddServiceMComponent;
  let fixture: ComponentFixture<AddServiceMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
