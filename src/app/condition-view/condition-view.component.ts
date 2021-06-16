import { Component, OnInit, Input } from '@angular/core';
import { Condition } from '../model/Condition';

@Component({
  selector: 'app-condition-view',
  templateUrl: './condition-view.component.html',
  styleUrls: ['./condition-view.component.scss']
})
export class ConditionViewComponent implements OnInit {

  @Input()
  condition: Condition;


  constructor() { }

  ngOnInit() {
  }

}
