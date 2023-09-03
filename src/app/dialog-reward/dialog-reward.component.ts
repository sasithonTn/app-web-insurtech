import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-reward',
  templateUrl: './dialog-reward.component.html',
  styleUrls: ['./dialog-reward.component.css'],
})
export class DialogRewardComponent {
  @Output() closeDialog = new EventEmitter<void>();

  close() {
    this.closeDialog.emit();
  }
}
