import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLevelComponent } from './current-level.component';

describe('CurrentLevelComponent', () => {
  let component: CurrentLevelComponent;
  let fixture: ComponentFixture<CurrentLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
