import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColComponent } from './grid-col.component';

describe('GridColComponent', () => {
  let component: GridColComponent;
  let fixture: ComponentFixture<GridColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
