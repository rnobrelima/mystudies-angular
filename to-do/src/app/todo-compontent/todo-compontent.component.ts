import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-todo-compontent',
  templateUrl: './todo-compontent.component.html',
  styleUrls: ['./todo-compontent.component.css']
})
export class TodoCompontentComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  todo = [];

  done = [];
  
  progress = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addItem(item: any) {
    this.todo.push(item);
  }

  removeItem(item: any) {
    console.log(item);
    let index = this.todo.indexOf(item)
    this.todo.splice(index,1)
  }

  editItem(index: any) {
    const dialogitem = this.dialog.open(EditDialogComponent, {data: {itemToEdit: index} });

    dialogitem.afterClosed().subscribe(result  => {
      console.log(result);
    })
  }
}



