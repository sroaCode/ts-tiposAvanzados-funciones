import { JsxEmit } from "typescript";

//recibe cualquier valor en la variable - no controla el tipado
let anyVar :any;

anyVar = 'str';

//En la ultima asignacion anyVar es un string, pero aun asi permite asignar su valor a una variable booleana
let isNew:boolean = anyVar;

anyVar.isla(); //le puedo asignar una funcion que no existe


// ---------- variables unknow --------------

let unknowVar : unknown;
unknowVar = 'str';

//Valida que la funcion exista o que sea correcta para el tipo de dato
//Ademas para usar la variable debo validar primero su tipo

if(typeof(unknowVar) === 'string'){

    unknowVar.toUpperCase();

}

// Permite definir que tipo de dato voy a retornar para controlar despues que hacer segun el tipo de dato retornado (string,json,number)
const parseJsontoString = (str : string):unknown =>{
    return JSON.parse(str);
}

if(typeof(parseJsontoString) === 'string'){
    console.log('No Se ha convertido correctamente a json');
}



