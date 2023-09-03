import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-navbar-complet',
  templateUrl: './navbar-complet.component.html',
  styleUrls: ['./navbar-complet.component.css']
})
export class NavbarCompletComponent {
  items: MenuItem[];

  constructor(private messageService: MessageService) {
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
      { label: 'Sign-out', icon: 'pi pi-sign-out', routerLink: ['/home-page'] },
    ];
  }
  ChangePassword() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
}

delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
}

}
