class Factura{
    constructor(id, fecha, productos, cliente) {
        this._id = id;
        this._fecha = fecha;
        this._productos = productos;
        this._cliente = cliente;
    }

    get getId(){
        return this._id;
    }

    get getFecha(){
        return this._fecha;
    }

    get getProductos(){
        return this._productos;
    }

    get getCliente(){
        return this._cliente;
    }

    set setId(numero){
        this._id = numero;
    }

    set setNombre(fecha){
        this._fecha = fecha;
    }

    set setProductos(productos){
        this._productos = productos;
    }

    set setCliente(cliente){
        this._cliente = cliente;
    }
}

export default Factura;