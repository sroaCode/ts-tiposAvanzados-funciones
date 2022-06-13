import { Category } from '../categories/categories.model';
import {Product} from './product.model'

//Me permite crear productos sin estos datos
export interface createdAtProductoDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}

//Me permite elegir los campos que quiero capturar
export interface example extends Pick<Product, 'color' | 'description'>{
    
}