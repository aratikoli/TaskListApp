import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true})userId!:string;
  @Output() close=new EventEmitter<void>();
  @Output() add=new EventEmitter<NewTaskData>();
  
   enterdTitle='';
   enterdSummary='';
   enterdDate='';
  private tasksService=inject(TasksService)
  onCancel(){
     this.close.emit();
  }
  onSubmit()
  {
    this.tasksService.addTask(
      {
        title:this.enterdTitle,
        summary:this.enterdSummary,
        date:this.enterdDate

      },'this.userId'
    );
    this.close.emit();

  }
}
