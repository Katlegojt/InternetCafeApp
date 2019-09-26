import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedListPage } from './suggested-list.page';

describe('SuggestedListPage', () => {
  let component: SuggestedListPage;
  let fixture: ComponentFixture<SuggestedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
