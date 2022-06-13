//Definimos nuestro esquema de datos
//Hacemos uso de las otras interfaces para crear un modelo de datos mas complejo

import { Category } from './../categories/categories.model';
import { BaseModel } from './../base.model';

export type Sizes = 'S' | 'L' | 'X' | 'XL';

export interface Product extends BaseModel {
    title: string,
    image: string,
    description: string,
    stock: number,
    size?: Sizes,
    color: string,
    price: number,
    category: Category,
    isNew: boolean,
    tags: string[],
}


