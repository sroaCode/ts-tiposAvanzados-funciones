//Definimos nuestro esquema de datos
//Hacemos uso de las otras interfaces para crear un modelo de datos mas complejo

import {Product} from './../product/product.model'
import {User} from './../users/user.model'
import {BaseModel} from './../base.model';

export interface Order extends BaseModel{
    products : Product[],
    user : User
}   