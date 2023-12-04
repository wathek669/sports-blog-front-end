import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCupEventComponent } from './word-cup-event.component';

describe('WordCupEventComponent', () => {
  let component: WordCupEventComponent;
  let fixture: ComponentFixture<WordCupEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCupEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
