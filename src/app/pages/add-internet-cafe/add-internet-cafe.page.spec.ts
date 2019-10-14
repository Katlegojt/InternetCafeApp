import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInternetCafePage } from './add-internet-cafe.page';

describe('AddInternetCafePage', () => {
  let component: AddInternetCafePage;
  let fixture: ComponentFixture<AddInternetCafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInternetCafePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInternetCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
