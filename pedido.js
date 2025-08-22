import Persona from './model/Persona.js';
import Producto from './model/Producto.js';
import Factura from './model/Factura.js';

const persona1 = new Persona(1, 'Mauricio', 'Rivero', '1984-01-02');
const producto1 = new Producto(1,'Nike Jordan Air', 1500000);
const producto2 = new Producto(2,'Nintendo Switch 2', 2000000);
const producto3 = new Producto(3,'NB 2000 Red Bull', 370000);

let productos = [producto1, producto2, producto3];

const factura1 = new Factura(1, '2025-08-19', productos, persona1);

factura1.calcularFactura(19);

