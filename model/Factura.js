class Factura {
    constructor(id, fecha, productos, cliente) {
        this._id = id;
        this._fecha = fecha;
        this._productos = productos;
        this._cliente = cliente;
    }

    calcularFactura(tasaIVA) {
        console.log("Factura #" + this._id);
        console.log("Fecha:", this._fecha);
        console.log("Cliente:", this._cliente.getNombre, this._cliente.getApellido);
        console.log("\nProductos:");

        const precios = this._productos.map(prod => {
            const precio = parseFloat(prod.getPrecio);
            console.log(`- ${prod.getNombre}: $${precio.toLocaleString()}`);
            return precio;
        });

        const cantidadProductos = this._productos.length;

        const subtotal = precios.reduce((acc, precio) => acc + precio, 0);

        const impuesto = subtotal * (tasaIVA / 100);
        const total = subtotal + impuesto;

        console.log("\n");
        console.log("Total productos:", cantidadProductos);
        console.log("Subtotal: $" + subtotal.toLocaleString());
        console.log("IVA (" + tasaIVA + "%): $" + impuesto.toLocaleString());
        console.log("TOTAL: $" + total.toLocaleString());

        return { cantidadProductos, subtotal, impuesto, total };
    }
}

export default Factura;
