import { servicesUsuario } from "../services/user-service.js";
import { valida } from "../services/validacion.js";

const formulario = document.querySelector("[data-login]");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
/* const btnEnviar = document.querySelector("#btnSubmit"); */


formulario.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const user = await validarUsers();
    try {
        if(user){
            window.location.href='/screens/allProducts.html'
        }else{
            alert("Usuario no reconocido");
            email.value="";
            password.value="";
        }
    } catch (error) {
        console.error("Ocurrió un error")
    }
    

})



const validarUsers = async()=>{
    const getUsers = await servicesUsuario.listaUsuarios();
    const validado = getUsers.find((user)=>user.email==email.value && user.password==password.value);
    
    return validado
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input)=>{
    input.addEventListener("blur",(input)=>{
        valida(input.target);
    })
})