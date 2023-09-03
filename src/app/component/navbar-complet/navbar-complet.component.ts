import { Component } from '@angular/core';
import { MenuItem ,ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-complet',
  templateUrl: './navbar-complet.component.html',
  styleUrls: ['./navbar-complet.component.css']
})
export class NavbarCompletComponent {
  items: MenuItem[];

  constructor(private router: Router,
) {
    this.items = [
      {
        label: 'ChangPassword',
        icon: 'pi pi-key',
        routerLink: ['/change-password']
        // command: () => {
        //   this.ChangePassword();
        // },
      },
      
      { label: 'Contact', icon: 'pi pi-send', url: 'https://www.yipintsoi.com/ContactUs.html' },
      { separator: true },
      { label: 'Sign-out', icon: 'pi pi-sign-out', routerLink:['/home-page'] },

  //     {
  //       label: 'Sign-out',
  //       icon: 'pi pi-sign-out ',
  //       command: () => {
  //         this.showSignOutDialog(); // เรียกใช้งานฟังก์ชันเพื่อแสดง Dialog ยืนยันการออกจากระบบ
  //       },
       ];
  // }

  // showSignOutDialog() {
  //   this.confirmationService.confirm({
  //     message: 'ต้องการออกจากระบบ?',
  //     header: 'ยืนยัน',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       // ถ้าผู้ใช้กด "Yes" ให้นำผู้ใช้ไปยังหน้าหลัก
  //       this.router.navigate(['/home-page']);
  //     },
  //     reject: () => {
  //       // ถ้าผู้ใช้กด "No" ไม่ต้องทำอะไร
  //     }
  //   });
  // }
  
    }
}
