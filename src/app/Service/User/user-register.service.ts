import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserRegisterService{

  constructor(private http: HttpClient) {}


  userRegister(
    username: string,
    email:string,
    phoneNo:string,
    company:string,
    solution : string[]
      ){
    return this.http
    .post<any>('http://114.119.173.133:8080/insurtech/api/v1/userRegister',{
      username: username,
        email: email,
        phoneNo: phoneNo,
        company: company,
        solutionProducts: solution,
    })
    .pipe((res) =>{
      return res
    })
  }
    
 getSolutionProducts(solution : string[]){
  return this.http
  .get<any>('http://114.119.173.133:8080/insurtech/api/v1/solutionProducts' + solution,{

  })
  .pipe((res)=>{
    return res
  })
 } 
  }

  
   
    


