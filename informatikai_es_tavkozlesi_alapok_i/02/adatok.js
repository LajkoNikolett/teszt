let adatok = [
    {
        tipus: 'checkbox',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Hol állítható be egy számítógépen, hogy ne merevlemezről, hanem optikai meghajtóról töltsön be?',
        valaszok: ['BIOS', 'UEFI', 'CMOS', 'POST', 'BootFlash'],
        joValaszok: [true, true, false, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik Windows alkalmazás segítségével lehet leállítani egy nem reagáló (lefagyott) programot?',
        valaszok: [
            'Feladatkezelő',
            'Windows Defender',
            'Feladatütemező',
            'Eszközkezelő',
        ],
        joValaszok: [true, false, false, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Igaz vagy hamis? A Windows telepítésekor létrejön egy rendszergazdai fiók, de csak a Windows aktiválása után lehet használni.',
        valaszok: ['igaz', 'hamis'],
        joValaszok: [false, true],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik nem az operációs rendszer feladata?',
        valaszok: [
            'Hardverek ellenőrzése',
            'Driverek frissítése',
            'POST végrehajtása',
            'Memóriakezelés',
            'Programok betöltése az operatív tárba és azok futtatása',
        ],
        joValaszok: [false, false, true, false, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Mi a grafikus felhasználói felület angol mozaikszava?',
        valaszok: ['CLI', 'GUI', 'CPU', 'GLI'],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik nem mobil operációs rendszer?',
        valaszok: ['Android', 'Blackberry OS', 'Ubuntu', 'iOS', 'Symbian OS'],
        joValaszok: [false, false, true, false, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik a parancssori felhasználói felület angol mozaikszava?',
        valaszok: ['GUI', 'PDU', 'CLU', 'CLI'],
        joValaszok: [false, false, false, true],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'A töredezettségmentesítést havonta egyszer ajánlott elvégezni az SSD meghajtókon.',
        valaszok: ['igaz', 'hamis'],
        joValaszok: [false, true],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik állítás igaz a következőkből?',
        valaszok: [
            'A töredezettségmentesítést havonta egyszer ajánlott elvégezni az SSD meghajtókon.',
            'A Lemeztöredezettség-mentesítő eszköz összerendezi a töredezett adatokat, amelynek hatására az operációs rendszer gyorsabban fogja betölteni a fájlokat.',
            'A Lemeztöredezettség-mentesítő eszköz kijavítja az állományokban található hibás adatokat.',
            'A Lemezellenőrzés eszköz a merevlemez felületének teljes átvizsgálásával ellenőrzi a fájlok és mappák fizikai hibáit.',
        ],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'http://www.videobazis.hu/6-negyedik-ora-a-szamitogep-felepitese-kiviteli-eszkozok-es-beviteli-eszkozok/',
            szoveg: 'A számítógép input/output részei.',
        },
    },
];

export default adatok;
