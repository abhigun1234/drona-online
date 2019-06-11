import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronahomeComponent } from './dronahome.component';

describe('DronahomeComponent', () => {
  let component: DronahomeComponent;
  let fixture: ComponentFixture<DronahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
