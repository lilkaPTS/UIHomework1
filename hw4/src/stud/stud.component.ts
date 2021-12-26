import { Component, OnInit } from '@angular/core';
import {Student} from "./models/student";

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {

  cFN: any;
  cLN: any;
  cP: any;
  cDOB: any;
  cA: any;

  students: Student[] = [
    new Student("Илья", "Гудима", "Алексеевич", new Date('2000-07-20'), 4.5),
    new Student("Ксения", "Кулагина", "Андреевна", new Date('2000-06-01'), 4.3),
    new Student("Дмитрий", "Войнов", "Сергеевич", new Date('2000-11-19'), 4.1),
    new Student("Иван", "Иванов", "Иванович", new Date('2000-10-24'), 4.1)
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

  addStudent(): void {
    this.students.push(new Student(this.cFN, this.cLN, this.cP, new Date(this.cDOB.toLocaleString()), this.cA));
  }

  deleteStudent(selectedStudent: Student): void {
    this.students = this.students.filter(obj => obj !== selectedStudent);
  }

}
