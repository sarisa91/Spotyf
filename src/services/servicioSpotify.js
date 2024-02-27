//consumiendo apis con js

//1. Pa onde vas (almaceno en una variale la URI del servicio)
let URI="https://api.spotify.com/v1/artists/4N5fp4zhTsVITZTVfsXpc2/top-tracks?market=US"

//2. Que vas hacer? (metodo HTTP)
let metodo="GET"

//3. Tenes permisos? (Configurar peticiones)
let token="Bearer BQCLy_vX1S5lE7KnkUlMxatbrkCIR59_g9PjsXc2EM_UZT9nlryQupmWm2mcNegs3YYpIEoxFmMdgPa6Qwh4fXflTGc5s5kWIsrBZW-LwIiliyAoBYM"

let peticion={
    method:metodo,
    headers:{
        "Autorization":token
    }
}

//4. Vaya pues traigame cositas (Promesa)
