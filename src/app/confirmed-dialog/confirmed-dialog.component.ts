import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmed-dialog',
  templateUrl: './confirmed-dialog.component.html',
  styleUrls: ['./confirmed-dialog.component.css']
})
export class ConfirmedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef:MatDialogRef<ConfirmedDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog(){
   this.dialogRef.close();
  }

}