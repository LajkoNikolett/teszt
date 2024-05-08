import adatok from '../informatikai_es_tavkozlesi_alapok_i/bevezetes_az_elektronikaba/adatok.js';
import cardUpFeltolt from '../javascript_allomanyok/kartyaFel.js';
import cardDownFeltolt from '../javascript_allomanyok/kartyaLe.js';

function feladatMegold() {
    let index = 0;

    betolt(index);

    function betolt(i) {
        let tarto = document.getElementById('tarto');
        let felso = document.getElementById('felso');
        let also = document.getElementById('also');
        cardUpFeltolt(tarto, adatok[i], felso, i, adatok.length);
        cardDownFeltolt(tarto, adatok[i], also, i, adatok.length);

        fordit();

        mozgat();
    }

    function fordit() {
        let forditGomb = document.getElementById('forditGomb');

        forditGomb.addEventListener('click', () => {
            let felso = document.getElementById('felso');
            let also = document.getElementById('also');
            also.style.zIndex = 1;
            felso.style.zIndex = -1;
        });

        let kerdesGomb = document.getElementById('kerdesGomb');

        kerdesGomb.addEventListener('click', () => {
            let felso = document.getElementById('felso');
            let also = document.getElementById('also');
            also.style.zIndex = -1;
            felso.style.zIndex = 1;
        });
    }

    function mozgat() {
        let eloreF = document.getElementById('eloreF');
        let hatraF = document.getElementById('hatraF');
        let eloreL = document.getElementById('eloreL');
        let hatraL = document.getElementById('hatraL');

        if (index === 0) {
            eloreF.addEventListener('click', () => {
                index++;
                console.log(index);

                betolt(index);

                fordit();
            });

            eloreL.addEventListener('click', () => {
                index++;
                console.log(index);

                betolt(index);

                fordit();
            });
        } else if (index > 0 && index < adatok.length - 1) {
            eloreF.addEventListener('click', () => {
                index++;
                console.log(index);

                betolt(index);

                fordit();
            });

            eloreL.addEventListener('click', () => {
                index++;
                console.log(index);

                betolt(index);

                fordit();
            });

            hatraF.addEventListener('click', () => {
                index--;
                console.log(index);

                betolt(index);

                fordit();
            });

            hatraL.addEventListener('click', () => {
                index--;
                console.log(index);

                betolt(index);

                fordit();
            });
        } else if (index === adatok.length - 1) {
            hatraF.addEventListener('click', () => {
                index--;
                console.log(index);

                betolt(index);

                fordit();
            });

            hatraL.addEventListener('click', () => {
                index--;
                console.log(index);

                betolt(index);

                fordit();
            });
        }
    }
}

export default feladatMegold;
