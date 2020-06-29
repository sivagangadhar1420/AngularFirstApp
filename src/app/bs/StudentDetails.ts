
export class StudentDetail {
    id:number;
    name:string; 
    age:number;
    sal:number; 
    department :string
    
    DateOfjoining:Date;
    constructor(id:number, name:string, age:number, salary:number, department:string){
        this.id=id;
        this.name = name;
        this.age = age;
        this.sal = salary;
        this.department= department;
       
    }
}
