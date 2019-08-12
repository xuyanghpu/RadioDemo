import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyStateComponent } from './frequency-state.component';

describe('FrequencyStateComponent', () => {
  let component: FrequencyStateComponent;
  let fixture: ComponentFixture<FrequencyStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
