import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationStateComponent } from './evaluation-state.component';

describe('EvaluationStateComponent', () => {
  let component: EvaluationStateComponent;
  let fixture: ComponentFixture<EvaluationStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
