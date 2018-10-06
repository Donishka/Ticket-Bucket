import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFeesComponent } from './train-fees.component';

describe('TrainFeesComponent', () => {
  let component: TrainFeesComponent;
  let fixture: ComponentFixture<TrainFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
