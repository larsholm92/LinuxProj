import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable()
export class TaskService{
    constructor(private http:HttpClient){
    console.log('Task service initialized...');
    }

    getTasks(){
        return this.http.get('http')
    }
}
