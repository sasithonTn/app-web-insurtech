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
  selectedSolution!: string[];
  visible: boolean = false;
  solution: { name: string; code: string }[];

  constructor(
    private userRegisterService: UserRegisterService,
    private messageService: MessageService
  ) {  this.solution = [];
  }

  ngOnInit(): void {
    // เรียกใช้งาน userRegisterService เพื่อดึงข้อมูล solution จาก API
    // this.userRegisterService.getSolutionProducts().subscribe(
    //   (res: any) => {
    //     // สำเร็จ: กำหนดค่าข้อมูล solution จาก API
    //     this.solution = res.data;
    //   },
    //   (err: any) => {
    //     // เกิดข้อผิดพลาด: แสดงข้อความผิดพลาดหรือจัดการตามที่ต้องการ
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'เกิดข้อผิดพลาดในการดึงข้อมูล solution',
    //       detail: 'กรุณาลองใหม่อีกครั้ง',
    //     });
    //     console.error('เกิดข้อผิดพลาดในการดึงข้อมูล solution:', err);
    //   }
    // );
  }

  register(): void {
    if (
      this.username &&
      this.email &&
      this.PhoneNo &&
      this.Company &&
      this.selectedSolution
    ) {
      this.userRegisterService
        .userRegister(
          this.username,
          this.email,
          this.PhoneNo,
          this.Company,
          this.selectedSolution
        )
        .subscribe(
          (res: any) => {
            // บันทึกข้อมูลสำเร็จ กำหนด visible เป็น true เพื่อแสดง p-dialog
            this.visible = true;
            this.messageService.add({
              severity: 'success',
              summary: 'ลงทะเบียนสำเร็จ',
              detail: 'คุณได้ 1 สิทธิ์ลุ้นรางวัล',
            });
          },
          (err: any) => {
            this.messageService.add({
              severity: 'error',
              summary: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล',
              detail: 'กรุณาลองใหม่อีกครั้ง',
            });
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
          }
        );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง',
      });
    }
  }
}
