export class DetailFactura {
    nombre: string;
    precio: number;
    cantidad: number;
    total:  number;

    constructor( factura ?: any ) {
        this.nombre = factura.nombre || "";
        this.precio = factura.precio || 0;
        this.cantidad = factura.cantidad || 0;
        this.total = factura.total || 0;
    }

}