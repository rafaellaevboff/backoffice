import VueJwtDecode from 'vue-jwt-decode'

export function login(usuario){
    localStorage.setItem('token', usuario.token)
    localStorage.setItem('idUsuario', usuario.id)
}

export function getToken(){
    const token = localStorage.getItem('token')
    if(validaToken(token)) return token
    return null  
}

export function deleteToken(){
    localStorage.removeItem('token')
}

function validaToken(token){
    if(token){
        const decodeToken = VueJwtDecode.decode(token)
        const dataAtual = Date.now()
        if(dataAtual > (decodeToken.exp * 1000)) return false
        return true
    }else{
        return false
    }
    
}