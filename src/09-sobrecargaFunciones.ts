//La solucion

//Definimos la sobrecarga de metodos
export function parseStr (input : string): string[];
export function parseStr (input : string[]): string;
export function parseStr (input : number): boolean;

export function parseStr(input:unknown):unknown{
    if(Array.isArray(input)){
        return input.join(''); //[ ] -> string
    }else if (input === 'string'){
        return input.split(''); //string -> [ ]
    }else if (input === 'number'){
        return true;
    }
}



//--------------------------------------------------------------------------------------------------------------
    
//El problema

//Bases de la funcion - Lo que quiero es una funcion que al enviarle un string retorne un arreglo y luego al enviarle un arreglo que retorne un string
// Funcion -> string -> string[]
// Funcion -> string[] -> string

// export function parseStr(input: string | string[]): string | string[] {
//     if (Array.isArray(input)) {
//         return input.join(''); //[ ] -> string
//     } else {
//         return input.split(''); //string -> [ ]
//     }
// }

const returnArray = parseStr('sebas');
console.log(`returnArray = ${returnArray}`);

const returnString = parseStr(['s', 'e', 'b', 'a', 's', 'x']);
console.log(`returnString = ${returnString}`);

//El problema con esta forma de retornar valores de una funcion es que typescript no tiene forma de saber si estaos retornando un array o un string
//Si queremos operar la respuesta debemos hacer lo siguiente

if (Array.isArray(returnArray)) {
    returnArray.reverse(); //Funciones de array
}

if (returnString === 'string') {
    returnString.toLocaleLowerCase(); //Funciones de string
}