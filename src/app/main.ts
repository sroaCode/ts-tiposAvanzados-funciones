import { faker } from '@faker-js/faker';
import { addProduct, products } from './product/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        title: faker.commerce.productName(),
        image: faker.image.abstract(),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number({
            min: 1,
            max: 10
        }),
        size: faker.helpers.arrayElement(['X','XL','S','L']),
        color: faker.commerce.color(),
        price: parseInt(faker.commerce.price()),
        categoryId : faker.datatype.uuid(),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElement()
    })
}

console.log(`Listado de productos : `);
console.log(products);


