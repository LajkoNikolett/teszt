let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik parancs menti el a git verziókezelő adatbázisába a fájlokon végzett módosításokat?',
        valaszok: ['git commit', 'git clone', 'git add', 'git init'],
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
        kerdes: 'Melyik git paraméter segítségével rögzíthatjük a változásokat a helyi adatbázisban?',
        valaszok: ['add', 'branch', 'push', 'commit'],
        joValaszok: [false, false, false, true],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik paranccsal lehet git verziókezelőben visszatölteni a változásokat a szerverre ha klónozással szereztük az adatbázist?',
        valaszok: ['git push', 'git init', 'git add', 'git commit'],
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
        kerdes: 'A git melyik verziókezelő csoportba tartozik?',
        valaszok: ['LVCS', 'DVCS', 'CVCS', 'MVCS'],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
];

export default adatok;
