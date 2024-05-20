let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Egy PC-t keresztkötésű kábellel csatlakoztattunk egy routerhez. A PC IP-címe statikusan lett beállítva a 192.168.10.100/24 címre, a router interfészének címe 192.168.100.10/24 és kiadtuk rajta a “no shut” parancsot. A PCről nem tudjuk pingelni a routert. Mit lehet tenni a hiba elhárítása érdekében?',
        valaszok: [
            'A PC címében a 10-es értéket 100-ra kellene cserélni.',
            'Egyeneskötésű kábelt kellene használni.',
            'A PC-nek DNS szerver segítségével kellene címet beállítani.',
            'A routeren rövidítés nem használható, ezért a „no shut” parancs helyett a “no shutdown” parancsot kell a router interfészen kiadni.',
        ],
        joValaszok: [true, false, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
];

export default adatok;
