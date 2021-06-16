import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionNavigationComponent } from './condition-navigation.component';

describe('ConditionNavigationComponent', () => {
  let component: ConditionNavigationComponent;
  let fixture: ComponentFixture<ConditionNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
