import { Component, OnInit } from '@angular/core';
import {Student} from "./models/student";

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {

  title = 'Hello World!!!';

  constructor() {
    setTimeout(()=>{
      this.title = "hw4321";
    }, 5000);
  }

  ngOnInit(): void {

  }

  createUser(): Student {
    return new Student("Илья", "Гудима", "Алексеевич", new Date('July 20, 2000 00:00:00'), 4.5);
  }

}
