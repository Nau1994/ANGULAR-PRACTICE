import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppChildComponent } from './app-child/app-child.component';
import { InputComponent } from './input/input.component';
import { SlicePipe } from './pipes/slice.pipe';
import { RedElDirective } from './directives/red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    InputComponent,
    SlicePipe,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
