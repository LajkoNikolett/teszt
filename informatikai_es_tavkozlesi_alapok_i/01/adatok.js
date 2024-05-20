let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_01.jpg',
        kerdes: 'Igaz-e a következő állítás? A feszültségmérőt a fogyasztóval sorosan kell bekötni az áramkörbe.',
        valaszok: ['igaz', 'hamis'],
        joValaszok: [false, true],
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
        kerdes: 'Igaz-e a következő állítás? Az áramerősségmérőt a fogyasztóval sorosan kell bekötni az áramkörbe.',
        valaszok: ['igaz', 'hamis'],
        joValaszok: [true, false],
        magyarazat: {
            href: 'https://zrinyi-encs.edu.hu/fizika/fizika8/az_elektromos_feszltsg.html',
            szoveg: 'Feszültség.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_03.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Ha egy eszközön 100mA áram folyik át 230V feszültség mellett, akkor mekkora a teljesítménye?',
        valaszok: ['2.3W', '230W', '23W', '230mW'],
        joValaszok: [false, false, true, false],
        magyarazat: {
            href: 'https://zrinyi-encs.edu.hu/fizika/fizika8/az_elektromos_feszltsg.html',
            szoveg: 'Feszültség.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_03.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Ha egy eszköz 23W teljesítményű és 230V feszültség esik rajta, akkor mekkora a rajta átfolyó áram erőssége?',
        valaszok: ['1A', '1mA', '100mA', '10mA'],
        joValaszok: [false, false, true, false],
        magyarazat: {
            href: 'https://zrinyi-encs.edu.hu/fizika/fizika8/az_elektromos_feszltsg.html',
            szoveg: 'Feszültség.',
        },
    },
];

export default adatok;
