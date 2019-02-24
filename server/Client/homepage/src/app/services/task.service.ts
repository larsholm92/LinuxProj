import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Task} from '../../../Task';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http'

const baseUrl = 'http://192.168.1.44:5000';

@Injectable()
export class TaskService{


    constructor(private http:HttpClient){
    console.log('Task service initialized...');
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(baseUrl+'/tasks');
               
    }

    addTask(newTask: Task): Observable<Task>{
        console.log('Adding task');
        console.log(newTask);
        var headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        headers.append('Access-Control-Allow-Methods', 'POST');
        console.log('after headers');
        return this.http.post<Task>(baseUrl+'/tasks/add', newTask);
         
     }
     
     deleteTask(id){
         console.log('id: ' + id);
         return this.http.delete(baseUrl+'/tasks/delete/'+id)
     }
}
