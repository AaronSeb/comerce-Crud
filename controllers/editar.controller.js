import { productoServices } from "../services/producto-service.js";
import { valida } from "../services/validacion.js";

//OBTENER LOS DATOS
const obtieneProducto = async()=>{
    const urlGeneral = new URL(window.location);
    const id = urlGeneral.searchParams.get("id")
    
    if(id==null){
        console.log("error id es null")
    }

    const url = document.querySelector("[data-url]")
    const categoria = document.querySelector("[data-categoria]")
    const nombre = document.querySelector("[data-nombre]")
    const precio = document.querySelector("[data-precio]")
    const descripcion = document.querySelector("[data-descripcion]")

    try {
        const producto = await productoServices.detalleProducto(id)
        if(producto.url && producto.categoria && producto.nombre && producto.precio && producto.descripcion){
            url.value=producto.url;
            categoria.value=producto.categoria;
            nombre.value=producto.nombre;
            precio.value=producto.precio;
            descripcion.value=producto.descripcion;
        } else {
            throw new Error();
        }
    } catch (error) {
        console.log("error")
    }
}
obtieneProducto();

//ACTUALIZAR LOS DATOS
const formulario = document.querySelector("[data-form]");
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    const urlGeneral = new URL(window.location);
    const id = urlGeneral.searchParams.get("id")

    const url = document.querySelector("[data-url]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    productoServices.actualizaProducto(url,categoria,nombre,precio,descripcion,id)
    .then(()=>{
        window.location.href="/screens/allProducts.html"
    })

})

//VALIDACIÓN DE LOS INPUTS
const inputs = document.querySelectorAll("input");
inputs.forEach((input)=>{
    input.addEventListener("blur",(input)=>{
        valida(input.target);
    })
})
