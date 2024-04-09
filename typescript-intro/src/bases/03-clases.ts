export class Person {
  get imagenURL(): number {
    return 1;
  }
  public name: string;
  public lastName: string;
  //si se le pone la propiedad de radonly, no se puede modificar el valor de la propiedad ni si quiera en la misma clase
  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }

  scream() {
    console.log(`${this.name} ${this.lastName} is screaming`);
  }

  speack() {
    console.log(`${this.name} ${this.lastName} is speaking`);
  }
}

export const daniel = new Person("Daniel", "García");
daniel.scream();
daniel.speack();
