import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


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
    
  getSolutionProductTitles(){
    return this.http
      .get<any>('http://114.119.173.133:8080/insurtech/api/v1/solutionProducts',{
          
      })
      .pipe((res)=>{
        return res
      })
    
  }
  getUsername(email:string,password:string){
    return this.http
    .get<any>('http://114.119.173.133:8080/insurtech/api/v1/user?email= '+email+' &password= '+password+' ',{
         

    })
    .pipe((res)=>{
      return res
    })
  }

  }

  
   
    


