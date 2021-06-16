import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { CreateConditionComponent } from './create-condition/create-condition.component';
import { ConditionListComponent } from './condition-list/condition-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/createCondition', pathMatch: 'full'},
  {path: 'createCondition', component: CreateConditionComponent},
  {path: 'viewConditionList', component: ConditionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
