import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { notifyguardGuard } from './notifyguard.guard';

describe('notifyguardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notifyguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
