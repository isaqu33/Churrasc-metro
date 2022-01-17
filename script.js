// Qualcular, qual a quantidade de comida e bebida que a gente precisa para fazer um churrasco 
// dependendo do número de pessoas, se são adultas ou crianças, e quanto tempo 
// vai ter a duração desse churrasco.

// carne - 400 gramas por pessoa, se + de 6 horas = 650 gramas
// cerveja - 1200 ml por pessoa, se + de 6 horas = 2000 ml
// refri/agua - 1000 ml por pessoa, se + de 6 horas = 1500ml

// criancas valem por 0,5



var mostrar = document.querySelector("#resultadomostrado")
var imputAduto = document.querySelector("#adultos")
var imputCriança = document.querySelector("#criancas")
var imputDuração = document.querySelector("#duracao")




function resolver() {

    let adulto = imputAduto.value
    let crianca = imputCriança.value


    let totalcarne = carne() * adulto + (carne() / 2 * crianca)

    let totalcerveja = cerveja() * adulto + (cerveja() / 2 * crianca)

    let totalaguarefri = refriAgua() * adulto + (refriAgua() / 2 * crianca)

    mostrar.innerHTML += `<div id="resultadomostrado" style="display: flex; flex-direction: column;">
    ${converterkg(totalcarne)} de carne.
    </div>`
    mostrar.innerHTML += `<div id="resultadomostrado" style="display: flex; flex-direction: column;">
    ${conversaolitro(totalcerveja)}   de cerveja.
    </div>`
    mostrar.innerHTML += `<div id="resultadomostrado" style="display: flex; flex-direction: column;">
    ${conversaolitro(totalaguarefri)}   de água ou refri.
    </div>`


}

function carne() {
    if (imputDuração.value >= 6) {
        return 650
    }


    else {
        return 400
    }
}

function cerveja() {
    if (imputDuração.value >= 6) {
        return 2000
    }


    else {
        return 1200
    }
}

function refriAgua() {
    if (imputDuração.value >= 6) {
        return 1500
    }


    else {
        return 1000
    }
}


function converterkg(gramas) {
    if (gramas < 1000) {
        return `${gramas} gramas`
    }

    if (gramas >= 1000) {

        let gm = gramas % 1000;
        let kg = (gramas - gm) / 1000;



        if (gm > 0) {
            return `${kg} kilos e ${gm} gramas`
        }
        else {
            return `${kg} kilos`
        }
    }

}

function conversaolitro(gramas) {

    if (gramas < 1000) {

        return `${gramas} litros`
    }

    if (gramas >= 1000) {

        let gm = gramas % 1000;
        let kg = (gramas - gm) / 1000;

        if (gm > 0) {
            return `${kg} litros e ${gm} ml`
        }
        else {
            return `${kg} litros`
        }


    }


}








































































































































































