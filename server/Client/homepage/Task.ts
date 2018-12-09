import {Deserializable} from "Deserializable";


export class Task implements Deserializable{
    title: string;
    isDone: boolean;
   
    deserialize(input: any) {
        Object.assign(this, input)
        return this;
    }
}