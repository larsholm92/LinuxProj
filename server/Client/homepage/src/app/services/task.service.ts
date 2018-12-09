import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Task} from '../../../Task';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http'



@Injectable()
export class TaskService{


    constructor(private http:HttpClient){
    console.log('Task service initialized...');
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>('http://192.168.1.33:5001/tasks');
               
    }

    addTask(newTask){
        console.log('Adding task');
        console.log(newTask);
        var headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return this.http.post('http://192.168.1.33:5001/task', JSON.stringify(newTask),{headers:headers});
    }
}
