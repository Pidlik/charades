window.onload = function () {
  const btn = document.getElementById('button');

  btn.addEventListener('click', () => displayNewRandomPrompt());
  displayNewRandomPrompt();
};

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

function displayNewRandomPrompt() {
  document.getElementById('prompt').textContent =
    prompts[getRandomInt(0, prompts.length - 1)];
}

const prompts = [
  'Vulkan',
  'Fest',
  'Regnbåge',
  'Tandläkare',
  'Glödlampa',
  'Hårdkokt ägg',
  'Soptunna',
  'Gör en frisyr',
  'Klumpig',
  'Ge någon en kille',
  'Pannkakor',
  'Hårtork',
  'Pizza',
  'Fisa',
  'Upptåg',
  'Katt hostar upp en hårboll',
  'Knubbig kanin',
  'Bubbelbad',
  'Diskussion',
  'Drömmar',
  'Överväldigad',
  'Sminkar sig',
  'Strand',
  'igelkott',
  'Macarena',
  'Kirurg',
  'Orkan',
  'Facebook',
  'Förstoppning',
  'Bilolycka',
  'Kriminell',
  'Presidenten',
  'Tjalla',
  'Fight Club',
  'Hicka',
  'Chef',
  'Detektiv',
  'iPad',
  'Bakar kakor',
  'Skämt',
  'Tik',
  'Peruk',
  'Svart får',
  'Flygplan',
  'Macho',
  'Bebis',
  'Solsken',
  'Skål',
  'Limbo',
  'Sked',
  'Överraskning',
  'Steppdans',
  'Ge en katt ett bad',
  'Byta blöja',
  'Gå ut med hunden',
  'Tyngdlyftning',
  'Spelar kort',
  'Jodling',
  'Blåser bubblor',
  'Burping',
  'Vinner i lotteriet',
  'Klippande tånaglar',
  'Kvävning',
  'Avstängning av toalett',
  'Gå på månen',
  'Öppna en burk',
  'Skapa en skulptur',
  'Rider en segway',
  'Blåsar näsan',
  'Plantera ett träd',
  'Armbrytning',
  'Utför magi',
  'Bungee jump',
  'Smyga ut',
  'Clown',
  'Sjöjungfru',
  'Äta med ätpinnar',
  'Ko tippar',
  'Fet katt',
  'Mjölkbud',
  'Rockband',
  'Safari',
  'Aluminiumfolie',
  'Glasöga',
  'Raketskepp',
  'Löständer',
  'Jelly munk',
  'Hjärnfrys',
  'Sleepwalk',
  'Kemist',
  'Ketchup',
  'Moonwalk (dans)',
  'Inbrottstjuv',
  'Storfot',
  'Näshår',
  'Spionera',
  'Pirat',
  'Tunnelbana',
  'Dålig andedräkt',
  'Grottman',
  'Svans',
  'Nysa',
  'Målning',
  'Träd',
  'Skidåkning',
  'Tandborste',
  'Polisonger',
  'Att gå en hund',
  'Fusk',
  'Överraskning',
  'Tittar på tv',
  'Michael Jackson',
  'Wiggle',
  'Lyssnar på musik',
  'Spargris',
  'Berg och dalbana',
  'Rökning',
  'Telefon',
  'Kaffe',
  'Vingar',
  'Öppnar en present',
  'Binda en sko',
  'Duschande',
  'Strykning',
  'Disko',
  'Kliande',
  'Salsadans',
  'Födelsedag',
  'Fisk',
  'Jojo',
  'Köra bil',
  'Apa',
  'Motorcykel',
  'Spaghetti',
  'Body lotion',
  'Docka',
  'Leda',
  'Robot',
  'Trampolin',
  'Glass',
  'Kudde',
  'Videospel',
  'Blinkning',
  'Tandkräm',
  'Mygga',
  'Galen',
  'Lärare',
  'Skosnöre',
  'Värme',
  'Läppstift',
  'Skämt',
  'Klättrande',
  'Trummor',
  'Besviken',
  'Hoppa',
  'Yoghurt',
  'Selfie',
  'Träd',
  'Handla',
  'Avkopplande',
  'Simning',
  'Stretching',
  'Att sätta på ett plåster',
  'Använda munvatten',
  'Gråt',
  'Att sätta på parfym',
  'Använda en skrivmaskin',
  'Tända en tändsticka',
  'Öppna ett paraply',
  'Sågning',
  'Kryckor',
  'High Fiving',
  'Plocka blommor',
  'Klättrar upp en stege',
  'Hoppar över stenar',
  'Köra skoter',
  'Stjärnskådning',
  'Bäddar sängen',
  'Matar fisk',
  'Rita blod',
  'Äter majs',
  'Brödrost',
  'Hemlig beundrare',
  'Ruttet äpple',
  'Tatuering',
  'Golfbil',
  'Hawaii',
  'Läderbyxor',
  'Tre blinda möss',
  'Sjöstjärna',
  'Limousinförare',
  'Glaset är halvfullt',
  'Dimples',
  'Vattensäng',
  'Flygande fisk',
  'Termometer',
  'Poppar en finn',
  'Paus',
  'Bi-stick',
  'Linje dans',
  'Rädd katt',
  'Soffpotatis',
  'Raklödder',
  'Puberteten',
  'Ansökan',
  'Sarkasm',
  'Tinnitus',
  'Slösar pengar',
  'Botox',
  'Att bli naken',
  'Irriterande kollegor',
  'Glas vin',
  'Föder barn',
  'Fordringar',
  'Arbetslös',
  'Frihet',
  'Äktenskap',
  'Vaping',
  'Existentiell kris',
  'Baksmälla',
  'Mål',
  'Berusningsdrickande',
  'Trädgårdsarbete',
  'Befordran',
  'Mogna',
  'Vinprovning',
  'Bli gravid',
  'Betalar räkningar',
  'Gamla människor',
  'Brinna ut',
  'Hångla',
  'Utmattad',
  'Medelålderskris',
  'Klubbning',
  'Hipster',
  'Påfrestning',
  'Sömnlöshet',
  'Reser',
  'Semester',
  'Fel',
  'Sekreterare',
  'Mig tid',
  'möhippa',
  'Att klä av sig',
  'Tvättar',
  'Hålslagare',
  'Röker en cigarett',
  'Går till gymmet',
  'Nagel salong',
  'Få en tatuering',
  'Frisör',
  'Röka gräs',
  '“Karen “som vill prata med chefen',
  'Tar ett skott',
  'Hålslagare',
  'Reser',
  'Menstruation',
  'Val',
  'Arbetssätt',
  'Lunchrast',
  'Får sparken',
  'Trött',
  'Gynekolog',
  'Ledande trafik',
  'Ta ut papperskorgen',
  'Fixa en bil',
  'Tripping',
  'Öppnar persiennerna',
  'Byta glödlampa',
  'Hyllar en hytt',
  'Grilla',
  'Mediterar',
  'handläsning',
  'Vikning av tvätt',
  'Plocka ögonbryn',
  'Räta ut ditt hår',
  'Modellering',
  'Damning',
  'Frostning en tårta',
  'Blind date',
  'Nedåtgående hund',
  'Twerking',
  'Brun utan sol',
  'Parallell parkering',
  'Rubiks kub',
  'Ta bort en splint',
  'Klocka',
  'Utfällbar soffa',
  'Drive thru',
  'Stå upp skrivbordet',
  'Ölmage',
  'Skottsäker väst',
  'Gangster',
  'Kärlekshandtag',
  'Mugghållare',
  'Giftigt avfall',
  'Kalender tjej',
  'tung kyss',
  'Ögonfransböjare',
  'Fettsugning',
  'Upphämtningslinje',
  'Fondue',
  'Buddha',
  'Schampo',
  'Tunnelseende',
  'Näs jobb',
  'Sorg',
  'Rynkor',
  'Krockkudde',
  'Dags för te',
  'Skinnydip',
  'Groda',
  'Scorpion',
  'Tarantel',
  'Fågel',
  'Katt',
  'Hund',
  'Kanin',
  'Pingvin',
  'Påfågel',
  'Hackspett',
  'Stork',
  'Mask',
  'Fjäril',
  'Bi',
  'Fisk',
  'Haj',
  'Tiger',
  'Lejon',
  'Myra',
  'Björn',
  'Isbjörn',
  'Humla',
  'Flyga',
  'Caterpillar',
  'Loppa',
  'Kackerlacka',
  'gräshoppa',
  'Delfin',
  'fladdermus',
  'Elefant',
  'Giraff',
  'Räv',
  'marsvin',
  'Hamster',
  'Gris',
  'Panda',
  'Utter',
  'Mol',
  'Råtta',
  'Mus',
  'Tvättbjörn',
  'Täta',
  'Får',
  'Alligator',
  'Lättja',
  'Ponny',
  'Häst',
  'Ekorre',
  'Varg',
  'Val',
  'Zebra',
  'Snigel',
  'Snigel',
  'Orm',
  'Kameleont',
  'Sköldpadda',
  'Svan',
  'Anka',
  'Spindel',
  'Apa',
  'Gorilla',
  'Tekopp Gris',
  'Guldfisk',
  'Valp',
  'Ko',
  'Rådjur',
  'Kyckling',
  'Get',
  'Flamingo',
  'Gala',
  'Valross',
  'Schimpans',
  'Flodhäst',
  'igelkott',
  'Ödla',
  'Kamel',
  'Sjöstjärna',
  'Koala',
  'Bläckfisk',
  'Uggla',
  'Manet',
  'Hummer',
  'Havs Anemon',
  'Pelikan',
  'Malar',
  'Myggor',
  'Morfar',
  'Mormor',
  'Tält',
  'Kikare',
  'Träffa vänner',
  'Tonåring',
  'Bebis',
  'Puberteten',
  'Halkar på en bananskal',
  'bror',
  'Farbror',
  'Syskon',
  'Ta en promenad',
  'Granne',
  'Skottar snö',
  'Studerar',
  'Spelar',
  'Vakna',
  'Borsta tänderna',
  'Dinosaurie',
  'Har ett argument',
  'Dammsugning',
  'Berg och dalbana',
  'Skägg',
  'Studsar en boll',
  'Glida',
  'Lasertag',
  'Skrattar högt',
  'Busschaufför',
  'Bagare',
  'Tvättmaskin',
  'Bio',
  'Gör yoga',
  'Tandfe',
  'Påskhare',
  'Hårtork',
  'Dragkedja',
  'Bedöma',
  'Tåg',
  'Brevvän',
  'Enhörning',
  'Gör keramik',
  'Stickning',
  'Konstnär',
  'Sångare',
  'Har kul',
  'Spaghetti',
  'Filmkväll',
  'Brösthår',
  'Kala huvudet',
  'Underkänd examen',
  'Bygga ett sandslott',
  'Leka kurragömma',
  'Uppblåsa en ballong',
  'Druva stampar',
  'Pappersflygplan',
  'Tandtråd',
  'Matar en baby',
  'Moppning',
  'Rockring',
  'Spindel',
  'Rullskridskor',
  'Tvätta en bil',
  'Videospel',
  'Pinata',
  'Hungrig',
  'Svimning',
  'Magiska knep',
  'Kräkas',
  'Hörlurar',
  'Gymnastik',
  'Dagdrömma',
  'Hugger ved',
  'Leka kull',
  'Violin',
  'Stubbar tån',
  'Legos',
  'Låtsaskompis',
  'Nagelbitare',
  'Hundfångare',
  'Tungvrickare',
  'Broccoli',
  'Skönhetsdrottning',
  'Rymdfärja',
  'Petting zoo',
  'Tå',
  'Tuggummi',
  'Postkontor',
  'parkbänk',
  'Hjälm',
  'Pommes frites',
  'Spåkvinna',
  'Vatten pistol',
  'Pariserhjul',
  'Håll tungan',
  'Klubba',
  'Hopprep',
  'Mannekäng',
  'magväska',
  'Bryt ett ben',
  'Vitlök',
  'Hjärntvätt',
];
