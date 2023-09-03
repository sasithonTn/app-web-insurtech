import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

interface Solution {
  name: string;
  code: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  solution!: Solution[];

  selectedSolution!: Solution[];
  visible: boolean = false;

  // constructor(private yourDataService: YourDataService) {} // แทน YourDataService ด้วยชื่อของแหล่งข้อมูลของคุณ
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    //  // รับข้อมูลจากแหล่งข้อมูลและกำหนดให้กับ solution
    //  this.yourDataService.getCities().subscribe((data: City[]) => {
    //   this.solution = data;
    // });
    this.solution = [
      { name: 'Solution1', code: 'NY' },
      { name: 'Solution2', code: 'RM' },
      { name: 'Solution3', code: 'LDN' },
      { name: 'Solution4', code: 'IST' },
      { name: 'Solution5', code: 'PRS' },
    ];
  }

  showDialog() {
    this.visible = true;
  }
}
