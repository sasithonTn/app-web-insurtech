import { Component } from '@angular/core';
import { UserRegisterService } from 'src/app/Service/User/user-register.service';
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignInComponent } from 'src/app/dialog-sign-in/dialog-sign-in.component';
import { HttpResponse } from '@angular/common/http';

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
  anotherVisible: boolean = false;
  fullVisible: boolean = false;
  solution: string[] = [];

  constructor(
    private userRegisterService: UserRegisterService,
    private messageService: MessageService,
    private dialog: MatDialog
  ) {
    this.solution = [];
  }

  ngOnInit(): void {
    this.getSolutionTitle();
  }

  getSolutionTitle() {
    this.userRegisterService.getSolutionProductTitles().subscribe({
      next: (res: any) => {
        this.solution = res;
      },
      complete: () => {
        console.log(this.solution);
      },
    });
  }
  register(): void {
    let solutionTitle : string[] = []
    this.selectedSolution.map((value: any)=>{
    return  solutionTitle.push(value.solutionProductTitle)

    })
    // const solutionTitle: string[] = this.selectedSolution.map(
    //   (value: any) => value.solutionProductTitle
    // );

    console.log('selectSolu', this.selectedSolution);
    if (
      this.username &&
      this.email &&
      this.PhoneNo &&
      this.Company &&
      solutionTitle
    ) {
      this.userRegisterService
        .userRegister(
          this.username,
          this.email,
          this.PhoneNo,
          this.Company,
          solutionTitle
        )
        .subscribe(
          (res: HttpResponse<any>): void => {
            const username = (Response as any).userUsername;
            this.userRegisterService.setUsername(username); 
            console.log('บันทึกข้อมูล');
            this.visible = true;
          },
          (err: any) => {
            // this.openDialog('อีเมลล์นี้ลงทะเบียนแล้ว กรุณาเข้าสู่ระบบ');
            this.anotherVisible = true;
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
          }
        );
    } else {
      this.fullVisible = true;
      console.error('กรอกข้อมูลให้ครบถ้วน:');

    }
  }

}
