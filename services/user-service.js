//CREAR LA FUNCIÓN PARA LISTAR USUARIOS

const listaUsuarios = ()=>fetch("http://localhost:3000/users").then((response)=>response.json());

export const servicesUsuario = {
    listaUsuarios,
}
