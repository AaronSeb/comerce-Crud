//AQUÍ SE CREAN TODOS MIS SERVICIOS Y SOLICITUDES HTTP

//PRIMERO PARA CREAR UN NUEVO PRODUCTO

const registrarProducto = (url,categoria,nombre,precio,descripcion)=>{
    return fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })
}


//PARA LISTAR UN PRODUCTO
const listarProducto = ()=>fetch("http://localhost:3000/productos").then((response)=>response.json());


//PARA BORRAR UN PRODUCTO
const borrarProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
    method:'DELETE'
    })
}

//PARA TRAER LOS DATOS DEL PRODUCTO EDITAR PARTE1
const detalleProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`)
    .then((respuesta)=>respuesta.json())
    .catch(err=>console.log("ocurrió un error",err));
}


//PARA ACTUALIZAR LOS DATOS

const actualizaProducto = (url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })
    .then((response)=>response)
    .catch(err=>console.log(err))
};




//METEMOS A UN OBJETO PARA EXPORTAR NUESTRAS FUNCIONES
export const productoServices = {
    registrarProducto,
    listarProducto,
    borrarProducto,
    detalleProducto,
    actualizaProducto
}