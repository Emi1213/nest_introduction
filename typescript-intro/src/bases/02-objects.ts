export const numbers = [1, 2, 3, 4, 5];
//no se puede agregar un string a un array de numeros
// numbers.push("jhbzd");
console.log(numbers);

// export const person = {
//   name: "oscar",
//   lastName: "gutierrez",
//   age: 32,
// };

export interface Person {
  name: string;
  lastName: string;
  age: number;
}

export const person: Person = {
  name: "oscar",
  lastName: "gutierrez",
  age: 32,
};
