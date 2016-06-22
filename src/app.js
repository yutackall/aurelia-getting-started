export class Welcom {
  heading = 'Welcom to Aurelia!';
  firstName = 'John';
  lastName = 'Doe';

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  submit() {
    alert(`Welcome, ${this.fullName}`)
  }
}
