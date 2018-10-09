import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsChartComponent } from './levels-chart.component';

describe('LevelsChartComponent', () => {
  let component: LevelsChartComponent;
  let fixture: ComponentFixture<LevelsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
