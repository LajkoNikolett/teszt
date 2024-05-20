let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Írd be a rövidítést: A .... egy adatvesztés megelőzése érdekében kifejlesztett technológia, aminek működéséhez több lemez szükséges.',
        valaszok: ['RAID', 'STP', 'HDMI', 'DHCP'],
        joValaszok: [true, false, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Az alábbiak közül melyik rövidítés nem a megjelenítéshez kapcsolódó technológia? (2 jó válasz)',
        valaszok: ['SCI', 'DVI', 'HDMI', 'VGA', 'WGA', 'Display Port'],
        joValaszok: [true, false, false, false, true, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_04.jpg',
        kepLe: './images/kep_04.jpg',
        kerdes: 'A következő ábrán a RAID 10 sematikus rajza látható.',
        valaszok: ['igaz', 'hamis'],
        joValaszok: [true, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Tintasugaras nyomtató esetén melyik nem alapszín? (2 jó válasz)',
        valaszok: ['cián', 'magenta', 'piros', 'fekete', 'sárga', 'zöld'],
        joValaszok: [false, false, true, false, false, true],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
];

export default adatok;
