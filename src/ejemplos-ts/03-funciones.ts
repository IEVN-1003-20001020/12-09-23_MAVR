




function sumar():void{
    console.log(3+7);
    
}


sumar();

console.log(sumar)



function sumar2(a:number,b:number):number{
     return(a+b)
}
const resultado = sumar2(4,3)
console.log(resultado)



interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}


function calcular(mascota:Mascotas,x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}


const nuveaMascota:Mascotas={
    nombre: 'Miau',
    edad: 2,
    mostrarEdad():void{
        console.log('la edad es: ',this.edad);
    }
}

calcular(nuveaMascota,3);