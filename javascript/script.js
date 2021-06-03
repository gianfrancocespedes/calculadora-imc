let getData = function (){
    let peso = document.getElementById("peso").value
    let talla = document.getElementById("talla").value
    let imc
    if(!peso || !talla) 
        document.getElementById("respuesta").innerHTML="Digite todos los datos"
    else{
        imc = peso/(talla*talla)
        imc = imc.toFixed(1)
        if(imc<18.5) document.getElementById("respuesta").innerHTML=`Su IMC es ${imc}, lo cual indica que se encuentra en la categoría Bajo peso.`
        else if(imc<=24.9) document.getElementById("respuesta").innerHTML=`Su IMC es ${imc}, lo cual indica que se encuentra en la categoría Peso normal.`
        else if(imc<=29.9) document.getElementById("respuesta").innerHTML=`Su IMC es ${imc}, lo cual indica que se encuentra en la categoría Sobrepeso.`
        else if(imc<=34.5) document.getElementById("respuesta").innerHTML=`Su IMC es ${imc}, lo cual indica que se encuentra en la categoría Obesidad grado I.`
        else if(imc<=39.9) document.getElementById("respuesta").innerHTML=`Su IMC es ${imc}, lo cual indica que se encuentra en la categoría Obesidad grado II.`
        else document.getElementById("respuesta").innerHTML=`Su IMC es ${imc}, lo cual indica que se encuentra en la categoría Obesidad grado II.`
        document.getElementById("peso").value = ""
        document.getElementById("talla").value = ""
    }
        

}