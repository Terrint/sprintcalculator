import { Component,Output,EventEmitter,ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent {
story:{storyName: string,storyPoint: string}={storyName:" ",storyPoint:" "}
@Output() emitstory =new EventEmitter();
@ViewChild('storyName') Name: any;
onSubmit(storyForm: any):void
{
  let newStory={
    storyName:storyForm.value.storyName,
    storyPoint:storyForm.value.storyPoint
  }
  this.emitstory.emit(
    newStory
  );
  console.log(storyForm.value.storyName);
  console.log(storyForm.value.storyPoint);
  this.Name.nativeElement.value='';
  storyForm.value.storyPoint="";

}
}
