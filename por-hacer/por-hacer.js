const fs = require('fs');
let listadorPorHacer = [];

let guardarDB=()=>{

let data = JSON.stringify(listadorPorHacer);

fs.writeFile('db/data.json',data,(err)=>{
    if(err) throw new Error('no se pudo grabar',err);
})

}


let cargarDB=()=>{

try {
    listadorPorHacer =require('../db/data.json');
} catch (error) {
    listadorPorHacer = [];
}
    
    
}

const crear=(descripcion)=>{

     cargarDB();
let porHacer={
descripcion,
completado :false

};


listadorPorHacer.push(porHacer);

 guardarDB();

return porHacer;

}


let getListado=()=>{

listadorPorHacer =require('../db/data.json');

return listadorPorHacer;

}


const actualizar=(descripcion, completado =true)=>{
    cargarDB();

let index = listadorPorHacer.findIndex(tarea=>{
    return tarea.descripcion===descripcion
})

if(index >=0){
    listadorPorHacer[index].completado=completado;
    guardarDB();
    return true;
}else{
    return false;
}

}


const borrar=(descripcion)=>{
cargarDB();
let index= listadorPorHacer.findIndex(tarea=>{
    return tarea.descripcion ===descripcion;
})

if(index>=0){
    listadorPorHacer.splice(index,1);
    guardarDB();
    return true;
}else{
    return false;
}
}


/*
cargarDB();
let nuevoListado= listadorPorHacer.filter(tarea=>{
    return tarea.descripcion !==descripcion;
})

if(listadorPorHacer.length === nuevoListado.length){
    return false;
   
}else{
 
    listadorPorHacer= nuevoListado;
    guardarDB();
    return true;
}

*/



module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}