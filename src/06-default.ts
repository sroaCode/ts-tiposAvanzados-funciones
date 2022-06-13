
export const createProduct = (
    id: string | number,
    isNew : boolean = true, // asigna por defecto true;
    stock: number = 10, //asigna por defecto 10
) =>{
    return {
        id,
        isNew: isNew,
        stock: stock,
    }
}
const p1 = createProduct(1,false,2);
console.log(p1);

const p2 = createProduct(1,true);
console.log(p2);

const p3 = createProduct(12);
console.log(p3);