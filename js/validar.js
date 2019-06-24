//Autor: Mar Mazuelas
//Fecha: 30/05/2019
//Introducir un dato hexadecimal y convertirlo a decimal

$(document).ready(function(){
    const patron = /^[0-9A-Fa-f]+$/;
    $("#valor").on("change blur", function() {
        if (!patron.test($("#valor").val)){
            $("#icono").show().delay(3000).fadeOut();
        }else{
            let decimal = parseInt($("#valor").val, 16);
            $("#resultado").val(decimal);
            $("#mostrar").show().fadeIn("slow");
        }
    });

});

/*let dato = document.getElementById("valor");
const patron = /^[0-9A-Fa-f]+$/;
//dato.onkeypress = validarDato;
dato.onblur = validarDato;
dato.onsubmit = validarDato;

function validarDato(){
    if (dato.value==="" || !patron.test(dato.value)){
        console.log("Dato no es correcto");
        document.getElementById("mostrar").style.display = "none";
        document.getElementById("icono").style.display = "";
    } else {
        console.log("Dato es correcto");
        //mostrar();
        document.getElementById("mostrar").style.display = "";
        let decimal = parseInt(dato.value, 16);
        document.getElementById("resultado").value = decimal;
        document.getElementById("icono").style.display = "none";
    }

}

function mostrar() {
    for (i = 0; i <= 10; i++){
        setTimeout("document.getElementById('resultado').style.opacity = '" + (i / 10) + "'", i * 100);
        let decimal = parseInt(dato.value, 16);
        //document.getElementById("resultado").value = decimal;
    }
}*/