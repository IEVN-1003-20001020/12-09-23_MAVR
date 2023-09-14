

import { calcularIVA2,Producto } from "./05-desestructura-funciones";


const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:1000
    },
    {
        desc:'Telefono2',
        precio:800
    },
    {
        desc:'Telefon31',
        precio:2000
    },

]

const [total,iva]=calcularIVA2(carrito);


console.log(`TOTAL: ${total}`);

console.log(`IVA: ${iva}`);