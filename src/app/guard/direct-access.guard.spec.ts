import { TestBed, async, inject } from '@angular/core/testing';

import { DirectAccessGuard } from './direct-access.guard';

describe('DirectAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectAccessGuard]
    });
  });

  it('should ...', inject([DirectAccessGuard], (guard: DirectAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
