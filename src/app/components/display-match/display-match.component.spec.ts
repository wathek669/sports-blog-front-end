import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMatchComponent } from './display-match.component';

describe('DisplayMatchComponent', () => {
  let component: DisplayMatchComponent;
  let fixture: ComponentFixture<DisplayMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
