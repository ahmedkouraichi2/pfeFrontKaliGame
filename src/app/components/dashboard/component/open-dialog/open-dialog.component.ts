import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss'],
})
export class OpenDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<OpenDialogComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {}
}
