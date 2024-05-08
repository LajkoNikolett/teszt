function cardUpFeltolt(hova, adat, mit, hanyadik, hossz) {
    let cardUp = document.createElement('div');
    cardUp.setAttribute('id', 'felso');
    cardUp.setAttribute('class', 'p-3 mx-auto');

    let cardUpContent = ``;
    if (hanyadik === 0) {
        cardUpContent += `<div class="d-flex justify-content-between mb-3"><p></p>`;
        cardUpContent += `<h3 class="text-center">${hanyadik + 1}. Kérdés</h3>`;
        cardUpContent += `<button class="btn btn-danger" id="eloreF"><span style="font-size: 25px;">&#129054;</span></button></div>`;
        cardUpContent += `<h3>${adat.kerdes}</h3>`;
    } else if (0 < hanyadik && hanyadik < hossz - 1) {
        cardUpContent += `<div class="d-flex justify-content-between mb-3"><button class="btn btn-danger" id="hatraF"><span style="font-size: 25px;">&#129052;</span></button>`;
        cardUpContent += `<h3 class="text-center">${hanyadik + 1}. Kérdés</h3>`;
        cardUpContent += `<button class="btn btn-danger" id="eloreF"><span style="font-size: 25px;">&#129054;</span></button></div>`;
        cardUpContent += `<h3>${adat.kerdes}</h3>`;
    } else if (hanyadik === hossz - 1) {
        cardUpContent += `<div class="d-flex justify-content-between mb-3"><button class="btn btn-danger" id="hatraF"><span style="font-size: 25px;">&#129052;</span></button>`;
        cardUpContent += `<h3 class="text-center">${hanyadik + 1}. Kérdés</h3>`;
        cardUpContent += `<p></p></div>`;
        cardUpContent += `<h3>${adat.kerdes}</h3>`;
    }
    cardUpContent += `<img src="${adat.kepFel}" class="w-50 d-block mx-auto p-2 mb-2" alt="Kép" />`;
    if (adat.tipus === 'checkbox') {
        for (let j = 0; j < adat.valaszok.length; j++) {
            cardUpContent += '<div class="form-check">';
            cardUpContent += `<input class="form-check-input" type="checkbox" id="kerdes_${j}" />`;
            cardUpContent += `<label class="form-check-label" for="kerdes_${j}">${adat.valaszok[j]}</label>`;
            cardUpContent += '</div>';
        }
        cardUpContent += `<button class="btn btn-primary mt-3" id="forditGomb">Elküld</button>`;
    } else if (adat.tipus === 'radiobutton') {
        for (let j = 0; j < adat.valaszok.length; j++) {
            cardUpContent += '<div class="form-check">';
            cardUpContent += `<input class="form-check-input" type="radio" id="kerdes_${j}" name="${adat.kerdes}" />`;
            cardUpContent += `<label class="form-check-label" for="kerdes_${j}">${adat.valaszok[j]}</label>`;
            cardUpContent += '</div>';
        }
        cardUpContent += `<button class="btn btn-primary mt-3" id="forditGomb">Elküld</button>`;
    }

    cardUp.innerHTML = cardUpContent;

    hova.replaceChild(cardUp, mit);
}

export default cardUpFeltolt;
