import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reward-complete-user',
  templateUrl: './reward-complete-user.component.html',
  styleUrls: ['./reward-complete-user.component.css']
})
export class RewardCompleteUserComponent {

  // myArray: any[] = [];
  // userName: string[] = [];
  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // // ดึงข้อมูลรางวัลที่ 1 จาก API
    // this.http.get<any>('URL_API').subscribe(data => {
    //   // นำข้อมูลมาใส่ใน myArray
    //   this.myArray = data.myArray;
    //   // นำข้อมูลผู้ได้รับรางวัลมาใส่ใน userName
    //   this.userName = data.userName;
    // });
  }

  myData = [
    { date: 'ผลรางวัล วันที่ 25/08/2566 เวลา 11:00 น'  , styleClass: 'p-button-secondary p-button-text' },
    // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
  ];
  myArray = [
      { label: 'รางวัลที่ 1 Samsung Galaxy Z Flip5'},
      { label: 'รางวัลที่ 1 Samsung Galaxy Z Flip5'}

    
  ];
  userName = [
    [
      'คุณชายเหมี่ยง ณ เชียงใหม่',
      'คุณชายเหมี่ยง ณ เชียงใหม่',
      'คุณชายเหมี่ยง ณ เชียงใหม่',

     
    ],
    [
      'คุณหญิงสุดา ณ กรุงเทพ',
      '0825555555'
    ],
    [
      'คุณชายสมพงษ์ ณ ชลบุรี',
      '0931234567'
    ],
    // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
  ];
  
  
  

}
