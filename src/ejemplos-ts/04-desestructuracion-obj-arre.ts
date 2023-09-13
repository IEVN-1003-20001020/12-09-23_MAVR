



interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}


interface Detalles{
    cantante:string;
    year:number;
}


const reproductor:Reproductor={
    volumen: 90,
    segundos: 120,
    cancion: 'de  los besos que te di',
    detalles: {
        cantante: "Cristian Nodal",
        year:2019
    }
}

/*console.log(`el volumen es: ${reproductor.volumen}`);
console.log(`el cantante es: ${reproductor.detalles.cantante}`);*/


const{volumen,detalles}=reproductor
const{cantante}=detalles
console.log(`el volumen es: ${volumen}`);
console.log(`el cantante es: ${cantante}`);


const colores:string[]=['red','blue','green','balck'];

console.log(`Color1: ${colores[0]}`);
console.log(`Color1: ${colores[1]}`);
console.log(`Color1: ${colores[2]}`);
console.log(`Color1: ${colores[3]}`);

const[a,,,b] = colores;

console.log(`Color1: ${a}`);
console.log(`Color1: ${b}`);
