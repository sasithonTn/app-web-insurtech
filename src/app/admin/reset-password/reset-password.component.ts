import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  value!: string;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
    
  confirm(event: Event) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Are you sure that you want to ResetPassword?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'ระบบได้ส่งรหัสไปทางอีเมลล์ user แล้ว' });
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Cancel' });
          }
      });
  }
  

}
