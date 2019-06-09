
const descripcion ={
    demand:true,
        alias:'d'
}

const completado ={
    alias:'c',
        default:true
}

const argv = require('yargs')
.command('crear','crear un elemento por hacer',{
    descripcion
})
.command('actualizar','Actualizar el estado completado de una tarea',{

    descripcion,
    completado

})
.command('borrar','Borar el una tarea del listado de tarea',{
    descripcion
})
.help()
.argv;






module.exports={
    argv
}