//readonly : permite que algunas propiedades no se puedan sobre escribir
// ejemplo : El id es un ejemplo claro ya que este indicador normalmente lo asigna la base de datos

export interface BaseModel {
    readonly id:string,
    readonly createdAt: Date,
    updatedAt: Date
}