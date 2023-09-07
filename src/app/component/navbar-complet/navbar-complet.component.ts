import { Component,OnInit  } from '@angular/core';
import { MenuItem, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserRegisterService } from 'src/app/Service/User/user-register.service';

@Component({
  selector: 'app-navbar-complet',
  templateUrl: './navbar-complet.component.html',
  styleUrls: ['./navbar-complet.component.css'],
})
export class NavbarCompletComponent {
  items: MenuItem[];

  constructor(private router: Router,
    private userRegisterService: UserRegisterService
    ) {
    this.items = [
      {
        label: 'ChangPassword',
        icon: 'pi pi-key',
        routerLink: ['/change-password'],
      },

      {
        label: 'Contact',
        icon: 'pi pi-send',
        url: 'https://www.yipintsoi.com/ContactUs.html',
      },
      { separator: true },
      { label: 'Sign-out', icon: 'pi pi-sign-out', routerLink: ['/home-page'] },
    ];
  }
  ngOnInit() {
  }
}
