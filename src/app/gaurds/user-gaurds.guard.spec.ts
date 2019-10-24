import { TestBed, async, inject } from '@angular/core/testing';

import { UserGaurdsGuard } from './user-gaurds.guard';

describe('UserGaurdsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGaurdsGuard]
    });
  });

  it('should ...', inject([UserGaurdsGuard], (guard: UserGaurdsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
