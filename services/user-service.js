//CREAR LA FUNCIÓN PARA LISTAR USUARIOS

const listaUsuarios = ()=>fetch("https://64d1530eff953154bb7a40d9.mockapi.io/users").then((response)=>response.json());

export const servicesUsuario = {
    listaUsuarios,
}
