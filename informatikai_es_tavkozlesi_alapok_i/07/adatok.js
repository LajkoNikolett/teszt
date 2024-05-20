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
];

export default adatok;
