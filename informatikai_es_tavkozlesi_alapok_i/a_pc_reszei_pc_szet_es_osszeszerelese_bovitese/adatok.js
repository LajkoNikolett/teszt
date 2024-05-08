let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Mely állítás nem igaz a számítógépre?',
        valaszok: [
            'Elektromos árammal működik.',
            'Input/output adatokat kezel.',
            'Azonos bemenő adat esetén mindig eltérő a kimenő adat.',
            'Fő részei a hardver és a szoftver.',
        ],
        joValaszok: [false, false, true, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_02.jpg',
        kerdes: 'Melyek nem beviteli (input) eszközök?',
        valaszok: [
            'scanner',
            'egér',
            'számítógépház',
            'billentyűzet',
            'CD olvasó',
            'alaplap',
            'mikrofon',
        ],
        joValaszok: [false, false, true, false, true, true, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'checkbox',
        kepFel: './images/kep_03.jpg',
        kepLe: './images/kep_02.jpg',
        kerdes: 'Melyek kiviteli (output) eszközök?',
        valaszok: [
            'scanner',
            'nyomtató',
            'tápegység',
            'hangfal',
            'mikrofon',
            'processzor',
            'projektor',
        ],
        joValaszok: [false, true, false, true, false, false, true],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
];

export default adatok;
