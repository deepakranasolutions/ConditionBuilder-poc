import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ConditionObject } from './model/ConditionObject';
import { Condition } from 'selenium-webdriver';
import { createHostListener } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionalRoutingService {

  private urlGetConditionObjectList = 'api/conditionObjectList';
  private urlGetConditionOperatorList = 'api/conditionOperatorList';
  private urlGetConditionValueList = 'api/conditionValueList';
  private urlGetConditionJoinList = 'api/conditionJoinList';
  private urlGetConditionActionList = 'api/conditionActionList';
  private urlGetConditionResultList = 'api/conditionResultList';

  constructor(
    private http: HttpClient
  ) { }

  getConditionObjects(): Observable<ConditionObject[]> {
    return this.http.get<ConditionObject[]>(this.urlGetConditionObjectList);
  }

  getConditionOperators(): Observable<any[]> {
    return this.http.get<ConditionObject[]>(this.urlGetConditionOperatorList);
  }

  getConditionValues(): Observable<any[]> {
    return this.http.get<ConditionObject[]>(this.urlGetConditionValueList);
  }

  getConditionJoins(): Observable<any[]> {
    return this.http.get<ConditionObject[]>(this.urlGetConditionJoinList);
  }

  getConditionActions(): Observable<any[]> {
    return this.http.get<ConditionObject[]>(this.urlGetConditionActionList);
  }

  getConditionResults(): Observable<any[]> {
    return this.http.get<ConditionObject[]>(this.urlGetConditionResultList);
  }
}
