import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserRegisterService {
  constructor(private http: HttpClient) {}

  userSignIn() {
    return this.http
      .get<any>('http://114.119.173.133:8080/insurtech/api/v1/user', {})
      .pipe((res: any) => {
        return res;
      });
  }
}
