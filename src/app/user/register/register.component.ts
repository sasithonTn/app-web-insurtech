import { Component } from '@angular/core';
import { UserRegisterService } from 'src/app/Service/User/user-register.service';
import { MessageService } from 'primeng/api'; // เพิ่มนี้เพื่อใช้งาน MessageService


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: any;
  email: any;
  PhoneNo: any;
  Company: any;
  
  isLoading: boolean = false;
  selectedSolution:number = 1 ;
  visible: boolean = false;
  solution: { name: string; code: string; }[];

  constructor(
    private userRegisterService: UserRegisterService,
    private messageService: MessageService // ใช้งาน MessageService
    
  ) { this.solution = [
    { name: 'Solution1', code: 'NY' },
    { name: 'Solution2', code: 'RM' },
    { name: 'Solution3', code: 'LDN' },
    { name: 'Solution4', code: 'IST' },
    { name: 'Solution5', code: 'PRS' },
  ];}
  ngOnInit(): void {
   
  }
  

  register(): void {
    if (this.username && this.email && this.PhoneNo && this.Company && this.selectedSolution) {
      this.userRegisterService.userRegister(
        this.username,
        this.email,
        this.PhoneNo,
        this.Company,
        this.selectedSolution
      ).subscribe(
        (res: any) => {
          
          this.messageService.add({severity: 'success', summary: 'ลงทะเบียนสำเร็จ', detail: 'คุณได้ 1 สิทธิ์ลุ้นรางวัล'});
          
        
        },
        (err: any) => {
          
          this.messageService.add({severity: 'error', summary: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล', detail: 'กรุณาลองใหม่อีกครั้ง'});
          console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
        }
      );
    } else {
      
      this.messageService.add({severity: 'error', summary: 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง'});
    }
  }
}
