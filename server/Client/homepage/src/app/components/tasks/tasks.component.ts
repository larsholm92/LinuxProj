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
        console.log(newTask);
        let task = new Task;
        task.title = newTask.title;
        task.isDone = newTask.isDone;
        this.taskService.addTask(task).subscribe(receivedTask => {
        console.log('ReceivedTask: ' + receivedTask);
        Object.assign(task, receivedTask);
        });
        
        
        task.title = newTask.title;
        task.isDone = false;
        this.tasks.push(task);
        console.log('Element pushed: '+ task);
        
    }


    deleteTask(id){
        console.log('id in component: ' + id);
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(data => {
            for (var index = 0; index < tasks.length; index++){
                if(tasks[index]._id== id)
                {
                    tasks.splice(index, 1);
                }               
            } 
            
        });   
    }
}
