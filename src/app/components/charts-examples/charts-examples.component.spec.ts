import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsExamplesComponent } from './charts-examples.component';

describe('ChartsExamplesComponent', () => {
  let component: ChartsExamplesComponent;
  let fixture: ComponentFixture<ChartsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
