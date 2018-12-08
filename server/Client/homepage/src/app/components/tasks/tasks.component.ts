import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service'
@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
    constructor(private taskService:TaskService){
        
    }
}
