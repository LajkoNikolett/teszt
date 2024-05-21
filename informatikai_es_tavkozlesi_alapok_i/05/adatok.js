let adatok = [
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Melyik parancs állít be egy C osztályú IP címet egy Cisco routeren?',
        valaszok: [
            '(config-if)#ip address 192.168.10.5 255.255.255.0',
            '(config)#ip address 172.16.10.5 255.255.0.0',
            '(config-if)#ip address 10.0.10.5 255.0.0.0',
            '(config)#ip address 192.16.10.5 255.255.255.0',
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
        kerdes: 'Melyik leírás határozza meg pontosan a MAC címet?',
        valaszok: [
            '48 bites, hexadecimálisan kódolt, az első 24 bit a gyártó, a második 24 bit az eszköz azonosítására szolgál',
            '48 bites, binárisan kódolt, az eszköz azonosítására szolgál',
            '48 bites, binárisan kódolt, az első 24 bit a gyártó, a második 24 bit az eszköz azonosítására szolgál',
            '24 bites, hexadecimálisan kódolt, az első 12 bit a gyártó, a második 12 bit az eszköz azonosítására szolgál',
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
        kerdes: 'A tízes számrendszerbeli alakjában felírt maszkok közül melyik felel meg a prefixes alakjában /24-es alhálózati maszknak?',
        valaszok: [
            '255.255.255.128',
            '255.255.255.0',
            '255.255.0.0',
            '255.255.255.252',
        ],
        joValaszok: [false, true, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
    {
        tipus: 'radiobutton',
        kepFel: './images/kep_01.jpg',
        kepLe: './images/kep_03.jpg',
        kerdes: 'Időtakarékosság céljából egy részben begépelt IOS parancsot milyen billentyűvel vagy billentyűkombinációval egészíthetünk ki?',
        valaszok: [
            'Tab',
            'Ctrl-P',
            'Ctrl-N',
            'Felfelé nyíl',
            'Jobbra nyíl',
            'Lefelé nyíl',
        ],
        joValaszok: [true, false, false, false, false, false],
        magyarazat: {
            href: 'https://www.poli.hu/netrekesz/anyagok/szamitogepes_alapismeretek.pdf',
            szoveg: 'A számítógép.',
        },
    },
];

export default adatok;
