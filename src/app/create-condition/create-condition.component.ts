import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ConditionObject } from '../model/ConditionObject';
import { ConditionOperator } from '../model/ConditionOperator';
import { ConditionalRoutingService } from '../conditional-routing.service';
import { Observable } from 'rxjs';
import { Condition, SubCondition, SubConditionLeafBox, SubConditionGroupBox, SubConditionBox } from '../model/Condition';
import { AdComponentHostDirective } from 'src/app/ad-component-host.directive';
import { ConditionSelectionComponent } from './condition-selection/condition-selection.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-condition',
  templateUrl: './create-condition.component.html',
  styleUrls: ['./create-condition.component.scss']
})
export class CreateConditionComponent implements OnInit {

  //Anchor directive - place holder for any dynamic component replacement.
  @ViewChild(AdComponentHostDirective, {static: true}) adComponentHostDirective : AdComponentHostDirective;

  conditionObjectList$: Observable<ConditionObject[]> = this.conditionalRoutingService.getConditionObjects();
  conditionOperatorList$: Observable<any[]> = this.conditionalRoutingService.getConditionOperators();
  conditionValueList$: Observable<any[]> = this.conditionalRoutingService.getConditionValues();
  conditionJoinList$: Observable<any[]> = this.conditionalRoutingService.getConditionJoins();
  conditionActionList$: Observable<any[]> = this.conditionalRoutingService.getConditionActions();
  conditionResultList$: Observable<any[]> = this.conditionalRoutingService.getConditionResults();

  condition: Condition = new Condition();
  //subConditionList: Array<Array<SubCondition>> = this.condition.subConditionList;

  showActionAndResult: boolean = true;
  printCounter: any[] = new Array();
/*
  getSubConditionList(): SubCondition[] {
    return this.subConditionList = this.condition.subConditionList;
  }*/

  addOuterGroup(event): void{
    this.condition.addOuterGroup();
  }

  onAddGroup(event, parentBox): void {
    let box: SubConditionLeafBox = new SubConditionLeafBox();
    let newSubCondition: SubCondition = new SubCondition();
    box.addSubCondition(newSubCondition);
    this.condition.addNewBox(parentBox, box);
  }

  onAddRowInGroup(event, subConditionBox): void {
    const subCondition = new SubCondition();
    console.log(subConditionBox.id);
    this.condition.addSubCondition(subCondition, subConditionBox);
  }
  
  onRemoveRow(event, subConditionBox: SubConditionBox, subCondition: SubCondition): void {
    console.log('trying to remove - ' + subCondition.id);
    this.condition.removeSubCondition(subConditionBox, subCondition);
  }

  saveCondition(event, condition: Condition): void {
    var storage: Storage = localStorage;
    alert(JSON.stringify(condition));
    storage.setItem(condition.id, JSON.stringify(condition));
  }

  onChangeObject(value, subCondition): void {
    console.log(value);
    console.log(subCondition);
    //this.selectedSubCondition = subConditionOption;
    //selectedSubCondition.conditionObject = value;
    subCondition.conditionObject = value;
  }

  onChangeOperator(value, subCondition): void {
    subCondition.conditionOperator = value;
  }

  onChangeValue(value, subCondition): void {
    subCondition.conditionValue = value;
  }

  onChangeJoin(value, subCondition): void {
    //subCondition.conditionValue = value;
  }

  onChangeAction(value): void {
    this.condition.conditionAction = value;
  }

  onChangeResult(value): void {
    this.condition.conditionResult = value;
  }

  onClickJoin(box: SubConditionBox, value: string){
    box.setJoin(value);
  }
    

/*
  onPrintHello(): void {
    this.printCounter.push(new Condition());
  }*/
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private conditionalRoutingService: ConditionalRoutingService
  ) {
    
   }

  ngOnInit() { 
    /*
    //adding one condition-selection row on page load
    let newSubCondition11: SubCondition = new SubCondition();
    let newSubCondition12: SubCondition = new SubCondition();
    let sclb: SubConditionLeafBox = new SubConditionLeafBox();
    sclb.addSubCondition(newSubCondition11);
    //sclb.addSubCondition(newSubCondition12);
    this.condition.masterBox = sclb;
    */
/*
    let newSubCondition21: SubCondition = new SubCondition();
    let sclb2: SubConditionLeafBox = new SubConditionLeafBox();
    sclb2.addSubCondition(newSubCondition21);
    this.condition.masterBox.addChildBox(sclb2);
  */ 
  }

  
  

}
