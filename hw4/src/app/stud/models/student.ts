export class Student {

  private _firstName: string;
  private _lastName: string;
  private _patronymic: string;
  private _dOB: Date;
  private _average: number;

  constructor(firstName: string, lastName: string, patronymic: string, dOB: Date, average: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._patronymic = patronymic;
    this._dOB = dOB;
    this._average = average;
  }

  toStudentString(): string {
    return this.lastName
      .concat(" " + this.firstName)
      .concat(" " + this.patronymic)
      .concat(" " + this.dOB.toLocaleString().split(',')[0])
      .concat(" " + this._average);
  }



  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get patronymic(): string {
    return this._patronymic;
  }

  set patronymic(value: string) {
    this._patronymic = value;
  }

  get dOB(): Date {
    return this._dOB;
  }

  set dOB(value: Date) {
    this._dOB = value;
  }

  get average(): number {
    return this._average;
  }

  set average(value: number) {
    this._average = value;
  }
}
