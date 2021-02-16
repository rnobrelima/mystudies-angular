import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';
  inputvalue: string;
  outPutValue = "";
  Items: any[] = [];


  receiveOutput(item: string) {
    this.outPutValue = item
    this.Items.push(item)
  }
}
