import { USER, ROLES } from './01-enum';

//declaro el usaurio
const currentUSER: USER = {
  username: 'nicobytes',
  roles: ROLES.CUSTOMER
}

//Funcion para validar si tiene el rold de Admon
export const checkAdminroles = () => {
  if (currentUSER.roles === ROLES.ADMIN) {
    return true;
  }
  return false;
}

//Retorna flaso porque el current user tiene como rol customer
const rta = checkAdminroles();
console.log('checkAdminroles', rta);

//Validamos que roles tiene
export const checkroles = (roles1: string, roles2:string) => {
  if (currentUSER.roles === roles1) {
    return true;
  }
  if (currentUSER.roles === roles2) {
    return true;
  }
  return false;
}

//Enviamos parametro por parametro
const rta2 = checkroles(ROLES.ADMIN, ROLES.SELLER);
console.log('checkroles', rta2);

//Validarmos los roles poer array
export const checkrolesV2 = (roles: string[]) => {
  if (roles.includes(currentUSER.roles)) {
    return true;
  }
  return false;
}

//Enviamos los parametros como arreglos
const rta3 = checkrolesV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkrolesV2', rta3);

//Utilizamos rest-params 
export const checkrolesV3 = (...roles: string[]) => {
  if (roles.includes(currentUSER.roles)) {
    return true;
  }
  return false;
}

//Nos permite enviar 'n' cantidad de parametros
const rta4 = checkrolesV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkrolesV3', rta4);