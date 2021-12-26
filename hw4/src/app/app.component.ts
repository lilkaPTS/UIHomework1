import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hw4321';
  constructor() {
    setTimeout(()=>{
      this.title = "Changed!!";
    }, 5000);
  }
}
