import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {itemToEdit: string}, public dialogRef: MatDialogRef<EditDialogComponent>) { }
  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close()
  }
}
