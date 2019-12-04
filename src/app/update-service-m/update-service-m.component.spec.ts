import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceMComponent } from './update-service-m.component';

describe('UpdateServiceMComponent', () => {
  let component: UpdateServiceMComponent;
  let fixture: ComponentFixture<UpdateServiceMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
