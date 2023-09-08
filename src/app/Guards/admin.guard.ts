import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    // ตรวจสอบสิทธิ์ของผู้ใช้
    if (this.authService.isAdmin()) {
      // ผู้ใช้เป็น Admin ให้ใช้งาน
      return true;
    } else {
      // ถ้าไม่ใช่ Admin ให้นำผู้ใช้ไปยังหน้าที่เหมาะสม
      this.router.navigate(['/user']);
      return false;
    }
  }
}
