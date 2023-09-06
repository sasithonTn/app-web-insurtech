import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserRegisterService {
  constructor(private http: HttpClient) {}

  userSignIn(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(
      'http://114.119.173.133:8080/insurtech/api/v1/user',
      { params }
    );
  }
}
