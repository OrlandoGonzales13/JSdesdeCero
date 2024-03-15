let palabraOculta = 'javascript';
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta){
    if(suposicion.toLowerCase() === palabraOculta){
        return true;
    }
    return false;
}

function juegarAdivinaPalabra() {
    alert("Bienvenido a jugar adivina La palabra oculta")
    alert("Tienes 3 intentos para adivinar la palabra")
    alert('PISTA - La palabra oculta es un lenguaje de programacion')

    while(intentos > 0){
        let suposicion = prompt("Adivina la palabra")
        if(verificarSuposicion(suposicion, palabraOculta)){
            alert("Has adivinado la palabra. Excelente!")
            break;
        }else{
            intentos--;
            if (intentos > 0){
                alert(`Incorrecto, aun tienes ${intentos} restantes`)
            }
            else{
                alert(`Has perdido, no te queda mas intentos. La palabra oculta era ${palabraOculta}`)
            }
        }
        
    }
}

juegarAdivinaPalabra();