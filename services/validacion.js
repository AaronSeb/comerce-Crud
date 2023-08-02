export const valida = (input)=>{
    const tipoDeInput = input.dataset.tipo;

    

    console.log(input.parentElement);
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
]

const mensajesDeError = {

    email : {
        valueMissing:"Este campo no puede estar vacío",
        typeMismatch:"El correo no es válido"
    },

    nombre : {
        valueMissing:"Este campo no puede estar vacío",
    },
    password : {
        valueMissing:"Este campo no puede estar vacío",
    },
    url : {
        valueMissing:"Este campo no puede estar vacío"
    },
    categoria : {
        valueMissing:"Este campo no puede estar vacío"
    },
    producto : {
        valueMissing:"Este campo no puede estar vacío"
    },
    precio : {
        valueMissing:"Este campo no puede estar vacío",
        typeMismatch:"sólo se permiten números"
    },


}

const mostrarMensajeDeError = (tipoDeInput,input)=>{
    let mensaje = "";
    tipoDeErrores.forEach((error)=>{
        if(input.validity[error]){
            console.log(tipoDeInput)
            console.log(tipoDeInput,error)
            console.log(input.validity[error])
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError [tipoDeInput][error]
        }
    })
    return mensaje
}