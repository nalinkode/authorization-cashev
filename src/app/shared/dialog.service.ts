import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmedDialogComponent } from '../confirmed-dialog/confirmed-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog ) { }

  openConfirmedDialog(msg){
    rethis.dialog.open(ConfirmedDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message : msg
      }
    });
  }

}