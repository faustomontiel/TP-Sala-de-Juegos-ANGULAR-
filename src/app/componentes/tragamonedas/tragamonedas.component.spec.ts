import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TragamonedasComponent } from './tragamonedas.component';

describe('TragamonedasComponent', () => {
  let component: TragamonedasComponent;
  let fixture: ComponentFixture<TragamonedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TragamonedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TragamonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
