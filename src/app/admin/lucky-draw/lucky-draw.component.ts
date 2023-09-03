import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-draw',
  templateUrl: './lucky-draw.component.html',
  styleUrls: ['./lucky-draw.component.css'],
})
export class LuckyDrawComponent {
  showdialogreward: boolean = false;

  draw() {
    this.showdialogreward = true;
  }

  closeDialog() {
    this.showdialogreward = false;
  }
}
