import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  value!: string;

  nodes!: any[];

    selectedNodes: any;

    username: string = '';
    password: string = '';
    isAdmin: boolean = false;
  
    constructor(private router: Router) {}
  
    login() {
      // ตรวจสอบว่าชื่อผู้ใช้และรหัสผ่านถูกต้องสำหรับบัญชีผู้ดูแลระบบ (admin)
      if (this.username === 'ad2566' && this.password === 'ad6652') {
        this.isAdmin = true;
        // นำผู้ใช้ไปยังหน้าที่เหมาะสม (เช่นหน้าหลักของ admin)
        this.router.navigate(['/menu']);
      } else {
        // ถ้าไม่ใช่บัญชีผู้ดูแลระบบให้แจ้งเตือนผู้ใช้
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    }
}
