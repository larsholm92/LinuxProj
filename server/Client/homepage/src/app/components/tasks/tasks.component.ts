import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../../../homepage/Task';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
    tasks: Task[];
    title: string;



    constructor(private taskService:TaskService){
        console.log(this.tasks);
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
            console.log(this.tasks);
        })

           
    }

    addTask(event){
        event.preventDefault();
        console.log(this.title);
        var newTask = {
            title: this.title,
            isDone: false
        }

        this.taskService.addTask(newTask)
        .subscribe(task => {
            this.tasks.push(task);
            this.title = '';
        })
    }
}
