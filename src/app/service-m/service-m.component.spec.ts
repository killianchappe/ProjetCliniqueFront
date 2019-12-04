import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMComponent } from './service-m.component';

describe('ServiceMComponent', () => {
  let component: ServiceMComponent;
  let fixture: ComponentFixture<ServiceMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
