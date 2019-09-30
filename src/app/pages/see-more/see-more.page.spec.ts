import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMorePage } from './see-more.page';

describe('SeeMorePage', () => {
  let component: SeeMorePage;
  let fixture: ComponentFixture<SeeMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
