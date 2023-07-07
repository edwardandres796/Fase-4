function procesarRespuestas(){
    let total = 5;
    let puntos = 0;

    let myForm = document.forms["cuestionario"];
    let respuestasCorrectas = ["c","a","b","c","c","b"];

    for (let i = 1; i <= total; i++){
        if (myForm["r" + i].value === null ||
            myForm["r" + i].value === '')
        {
            alert("Debe responder todas las preguntas");
            return false;
        }
        else
        {
            if (myForm["r" + i].value === respuestasCorrectas[i - 1])
                puntos++;
        }
    }

    let result = document.getElementById("resultado")
    result.innerHTML= `Obtuviste ${puntos} de un total de ${total} puntos maximo`;
    return false;

}