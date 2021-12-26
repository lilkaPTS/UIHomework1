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
  beginStudent: any;

  students: Student[] = [
    new Student("Илья", "Гудима", "Алексеевич", new Date('2000-07-20'), 4.5),
    new Student("Ксения", "Кулагина", "Андреевна", new Date('2000-06-01'), 4.3),
    new Student("Дмитрий", "Войнов", "Сергеевич", new Date('2000-11-19'), 4.1),
    new Student("Иван", "Иванов", "Иванович", new Date('2000-10-24'), 4.1)
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.cFN);
  }

  addStudent(): void {
    this.students.push(new Student(this.cFN, this.cLN, this.cP, new Date(this.cDOB.toLocaleString()), this.cA));
    this.beginStudent = '';
    this.formClear();
  }

  deleteStudent(selectedStudent: Student): void {
    this.students = this.students.filter(obj => obj !== selectedStudent);
  }

  fillEdit(selectedStudent: Student): void {
    this.cFN = selectedStudent.firstName;
    this.cLN = selectedStudent.lastName;
    this.cP = selectedStudent.patronymic;
    this.cDOB = selectedStudent.dOB.toISOString().split('T')[0];
    this.cA = selectedStudent.average;
    this.beginStudent = selectedStudent;
  }

  editStudent(): void {
    if(this.beginStudent) {
      this.students[this.students.indexOf(this.beginStudent)] = new Student(this.cFN, this.cLN, this.cP, new Date(this.cDOB.toLocaleString()), this.cA);
      this.formClear();
    }
  }

  formClear(): void {
    this.cFN = undefined;
    this.cLN = undefined;
    this.cP = undefined;
    this.cDOB = undefined;
    this.cA = undefined;
  }
}
