let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik támadási mód ellen jelent védelmet a portbiztonság bekapcsolása?',
        valaszok: [
            'Hamisított MAC-cím elárasztás',
            'SYN elárasztás',
            'Social engineering',
            'Physhing',
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
        kerdes: 'Melyik parancs akadályozza meg azt, hogy a titkosítatlan jelszavak a konfigurációs fájlban sima szövegként jelenjenek meg?',
        valaszok: [
            '(config)# enable password secret',
            '(config)# enable secret Secret_Password',
            '(config-line)# password secret',
            '(config)# service password-encryption',
            '(config)# enable secret Encrypted_Password',
        ],
        joValaszok: [false, false, false, true, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Mit titkosít az eszköz az enable secret paranccsal?',
        valaszok: [
            'minden konfigurált jelszót',
            'a privilegizált módú jelszót',
            'a konzol vonal jelszavát',
            'a VTY vonal jelszavát',
        ],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
];

export default adatok;
