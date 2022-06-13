//Type
// NO se puede exteneder, las interfaces si se pueden extender
type Sizes = 'S' | 'L' | 'X' | 'XL' ;
type algo = string | number;
// type Product = {
//     id:string | number,
//     title: string,
//     createdAt: Date,
//     stock:number,
//     size?:Sizes
// }

//Interfaces:
// se utiliza para un conjunto de valores
// Se puden extender a diferencia de un type
interface Product {
    id:string | number,
    title: string,
    createdAt: Date,
    stock:number,
    size?:Sizes
}

const products : Product[] = [];

products.push({
    id:1,
    title: 'hola',
    createdAt : new Date(),
    stock: 1,
    size: 'X'
})

const addProduct = (data : Product) =>{
    products.push(data);
}