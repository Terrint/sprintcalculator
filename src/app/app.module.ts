import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { SprintComponent } from './sprint/sprint.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    SprintCalculatorComponent,
    SprintComponent,
    AddStoryComponent
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
