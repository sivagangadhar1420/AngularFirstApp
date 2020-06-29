import {Component, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';
@Component({
    selector:'my-sizer',
    template:`<label>FontSize is : {{size}}px</label><br><br>
    <button (click) = "increeFunn1(+1)" class="btn btn-success">AddSize</button>
    <button (click) = "decreeFunn1(-1)" class="btn btn-danger">ReduceSize</button>

    

    
    `
})
export class SizerComponent{
   @Input("sz") size:number = 10;
   @Output("szChange") sizeChange = new EventEmitter<number>();


    increeFunn1(rt:number){
   this.size += rt;  
        // this.size += rt;
             if(this.size > 40){
                 this.size = 40;
                }
                this.sizeChange.emit(this.size)
            }
                 
            decreeFunn1(rt:number){
                this.size += rt; 
                if(this.size < 8){
                    this.size = 8; 
                }
                this.sizeChange.emit(this.size)
            }
       
        }