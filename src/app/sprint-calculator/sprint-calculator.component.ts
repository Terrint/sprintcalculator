import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent {
sprintSize="";
@Input() story:any=[];
sortedStories:any[]=[];
selectedStories:any[]=[];
@Output() clearStory=new EventEmitter();
@Output() generatedStories=new EventEmitter();
@Output() clearSprint=new EventEmitter();

clearStories():void{
  this.clearStory.emit();
}
clearSprintfn(): void{
  this.clearSprint.emit();
}
generatefn(storycalcForm: any): void{
  let storyPoint=0;
  let sprintPoint=storycalcForm.value.sprintSize;
  this.selectedStories=[];
  this.sortedStories=this.story.slice();
  this.sortedStories.sort(function(a: any, b: any) {return a.storyPoint - b.storyPoint});
  this.sortedStories.forEach((item: any)=>{
    if((item.storyPoint + storyPoint) <= (sprintPoint)){
    this.selectedStories.push(item);
    storyPoint = storyPoint + item.storyPoint;
    }
  });

  this.generatedStories.emit(this.selectedStories);
}
}
