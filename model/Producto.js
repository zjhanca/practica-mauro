class Producto{
    constructor(id, nombre, precio) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
    }

    get getId(){
        return this._id;
    }

    get getNombre(){
        return this._nombre
    }

    get getPrecio(){
        return this._precio;
    }

    set setId(numero){
        this._id = numero;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    set setPrecio(numero){
        this._precio = numero;
    }
}

export default Producto;