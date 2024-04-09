export class Person {
  public name: string;
  public lastName: string;
  //si se le pone la propiedad de radonly, no se puede modificar el valor de la propiedad ni si quiera en la misma clase
  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

export const daniel = new Person("Daniel", "García");
