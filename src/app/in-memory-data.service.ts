import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ConditionObject } from './model/ConditionObject';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const conditionObjectList: ConditionObject[] = 
    [ {name: "Questionnaire Level Tasks"}, 
      {name: "Answer Level Tasks"},
      {name: "Role"},
      {name: "Group"},
      {name: "Rep Attribute"},
      {name: "Group Attribute"},
      {name: "Contact Attribute"},
      {name: "Organization Attribute"},
      {name: "GGC Amount"},
      {name: "GGC Category"},
      {name: "Submitter"},
      {name: "Date of Event"}
    ];

    const conditionOperatorList: any[] = ["Equals To", "Not Equals To", "Contains"];

    const conditionValueList: any[] = ["Value1", "Value2", "Value3"];

    const conditionJoinList: any[] = ["None", "AND", "OR"];

    const conditionActionList: any[] = ["Route to Stage", "Change Flag"];

    const conditionResultList: any[] = ["Result1", "Result2", "Result3"];

    return {conditionObjectList, conditionOperatorList, conditionValueList, conditionJoinList, conditionActionList, conditionResultList};

  }
}
