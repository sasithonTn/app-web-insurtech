import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string | null = null;

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<boolean> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    try {
      const response = await this.http
        .get<any>('http://114.119.173.133:8080/insurtech/api/v1/user', {
          params,
        })
        .toPromise();

      // ตรวจสอบการตอบกลับจาก API ที่คุณใช้เพื่อตรวจสอบการล็อกอิน
      if (response && response.userEmail === email) {
        if (email === 'ad2566' && password === 'ad6652') {
          this.loggedInUser = 'admin';
        } else {
          this.loggedInUser = 'user';
        }
        return true;
      } else {
        this.loggedInUser = null;
        return false;
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการล็อกอิน', error);
      this.loggedInUser = null;
      return false;
    }
  }

  logout(): void {
    // นำผู้ใช้ออกจากระบบ
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
    return !!this.loggedInUser;
  }

  isAdmin(): boolean {
    // ตรวจสอบว่าผู้ใช้เป็น admin หรือไม่
    return this.loggedInUser === 'admin';
  }

  isUser(): boolean {
    // ตรวจสอบว่าผู้ใช้เป็น admin หรือไม่
    return this.loggedInUser === 'user';
  }
}
