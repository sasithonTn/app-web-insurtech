// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router'
import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username: string | null = null; // เริ่มต้นด้วยค่า null

 
  // constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   // ตรวจสอบว่ามีค่า 'username' ใน query parameters หรือไม่
    //   if (params.username) {
    //     this.username = params.username;
    //   }
    // });
  }
}
