
export interface Task {
    id: string,
    titulo: string,
    descripcion: string,
    items: Item[]
}

export interface Item{
    nombre: string,
    completado: boolean
}