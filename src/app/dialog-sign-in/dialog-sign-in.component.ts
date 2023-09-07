import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sign-in',
  template: `
    <div class="dialog-container">
      <p>{{ data.message }}</p>
      <div class="close-button" (click)="closeDialog()">ปิด</div>
    </div>
  `,
  styleUrls: ['./dialog-sign-in.component.css'],
})
export class DialogSignInComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogSignInComponent>
  ) {}

  closeDialog() {
    // ในกรณีที่ต้องการปิด Dialog
    this.dialogRef.close();
  }
}
