

export enum EmpType{
    Daily = 0,Permenent,PrtTime, Retired
}

export class Employee {
    id:number;
    name:string; 
    age:number;
    sal:number; 
    empType:string;
    DateOfjoining:Date;
    constructor(id:number, name:string, age:number, sal:number, TypeOfDuty:string, Doj:Date){
        this.id=id;
        this.name = name;
        this.age = age;
        this.sal = sal;
        this.empType = TypeOfDuty;
        console.log("Type of Employee",this.empType);
        
        this.DateOfjoining =Doj;
    }
}

