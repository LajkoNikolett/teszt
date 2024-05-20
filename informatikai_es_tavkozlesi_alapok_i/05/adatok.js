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
];

export default adatok;
