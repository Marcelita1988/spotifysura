//consumiendo apis con JS

//1. para donde vas (Almaceno en una variable la URI del servicio)
let URI="https://api.spotify.com/v1/artists/7An4yvF7hDYDolN4m5zKBp/top-tracks?market=US"

//2. Que vas hacer? (metodo HTTP)
let metodo="GET"

//3. Tenes permisos ? (Configurar peticiones)
let token="Bearer BQAqBavxFOeVDBDWUpYcLE7azLODmv773qEG7Ob8_vFRTzIabghxk0gzyNQV9bI3RLFBiQ_oRtyyPXoVsb2IUBr1BDrCjFsHrhzDF7WoY8pmL6JaL7Q"

let peticion={
    method:metodo,
    headers:{
        "Autorization":token
    }
}


//4. Vaya pues  traigame cositas (Promesa)