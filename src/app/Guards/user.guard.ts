import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> {
    // ตรวจสอบสิทธิ์ของผู้ใช้
    if (this.authService.isUser()) {
      // ผู้ใช้เป็น User ให้ใช้งาน
      return true;
    } else {
      // ถ้าไม่ใช่ User ให้นำผู้ใช้ไปยังหน้าที่เหมาะสม
      this.router.navigate(['/menu']);
      return false;
    }
  }
}
