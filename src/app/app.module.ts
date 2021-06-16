import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateConditionComponent } from './create-condition/create-condition.component';
import { ConditionSelectionComponent } from './create-condition/condition-selection/condition-selection.component';
import { AdComponentHostDirective } from './ad-component-host.directive';
import { ConditionViewComponent } from './condition-view/condition-view.component';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ConditionNavigationComponent } from './condition-navigation/condition-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateConditionComponent,
    ConditionSelectionComponent,
    AdComponentHostDirective,
    ConditionViewComponent,
    ConditionListComponent,
    ConditionNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(//deepaktodo - remove it later when actual backend is used
      InMemoryDataService, { dataEncapsulation: false }
    ) 
  ],
  entryComponents: [ConditionSelectionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
