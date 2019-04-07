import { TestBed, async, inject } from '@angular/core/testing';

import { GoallistGuard } from './goallist.guard';

describe('GoallistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoallistGuard]
    });
  });

  it('should ...', inject([GoallistGuard], (guard: GoallistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
