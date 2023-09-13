



interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}




const alumno:Alumno={
    matricula:20001020,
    nombre: 'Milton',
    email: 'Milton@gmail.com',
    edad:23 
}


let mascotas=['perro','gato','perico']

mascotas[1]='Otro gato';

mascotas.push('perico verde')
console.table(mascotas)


let nuevoArre:(number|string)[]=[]

nuevoArre.push('RCR');
nuevoArre.push(223344);
