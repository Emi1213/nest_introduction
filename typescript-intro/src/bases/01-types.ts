export const name: string | number = "Emilia";
export const age: number = 24;
export const isActive: boolean = true;
export let lastname: string | number = "Gonzalez";

//No se puede reasignar el valor de una constante
//name = "Emilia";
//En typescript  no se puede asignar un tipo de dato diferente al que se declaro
//age = "24";

// lastname = true;

export const templateString = `Hola, ${name} ${lastname} (${age})`;
