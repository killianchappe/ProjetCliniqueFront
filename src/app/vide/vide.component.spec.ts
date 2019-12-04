import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideComponent } from './vide.component';

describe('VideComponent', () => {
  let component: VideComponent;
  let fixture: ComponentFixture<VideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
