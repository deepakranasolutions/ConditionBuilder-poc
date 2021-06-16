import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-component-host]'
})
export class AdComponentHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
