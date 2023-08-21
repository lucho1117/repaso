export class Factura {
    nombre: string;
    apellido: string;
    telefono: number
    nit: number;
    fecha: string;
    direccion: string;
    codigo: number;
    empleado: string;
    listItem: any;

    constructor( factura ?: any ) {
        this.nombre = factura.nombre || "";
        this.apellido = factura.apellido || "";
        this.telefono = factura.telefono || 0;
        this.nit = factura.nit || 0;
        this.fecha = factura.fecha || "";
        this.direccion = factura.direccion || " ";
        this.codigo = factura.codigo || 0;
        this.empleado = factura.empleado || "";
        this.listItem = this.listItem || [];
    }

}