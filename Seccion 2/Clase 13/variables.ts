let nombre = "Hola"; // TS lo interpreta siempre como String y unicamente string

let string:string = "Hola"; //Tipado estatico
let int : number = 123;
let bool : boolean = true;

let polimorfismo : any;

polimorfismo = string;
polimorfismo = int;
polimorfismo = bool;

