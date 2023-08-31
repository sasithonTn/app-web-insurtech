import { Component } from '@angular/core';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  cardInfolist: any = [
    { id: 1, cardName: 'Card5', img: '' },
    { id: 2, cardName: 'Card2', img: '' },
    { id: 3, cardName: 'Card3', img: '' },
    { id: 4, cardName: 'Card4', img: '' },
  ];

  ngOnInit(): void {
    console.log('aaaa');
  }
  viewPdf(img: string) {
    console.log(img);
    console.log('ViewPdf');
  }
}
