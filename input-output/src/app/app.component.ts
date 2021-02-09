import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';
  variable: string =  '';
  textAlter = 'teste'



  alterText() {
    console.log(this.variable);
    this.textAlter = this.variable;

  }
}
