import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  outPutText = "Default text Output";
  @Output() OutPutEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendOutPutEvent(item: string){
    this.OutPutEvent.emit(item);
  }

}
