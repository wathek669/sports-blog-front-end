import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTabComponent } from './head-tab.component';

describe('HeadTabComponent', () => {
  let component: HeadTabComponent;
  let fixture: ComponentFixture<HeadTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
