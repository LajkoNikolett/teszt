function cardDownFeltolt(hova, adat, mit, hanyadik, hossz) {
    let cardDown = document.createElement('div');
    cardDown.setAttribute('id', 'also');
    cardDown.setAttribute('class', 'p-3 mx-auto');

    let cardDownContent = ``;
    if (hanyadik === 0) {
        cardDownContent += `<div class="d-flex justify-content-between mb-3"><p></p>`;
        cardDownContent += `<h3 class="text-center">${
            hanyadik + 1
        }. Kérdés</h3>`;
        cardDownContent += `<button class="btn btn-danger" id="eloreL"><span style="font-size: 25px;">&#129054;</span></button></div>`;
        cardDownContent += `<h3>${adat.kerdes}</h3>`;
    } else if (0 < hanyadik && hanyadik < hossz - 1) {
        cardDownContent += `<div class="d-flex justify-content-between mb-3"><button class="btn btn-danger" id="hatraL"><span style="font-size: 25px;">&#129052;</span></button>`;
        cardDownContent += `<h3 class="text-center">${
            hanyadik + 1
        }. Kérdés</h3>`;
        cardDownContent += `<button class="btn btn-danger" id="eloreL"><span style="font-size: 25px;">&#129054;</span></button></div>`;
        cardDownContent += `<h3>${adat.kerdes}</h3>`;
    } else if (hanyadik === hossz - 1) {
        cardDownContent += `<div class="d-flex justify-content-between mb-3"><button class="btn btn-danger" id="hatraL"><span style="font-size: 25px;">&#129052;</span></button>`;
        cardDownContent += `<h3 class="text-center">${
            hanyadik + 1
        }. Kérdés</h3>`;
        cardDownContent += `<p></p></div>`;
        cardDownContent += `<h3>${adat.kerdes}</h3>`;
    }
    cardDownContent += `<img src="${adat.kepLe}" class="w-50 d-block mx-auto p-2 mb-2" alt="Kép" />`;
    if (adat.tipus === 'checkbox') {
        cardDownContent += `<h3>Helyes válaszok: </h3>`;
        for (let j = 0; j < adat.joValaszok.length; j++) {
            cardDownContent += '<div class="form-check">';
            if (adat.joValaszok[j]) {
                cardDownContent += `<input class="form-check-input" type="checkbox" id="kerdes_${j}" checked />`;
            } else {
                cardDownContent += `<input class="form-check-input" type="checkbox" id="kerdes_${j}" />`;
            }
            cardDownContent += `<label class="form-check-label" for="kerdes_${j}">${adat.valaszok[j]}</label>`;
            cardDownContent += '</div>';
        }
    } else if (adat.tipus === 'radiobutton') {
        cardDownContent += `<h3>Helyes válasz: </h3>`;
        for (let j = 0; j < adat.joValaszok.length; j++) {
            cardDownContent += '<div class="form-check">';
            if (adat.joValaszok[j]) {
                cardDownContent += `<input class="form-check-input" type="radio" id="kerdes_${j}" checked />`;
            } else {
                cardDownContent += `<input class="form-check-input" type="radio" id="kerdes_${j}" />`;
            }
            cardDownContent += `<label class="form-check-label" for="kerdes_${j}">${adat.valaszok[j]}</label>`;
            cardDownContent += '</div>';
        }
    }
    cardDownContent += `<h3>Magyarázat: <span style="font-size: 0.8em; "><a href="${adat.magyarazat.href}" class="text-decoration-none" target="_blank">${adat.magyarazat.szoveg}</a></span></h3>`;
    cardDownContent += `<button class="btn btn-primary mt-3" id="kerdesGomb">Kérdés</button>`;

    cardDown.innerHTML = cardDownContent;

    hova.replaceChild(cardDown, mit);
}

export default cardDownFeltolt;
