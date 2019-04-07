import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsubmitComponent } from './goalsubmit.component';

describe('GoalsubmitComponent', () => {
  let component: GoalsubmitComponent;
  let fixture: ComponentFixture<GoalsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
