//Los parametros opcinales van al final
export const createProduct = (
    id: string | number,
    isNew? : boolean,
    stock?: number,
) =>{
    return {
        id,
        isNew: isNew || true,
        stock: stock || 10,
    }
}

// OJO - El operador ' | ' tiene problemas con los valores 'false', '0' y " ' ' "
// 0 === false
// '' === false
// false === false
// Por esa razon es mejer usar nullish-coaleshin (??)


const p1 = createProduct(1,false,2);
console.log(p1);


const p2 = createProduct(1,true);
console.log(p2);

export const createProductNullish = (
    id: string | number,
    isNew? : boolean,
    stock?: number,
) =>{
    return {
        id,
        isNew: isNew ?? true,
        stock: stock ?? 10,
    }
}

const p3 = createProductNullish(1,false,2);
console.log(p3);

const p4 = createProductNullish(1,true);
console.log(p4);