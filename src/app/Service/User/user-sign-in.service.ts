import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserRegisterService {
  constructor(private http: HttpClient) {}

  // เพิ่มฟังก์ชัน userSignIn ในคลาส UserRegisterService
  userSignIn(username: string, password: string) {
    // ส่งคำขอ HTTP GET เพื่อตรวจสอบบัญชีผู้ใช้
    return this.http.get<any>(
      'http://114.119.173.133:8080/insurtech/api/v1/user',
      {
        params: {
          username: username,
          password: password,
        },
      }
    );
  }
}
