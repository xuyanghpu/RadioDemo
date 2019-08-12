import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelStateComponent } from './channel-state.component';

describe('ChannelStateComponent', () => {
  let component: ChannelStateComponent;
  let fixture: ComponentFixture<ChannelStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
