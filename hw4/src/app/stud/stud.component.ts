import { Component } from '@angular/core';
import {Student} from "../models/student";
import {DialogService} from "../services/dialog.service";

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent{

  cFN: any;
  cLN: any;
  cP: any;
  cDOB: any;
  cA: any;
  beginStudent: any;
  search: any;
  dOBFilter: any;
  avgFilter: any;
  sortFlag: any;

  students: Student[] = [
    new Student("Илья", "Гудима", "Алексеевич", new Date('2000-07-20'), 4.5),
    new Student("Ксения", "Кулагина", "Андреевна", new Date('2000-06-01'), 4.3),
    new Student("Дмитрий", "Войнов", "Сергеевич", new Date('2000-11-19'), 4.1),
    new Student("Иван", "Иванов", "Иванович", new Date('2000-10-24'), 4.1)
  ];

  constructor(private dialog: DialogService) {}

  yesNoDialog(selectedStudent: Student) {
    this.dialog
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do this?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) {
          this.deleteStudent(selectedStudent);
        }
      });
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

  filterClear(): void {
    this.dOBFilter = undefined;
    this.avgFilter = undefined;
  }

  filter(sDob: Date, sAvg: number): boolean {
    return (this.dOBFilter && this.dOBFilter.toLocaleString() !== sDob.toISOString().split('T')[0]) || (this.avgFilter && this.avgFilter !== sAvg);
  }

  sortBy(fieldName: string): void {
    const bufArr: Array<any> = [];
    if(fieldName == "lastName") {
      this.students.forEach(s => bufArr.push(s.lastName));
    }
    if(fieldName == "firstName") {
      this.students.forEach(s => bufArr.push(s.firstName));
    }
    if(fieldName == "patronymic") {
      this.students.forEach(s => bufArr.push(s.patronymic));
    }
    if(fieldName == "dOB") {
      this.students.forEach(s => bufArr.push(s.dOB));
    }
    if(fieldName == "average") {
      this.students.forEach(s => bufArr.push(s.average));
    }
    bufArr.sort();
    this.sort(bufArr, fieldName);
  }

  sort(bufArr: Array<any>, fieldName: string): void {
    const resultArr: Student[] = [];
    for (let i = 0; i < bufArr.length; i++)
      for(const s of this.students) {
        let comparisonField: any = undefined;
        switch (fieldName) {
          case "lastName": {
            comparisonField = s.lastName;
            break;
          }
          case "firstName": {
            comparisonField = s.firstName
            break;
          }
          case "patronymic": {
            comparisonField = s.patronymic;
            break;
          }
          case "dOB": {
            comparisonField = s.dOB;
            break;
          }
          case "average": {
            comparisonField = s.average;
            break;
          }
        }
        if(comparisonField == bufArr[i] && !resultArr.find(x => x===s)){
          resultArr.push(s);
          break;
        }
      }
    if(!this.arrEquals(resultArr, this.students)){
      this.sortFlag = fieldName;
      this.students = resultArr;
    } else {
      this.sortFlag = 'r'.concat(fieldName[0].toUpperCase() + fieldName.slice(1));
      console.log(this.sortFlag);
      this.students.reverse();
    }
  }

  arrEquals(a1: Array<any>, a2: Array<any>): boolean {
    if(a1.length == a2.length) {
      for (let i = 0; i < a1.length; i++){
        if(a1[i] != a2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}
