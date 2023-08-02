import { productoServices } from "../services/producto-service.js";
import { valida } from "../services/validacion.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServices.registrarProducto(url,categoria,nombre,precio,descripcion)
    .then(()=>{
        window.location.href="/screens/allProducts.html"
    })
    .catch((err)=>console.log(err))

})


//VALIDACIÓN DE LOS INPUTS
const inputs = document.querySelectorAll("input");
inputs.forEach((input)=>{
    input.addEventListener("blur",(input)=>{
        valida(input.target);
    })
})