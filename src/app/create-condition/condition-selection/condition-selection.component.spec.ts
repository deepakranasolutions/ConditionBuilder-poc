import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionSelectionComponent } from './condition-selection.component';

describe('ConditionSelectionComponent', () => {
  let component: ConditionSelectionComponent;
  let fixture: ComponentFixture<ConditionSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
