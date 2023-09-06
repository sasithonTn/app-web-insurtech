import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterService } from 'src/app/Service/User/user-sign-in.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userRegisterService: UserRegisterService
  ) {}

  login() {
    // ตรวจสอบว่าช่อง username และ password ไม่ว่าง
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      // เรียกใช้งาน userSignIn จาก UserRegisterService
      this.userRegisterService
        .userSignIn(this.username, this.password).subscribe(
          (response) => {
            // ตรวจสอบผลลัพธ์ที่ได้จากการเรียก userSignIn
            if (response.username === this.username) {
              // ถ้ามีบัญชีผู้ใช้ในระบบ ตรวจสอบว่าเป็นบัญชีผู้ดูแลระบบหรือไม่
              if (this.username === 'ad2566' && this.password === 'ad6652') {
                // ถ้าเป็นบัญชีผู้ดูแลระบบ นำผู้ใช้ไปยังหน้าหลักของ admin
                this.router.navigate(['/menu']);
              } else {
                // ถ้าไม่ใช่บัญชีผู้ดูแลระบบ นำผู้ใช้ไปยังหน้าหลักของ user
                this.router.navigate(['/user']);
              }
            } else {
              // ถ้าไม่มีบัญชีผู้ใช้ในระบบ แจ้งเตือนผู้ใช้
              alert('บัญชีผู้ใช้ไม่ถูกต้อง');
            }
          },
          (error) => {
            console.error('เกิดข้อผิดพลาดในการตรวจสอบบัญชีผู้ใช้', error);
          }
        );
    } else {
      // แจ้งเตือนผู้ใช้ว่าช่อง username หรือ password ว่าง
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
    }
  }
}
