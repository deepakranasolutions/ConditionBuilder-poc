import { Component, OnInit, Input, ElementRef, ComponentFactory, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ConditionObject } from '../../model/ConditionObject';
import { ConditionOperator } from '../../model/ConditionOperator';
import { ConditionalRoutingService } from '../../conditional-routing.service';
import { Observable } from 'rxjs';
import { Condition, SubCondition } from 'src/app/model/Condition';



@Component({
  selector: '[condition-selection]',
  templateUrl: './condition-selection.component.html',
  styleUrls: ['./condition-selection.component.css']
})
export class ConditionSelectionComponent implements OnInit {

  conditionObjectList$: Observable<ConditionObject[]> = this.conditionalRoutingService.getConditionObjects();
  conditionOperatorList$: Observable<any[]> = this.conditionalRoutingService.getConditionOperators();
  conditionValueList$: Observable<any[]> = this.conditionalRoutingService.getConditionValues();
  conditionJoinList$: Observable<any[]> = this.conditionalRoutingService.getConditionJoins();
  conditionActionList$: Observable<any[]> = this.conditionalRoutingService.getConditionActions();
  conditionResultList$: Observable<any[]> = this.conditionalRoutingService.getConditionResults();

  @Input() data: any;


  showActionAndResult: boolean = true;
  condition: Condition;
  subCondition: SubCondition;
 

  onChangeObject(value): void {
    console.log(value);
    console.log(this.subCondition);
    this.subCondition.conditionObject = value;
  }

  onChangeOperator(value): void {
    this.subCondition.conditionOperator = value;
  }

  onChangeValue(value): void {
    this.subCondition.conditionValue = value;
  }

  onChangeJoin(value): void {
    if(value != 'None'){
      this.showActionAndResult = false;
    }else{
      this.showActionAndResult = true;
    }
    
  }

  onChangeAction(value): void {
    this.condition.conditionAction = value;
  }

  onChangeResult(value): void {
    this.condition.conditionResult = value;
  }

  constructor(
    private conditionalRoutingService: ConditionalRoutingService,
    private hostElement: ElementRef
    
  ) { 
    console.log("dee ele ref - " + this.hostElement.nativeElement.outerHTML);
  }

  ngOnInit() {
    this.condition = this.data.condition;
    this.subCondition = this.data.subCondition;
  }
}
