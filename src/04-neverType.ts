//Never detiene el programa, porque si no se ejecuta infinito ejemplo throw

//Si nos paramos sobre wiithoutEnd vemos que retorna Never, quiere decir que nunca va a terminar
const wiithoutEnd = () =>{
    while (true){
        console.log('nunca parar de aprender');
    }
}

//Si nos paramos sobre fail vemos que retorna Never, quiere decir que nunca va a terminar
const fail = (message : string) => {
    throw new Error(message);
}

const example = (input : unknown) =>{
    if(typeof(input) === 'string'){
        return (`input es de tipo string = ${input}`)
    }else if (Array.isArray(input)){
        return (`input es de tipo array = ${input}`)
    }
    return fail('no hizo nada');
}


console.log(example('Hola'));
console.log(example([1,2,3]));
console.log(example(1)); //se detiene
console.log(example('Hola Fail'));