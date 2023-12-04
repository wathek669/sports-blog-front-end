import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MprovaComponent } from './mprova.component';

describe('MprovaComponent', () => {
  let component: MprovaComponent;
  let fixture: ComponentFixture<MprovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MprovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MprovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
