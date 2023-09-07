import { Component } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-reward',
  templateUrl: './dialog-reward.component.html',
  styleUrls: ['./dialog-reward.component.css'],
})
export class DialogRewardComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Input() showCloseButton = true;

  prizes: any[] = [
    {
      position: 1,
      name: 'Samsung Galaxy Z Flip5',
      winners: [{ username: 'user1', lastname: 'lastname1' }],
    },
    {
      position: 2,
      name: 'Samsung Galaxy Z Flip5',
      winners: [
        { username: 'user3', lastname: 'lastname3' },
        { username: 'user4', lastname: 'lastname4' },
      ],
    },
    {
      position: 3,
      name: 'Samsung Galaxy Z Flip5',
      winners: [
        { username: 'user5', lastname: 'lastname5' },
        { username: 'user6', lastname: 'lastname6' },
        { username: 'user7', lastname: 'lastname7' },
      ],
    },
  ];

  close() {
    this.closeDialog.emit();
  }
}
