import { TestBed } from '@angular/core/testing';

import { AutentikasiGuard } from './autentikasi.guard';

describe('AutentikasiGuard', () => {
  let guard: AutentikasiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutentikasiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
