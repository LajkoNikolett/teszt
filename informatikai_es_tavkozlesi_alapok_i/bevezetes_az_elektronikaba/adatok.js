let adatok = [
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_01.jpg',
        kerdes: 'Melyik elemi részecske?',
        valaszok: ['elektron', 'proton', 'kroton', 'neutron'],
        joValaszok: [true, true, false, true],
        magyarazat: {
            href: 'https://tudasbazis.sulinet.hu/hu/termeszettudomanyok/kemia/altalanos-kemia/atomok-es-elemi-reszecskek/az-elemi-reszecskek',
            szoveg: 'Elemi részecskék.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_02.jpg',
        kepLe: './images/kep_02.jpg',
        kerdes: 'Mi az áramerősség mértékegysége?',
        valaszok: ['ohm', 'volt', 'amper', 'watt'],
        joValaszok: [false, false, true, false],
        magyarazat: {
            href: 'https://zrinyi-encs.edu.hu/fizika/fizika8/az_ramerssg.html',
            szoveg: 'Áramerősség.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_03.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Mi a feszültség mértékegysége?',
        valaszok: ['ohm', 'volt', 'amper', 'watt'],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'https://zrinyi-encs.edu.hu/fizika/fizika8/az_elektromos_feszltsg.html',
            szoveg: 'Feszültség.',
        },
    },
];

export default adatok;
