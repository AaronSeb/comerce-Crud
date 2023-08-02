import { productoServices } from "../services/producto-service.js";

//TARJETA PARA ADMINISTRADOR QUE SE PUEDE EDITAR Y ELIMINAR
const crearTarjetaProducto = (url,categoria,nombre,precio,descripcion,id)=>{
    const tarjeta = document.createElement('div');
    tarjeta.classList.add("producto");
    console.log(tarjeta);
    const contend = `
        <img class="producto__img" src="${url}" alt="">
        <div class="contenedor_iconos">
            <a href="../screens/actualizarProducto.html?id=${id}"><img class="icon_edit" src="/assets/img/Vector(2).png" alt=""></a>
            <button type="button" class="btn_eliminar" id = "${id}" ></button>
        </div>
        <h2 class="producto__titulo">${nombre}</h2>
        <p class="producto__precio">$ ${precio}</p>
    `
    tarjeta.innerHTML = contend;

    //esto es para escuchar el botón borrar
    const btnEliminar = tarjeta.querySelector('.btn_eliminar');

    //PARA ELIMINAR UN PRODUCTO
    btnEliminar.addEventListener('click',()=>{      
        console.log("Dando click",id);
        productoServices.borrarProducto(id)
        .then()
        .catch((err=>console.log(err)));
    })
    
    return tarjeta;
}
//TARJETA QUE NO SE PUEDE EDITAR NI ELIMINAR
const crearTarjetaProducto2 = (url,categoria,nombre,precio,descripcion,id)=>{
    const tarjeta2 = document.createElement('div');
    tarjeta2.classList.add("producto");
    console.log(tarjeta2);
    const contend2 = `
        <img class="producto__img" src="${url}" alt="">
        <h2 class="producto__titulo">${nombre}</h2>
        <p class="producto__precio">$ ${precio}</p>
        <a class="producto__link" href="" id="${id}">Ver producto</a>
    `
    tarjeta2.innerHTML = contend2;
    
    return tarjeta2;
}

//PARA LISTAR UN PRODUCTO
const divJuegos = document.querySelector("[data-juegos]");
const divConsolas = document.querySelector("[data-consolas]");
const divDiversos = document.querySelector("[data-diversos]");
const todos = document.querySelector("[data-todos]")



const mandarLista = async()=>{
    try {
        const allProducts = await productoServices.listarProducto()
        if(todos){
            /* todos.innerHTML=''; */
            allProducts.forEach(({url,categoria,nombre,precio,descripcion,id})=>{
                const nuevatarjeta = crearTarjetaProducto(url,categoria,nombre,precio,descripcion,id)
                todos.appendChild(nuevatarjeta)
            });
        };
        if(divJuegos){
            /* divJuegos.innerHTML=""; */
            allProducts.filter(producto=>producto.categoria=='Juegos').forEach(({url,categoria,nombre,precio,descripcion,id})=>{
                const nuevatarjeta = crearTarjetaProducto2(url,categoria,nombre,precio,descripcion,id)
                divJuegos.appendChild(nuevatarjeta);
            })
        };
        if(divConsolas){
            /* divConsolas.innerHTML=""; */
            allProducts.filter(producto=>producto.categoria=='Consolas').forEach(({url,categoria,nombre,precio,descripcion,id})=>{
                const nuevatarjeta = crearTarjetaProducto2(url,categoria,nombre,precio,descripcion,id)
                divConsolas.appendChild(nuevatarjeta);
            })
        }
        if(divDiversos){
            /* divDiversos.innerHTML=""; */
            allProducts.filter(producto=>producto.categoria=='Diversos').forEach(({url,categoria,nombre,precio,descripcion,id})=>{
                const nuevatarjeta = crearTarjetaProducto2(url,categoria,nombre,precio,descripcion,id)
                divDiversos.appendChild(nuevatarjeta);
            })
        }

    } catch (error) {
        console.error("ocurrió un error",error)
    }
}

mandarLista();

/* productoServices.listarProducto()
.then((data)=>{
    data.forEach(({url,categoria,nombre,precio,descripcion,id}) => {
        const nuevaTarjeta = crearTarjetaProducto(url,categoria,nombre,precio,descripcion,id);
        divPadre.appendChild(nuevaTarjeta);
    });
}).catch((e)=>alert("ocurrió un error")); */



