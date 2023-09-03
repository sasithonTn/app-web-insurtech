import { Component,ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel'; 


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  solutions = [{
    header: 'Cloud and Infrastructure Modernization',
    content: 'ยกระดับระบบโครงสร้างพื้นฐานทางด้าน IT ของธุรกิจ ผสานรวมระบบ Cloud และ On-Premises สู่ Hybrid Multi-Cloud'
   },{
    header: 'Solution2',
    content: 'Detail2'
   },{
    header: 'Solution3',
    content: 'Detail3'
   },{
    header: 'Solution4',
    content: 'Detail4'
   }]
   
   
   images: string[] = [
    'assets/images/giveaway winner.png',
    'assets/images/event.png'
  ];
  
  // สร้างอ้างอิงไปยัง Carousel โดยใช้ ViewChild
  @ViewChild('carousel') carousel!: Carousel;
   responsiveOptions: any[] | undefined;
  

  ngOnInit() {}
  
}
