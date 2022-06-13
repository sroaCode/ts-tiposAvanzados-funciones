//Listado de roles
export enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

export type USER = {
    username: string,
    roles: ROLES,
}

export const nicoUser: USER = {
    username: 'sebas',
    roles: ROLES.ADMIN
}