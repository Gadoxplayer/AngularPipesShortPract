import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ShortenPipe, 
    FilterPipe, ReversePipe, SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//=====Declarations are used to make directives
//Directives are defined as classes that can add new behavior to the elements in the template or modify existing behavior

//=====Imports makes the exported declarations of other modules available in the current module

//=====Providers are used to make services
//Services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app. 
//To be used by multiple components, a service must be made injectable. Services that are injectable and used by a component become 
//dependencies of that component.