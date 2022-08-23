import { NgModule } from '@angular/core';

import { TimerComponent } from '../timer/timer.component';

@NgModule({
  declarations: [
    TimerComponent,
    
  ],
  exports: [
    TimerComponent
  ],
  
})
export class WidgetsModule { }
