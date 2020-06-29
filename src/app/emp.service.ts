import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from 'src/environments/environment';



// HttpClient
@Injectable()
export class EmpServices{
    constructor(private http: HttpClient){}
    getData(){
        return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=jurassic&page=1")
        // console.log('http:www.omdbapi.com?i=tt3896198&apikey=a9e6f133&s=jurassic@page=1');
    
        
    }

    
}