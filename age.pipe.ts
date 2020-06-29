import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'apipe'
})
export class AgePipe implements PipeTransform{
    transform(value:Date) : string{
        let dto=new Date().getTime();
        let dts = value.getTime();
        let dtt = dto - dts;  
        let odi =1000 * 60 * 60 * 24;
        let ys = Math.floor(dtt / (odi * 365));
        return  ys + " Yrs";


    }

}