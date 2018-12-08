import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators';
//import {Observable} from 'rxjs';


@Injectable()
export class TaskService{
    constructor(private http:HttpClient){
    console.log('Task service initialized...');
    }

    getTasks(){
        return this.http.get('https://192.168.1.33:5001/tasks');
    }
}
