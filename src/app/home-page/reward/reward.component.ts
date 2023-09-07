import { Component , OnInit} from '@angular/core';

interface Country {
  name: string,
  code: string
}
@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css'],
})
export class RewardComponent {
  date: Date | undefined;
  items!: string[][];
  
  ngOnInit() {
    this.items = Array.from({ length: 1000 }).map((_, i) =>
      Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`)
    );
  }
  myArray = [
    { label: 'ผลรางวัล วันที่ 25/08/2566 เวลา 11:00 น.' },
    { label: 'ผลรางวัลวันที่ 2' },
    { label: 'ผลรางวัลวันที่ 3' },
    { label: 'ผลรางวัลวันที่ 3' },
    { label: 'ผลรางวัลวันที่ 3' },
  ];
}
