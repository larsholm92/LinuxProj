import {Deserializable} from "Deserializable";


export class Task implements Deserializable{
    title: string;
    isDone: boolean;
    _id:number;
    
    

    deserialize(input: any) {
        console.log("input is: "+ input)
        Object.assign(this, input)
        return this;
    }
 
    
}