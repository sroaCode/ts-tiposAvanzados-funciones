//Llamamos a nuestro modelo de datos
import { Product } from './product.model'
import { createdAtProductoDto } from './product.dto'
import { faker } from '@faker-js/faker';

//Insertamos los productos en un arreglo typado de acuerdo a nuestro modelo de datos
export const products: Product[] = [];

//Funcion para insertar los datos
export const addProduct = (data: createdAtProductoDto) : Product => {
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.productName(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }
    products.push(newProduct);

    return newProduct;
}

export const updateProduct = (idProduct: string, date: Product) => {

}

export const deleteProduct = (idProduct: string) => {

}