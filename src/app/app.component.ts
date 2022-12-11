import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stories: any = [{storyName:"test",storyPoint:2}];
  selectedStories: any=[];
  title='Sprintcalculator';
  emitstory(story: any): void{
    let isDuplicate = false;
    this.stories.forEach((item: any) => {
      if(item.storyName === story.storyName && item.storyPoint === story.storyPoint){
        isDuplicate=true;
      }
      
    });
    if(!isDuplicate)
    {
      this.stories.push(story)
    }
    else{
      alert("duplicate story entry")
    }
  }
    clearStory():void{
      this.stories=[];
    }
    generatedStories(stories:any[]):void{
      this.selectedStories=stories
    }
    clearSprint():void{
      this.selectedStories=[];
    }
  }

