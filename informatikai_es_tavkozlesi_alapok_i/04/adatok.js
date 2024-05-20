let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik nem a szoftveres megelőző karbantartási folyamat része?',
        valaszok: [
            'Tűzfalprogram beállítása',
            'Nem használt programok törlése',
            'Vírusdefiníciós fájlok frissítése',
            'Merevlemezek hibakeresése és töredezettségmentesítése',
        ],
        joValaszok: [true, false, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik nem egy számítógép megelőző karbantásának előnye?',
        valaszok: [
            'Csökkenti a meghibásodások számát',
            'Kevesebbek lesznek a felhasználói hibák',
            'Növeli az eszközök stabilitását',
            'Meghosszabbítja az összetevők élettartamát',
        ],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Mely eszközöket nem használunk egy számítógép megelőző karbantása során?',
        valaszok: [
            'csillag csavarhúzó',
            'sűritett levegős spray',
            'véső',
            'finom ecset',
            'hővezető paszta',
            'ütvefúró',
        ],
        joValaszok: [false, false, true, false, false, true],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik négy hibaelhárító megoldás a számítógépe teljesítményének növelésére?',
        valaszok: [
            'A ventillátor cseréje',
            'A RAM bővítése',
            'A ROM bővítése',
            'Kártevőket eltávolító szoftverek telepítése',
            'A nem használt szoftverek eltávolítása',
            'A felesleges, nem használt fájlok tárolása',
        ],
        joValaszok: [false, false, true, false, false, true],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
];

export default adatok;
