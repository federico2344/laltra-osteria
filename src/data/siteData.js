/**
 * ============================================================================
 *  DATA LAYER "HEADLESS" — L'Altra Osteria
 * ============================================================================
 *
 *  Tutti i contenuti del sito (info ristorante, menù, vini, team) vivono qui,
 *  SEPARATI dal JSX. I componenti React leggono solo da questo file.
 *
 *  Questa struttura è pensata per essere sostituita 1:1 dai file generati da
 *  Decap CMS: quando il ristoratore salva dal pannello /admin, Decap scrive
 *  file Markdown/JSON in `src/content/` con gli STESSI campi che vedi qui.
 *  Per attivare la lettura dinamica da CMS basterà importare quei file al
 *  posto di questi oggetti (vedi README.md, sezione "Collegare Decap CMS").
 *
 *  --> Per aggiornare un prezzo o un piatto OGGI: modifica i valori qui sotto.
 *  --> Domani lo farà il ristoratore dal pannello, senza toccare il codice.
 * ============================================================================
 */

/* ----------------------------- INFO RISTORANTE ---------------------------- */
export const restaurant = {
  name: "L'Altra Osteria",
  tagline: 'Cucina romana, tra tradizione e rivisitazione',
  intro:
    "La cucina si ispira alla tradizione regionale italiana, con particolare attenzione ai sapori di Roma, senza rinunciare a creatività, ricerca e interpretazioni contemporanee.",

  address: {
    street: 'Via Cassia 923',
    city: '00189 Roma',
    // Link a Google Maps per il pulsante "Indicazioni"
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=L%27Altra+Osteria+Via+Cassia+923+Roma',
  },

  phone: '+39 06 8952 4311',
  // Versione "machine" per i link tel: e wa.me (solo cifre, prefisso incluso)
  phoneRaw: '390689524311',
  // Numero per la prenotazione via WhatsApp (può differire dal fisso del locale)
  whatsappNumber: '390689524311',
  email: 'altraosteria@gmail.com',

  // Foto per lo slideshow della hero (aggiungi qui i percorsi delle tue immagini)
  heroSlides: [
    '/images/slide-1.jpg',
    '/images/slide-2.jpg',
    '/images/slide-3.jpg',
    '/images/slide-4.jpg',
    '/images/slide-5.jpg',
  ],

  // Messaggio precompilato del pulsante "Prenota un Tavolo" (editabile)
  whatsappMessage:
    "Ciao L'Altra Osteria, vorrei prenotare un tavolo per ... persone, in data ... alle ore ...",

  hours: [
    { day: 'Martedì – Sabato', lunch: '13:00 – 14:45', dinner: '20:00 – 22:30' },
    { day: 'Domenica e Lunedì', closed: true },
  ],

  social: {
    instagram: 'https://www.instagram.com/laltraosteria/',
    facebook: 'https://www.facebook.com/laltraosteriaroma/',
    tripadvisor: 'https://www.tripadvisor.it/Restaurant_Review-g187791-d12501937-Reviews-L_altra_Osteria-Rome_Lazio.html',
  },
}

/* --------------------------------- TEAM ----------------------------------- */
export const team = [
  {
    role: 'Lo Chef',
    name: 'Gianpiero Tomei',
    text: "Romano, classe 1979. Dopo aver studiato Giurisprudenza ha scelto di seguire la sua vera passione: la cucina. Dietro ai fornelli porta rigore e dedizione, trasformando i piatti della tradizione in esperienze contemporanee senza mai tradirne l'anima.",
    photo: '/images/chef.jpg',
  },
  {
    role: 'La Sommelier',
    name: 'Gabriela Burgos',
    text: 'Cura una carta dei vini fatta di piccoli produttori e cantine artigianali, con etichette ricercate a prezzi onesti. Il suo lavoro è trovare il vino giusto per ogni piatto e per ogni ospite, raccontando ciò che c\'è dietro ogni bottiglia.',
    photo: '/images/sommelier.jpg',
  },
]

/* --------------------------------- MENÙ ----------------------------------- *
 * `menuData` è un array di CATEGORIE (i tab del menù). Ogni categoria contiene
 * `sections`: gruppi di piatti (Antipasti, Primi, Secondi…), ciascuno con i
 * propri `dishes`. Questo rispecchia esattamente come sono stampati i menù.
 *
 * Categoria: { id, title, description?, sections: [...] }
 * Sezione:   { title?, note?, fixedPrice?, dishes: [...] }
 * Piatto:    { name, description?, price?, tags? }   // price null = incluso
 *
 * I prezzi sono numeri (euro): la formattazione € avviene nel componente.
 * ------------------------------------------------------------------------- */
export const menuData = [
  {
    id: 'pranzo',
    title: 'Menù Pranzo',
    description:
      'Dal martedì al sabato a pranzo. Piatti della tradizione, semplici e genuini.',
    sections: [
      {
        title: 'Antipasti',
        dishes: [
          {
            name: 'Bruschette',
            description:
              'Burrata e alici; crema di lardo; patè di olive e capperi; pomodorini e basilico; fegatini di pollo.',
            price: 5,
          },
          {
            name: 'Baccalà mantecato',
            description: 'Con carciofi fritti e salsa di acciughe ed aglio dolce.',
            price: 10,
          },
          {
            name: 'Polpette fritte di bollito',
            description: 'Con maionese al rafano e cipolla rossa agrodolce.',
            price: 10,
          },
          {
            name: 'Tartare di manzo',
            description: "Maionese alla 'nduja, cipolla rossa caramellata e mollica di focaccia croccante.",
            price: 10,
          },
          {
            name: 'Alici fritte',
            description: 'Burrata e cipolla rossa agrodolce.',
            price: 10,
          },
          {
            name: 'Trippa fritta',
            description: 'Con fonduta, cacio pepe e menta.',
            price: 10,
          },
          {
            name: 'Carpaccio di manzo marinato',
            description: 'Con stracciatella e puntarelle alle alici.',
            price: 10,
          },
          {
            name: 'Caesar salad',
            description: 'Pollo alla griglia, crostini di pane, grana e guanciale croccante.',
            price: 10,
          },
        ],
      },
      {
        title: 'Primi',
        dishes: [
          {
            name: 'Primo della tradizione romana',
            description: "Con tonnarelli all'uovo fatti in casa.",
            price: 11,
          },
          { name: 'Primo del giorno di carne', price: 11 },
          { name: 'Primo del giorno di pesce', price: 12 },
          { name: 'Zuppa del giorno', price: 10 },
          {
            name: 'Insalata tiepida di farro',
            description: 'Verdure di stagione, pomodorini e feta greca.',
            price: 10,
          },
        ],
      },
      {
        title: 'Secondi',
        dishes: [
          {
            name: 'Roastbeef di manzo',
            description: 'Salsa al pepe e patate al forno.',
            price: 13,
          },
          {
            name: 'Polpette di manzo',
            description: 'Salsa alla cacciatora e patate al forno, oppure polpette al sugo.',
            price: 13,
          },
          {
            name: 'Tacos di maiale sfilacciato',
            description: 'Con insalatina di cavolo.',
            price: 12,
          },
          { name: 'Pollo al curry', description: 'Con riso basmati.', price: 13 },
          {
            name: 'Treccia di spigola in crosta di pane',
            description: 'Tzatziki ed insalatina con vinaigrette al balsamico.',
            price: 13,
          },
          {
            name: 'Tagliata di tonno alla piastra',
            description: 'Con stracciatella e datterini.',
            price: 15,
          },
          {
            name: 'Saltimbocca alla romana',
            description: 'Con purè di patate.',
            price: 14,
          },
          {
            name: 'Cotoletta di pollo fritta',
            description: 'Patate al forno e maionese agli agrumi.',
            price: 12,
          },
        ],
      },
      {
        title: 'Contorni',
        dishes: [
          { name: 'Verdure del giorno ripassate', price: 5 },
          { name: 'Patate al forno', price: 5 },
        ],
      },
      {
        title: 'Dolci',
        dishes: [
          { name: 'Tiramisù', price: 4 },
          { name: 'Semifreddo allo zenzero', description: 'Con salsa al mango.', price: 6 },
          {
            name: 'Crumble caldo alle mandorle',
            description: 'Mele verdi caramellate e gelato alla vaniglia.',
            price: 6,
          },
          { name: 'Torta al cioccolato', description: 'Con panna.', price: 5 },
          { name: 'Biscottini al vino fatti in casa', price: 4 },
          { name: 'Ricciarelli alle mandorle fatti in casa', description: 'Al pezzo.', price: 2 },
        ],
      },
    ],
  },
  {
    id: 'serale',
    title: 'Menù Serale & Sabato',
    description:
      'La sera e il sabato a pranzo. La nostra proposta più ricercata, tra stagionalità e rivisitazioni della tradizione.',
    sections: [
      {
        title: 'Antipasti',
        dishes: [
          {
            name: 'Focaccia al padellino',
            description: 'Formaggio di capra, miele e misticanza ripassata.',
            price: 11,
          },
          {
            name: 'Uovo pochet',
            description: 'Verdure alla vignarola e guanciale croccante.',
            price: 11,
          },
          {
            name: 'Maritozzo fatto in casa',
            description: 'Stracciatella di bufala, crudo di gambero rosso e zest di limone candito.',
            price: 12,
          },
          {
            name: 'Salame fatto in casa alla piastra',
            description: 'Agretti, purè di patate al limone e fondo bruno al finocchio.',
            price: 11,
          },
        ],
      },
      {
        title: "I classici dell'osteria",
        dishes: [
          {
            name: 'Tartare di manzo',
            description: "Maionese alla 'nduja, cipolla rossa caramellata e mollica di focaccia croccante.",
            price: 12,
          },
          {
            name: 'Baccalà mantecato',
            description: 'Con carciofi fritti e salsa di acciughe ed aglio dolce.',
            price: 12,
          },
          {
            name: 'Trippa fritta',
            description: 'Su fonduta alla cacio, pepe e menta.',
            price: 11,
          },
          {
            name: 'Polpette fritte di bollito (2pz)',
            description: 'Salsa verde e giardiniera di verdure fatta in casa.',
            price: 10,
          },
        ],
      },
      {
        title: 'Primi',
        dishes: [
          {
            name: '"Come un risotto"',
            description: 'Frascarelli mantecati con verdure alla vignarola e guanciale croccante.',
            price: 14,
          },
          {
            name: "Fettuccine all'uovo fatte a mano",
            description: 'Al ragù di cortile.',
            price: 14,
          },
          {
            name: "Bottoni di pasta all'uovo ripieni alla cacio e pepe",
            description: 'Bisque di crostacei, crudo di gamberi e lime.',
            price: 15,
          },
        ],
      },
      {
        title: 'I primi della tradizione',
        note: "Tonnarelli all'uovo fatti in casa o rigatoni di grano duro alla:",
        dishes: [
          { name: 'Cacio e pepe', price: 13 },
          { name: 'Carbonara', price: 13 },
          { name: 'Amatriciana', price: 13 },
          { name: 'Gricia', price: 13 },
        ],
      },
      {
        title: 'Secondi',
        dishes: [
          {
            name: 'Terrina di agnello alla piastra',
            description: 'Con il suo fondo, purè di patate al limone e vignarola.',
            price: 20,
          },
          {
            name: 'Arrosticini di pannicolo di manzo alla griglia',
            description: 'Misticanza ripassata e salsa al pepe verde e grani di senape.',
            price: 18,
          },
          {
            name: 'Saltimbocca di vitella alla romana',
            description: 'Con patate rosticciate alla salvia.',
            price: 18,
          },
          {
            name: 'Fritto misto alla romana',
            description: 'Cervello, animelle e carciofi.',
            price: 19,
          },
          {
            name: 'Baccalà fritto',
            description: 'Hummus di fave, cipolla rossa agrodolce, limone fermentato e pecorino.',
            price: 19,
          },
        ],
      },
      {
        title: 'Dolci',
        dishes: [
          { name: 'Tiramisù', price: 7 },
          { name: 'Mini tiramisù', price: 4 },
          { name: 'Maritozzo caldo fatto in casa', description: 'Con la panna.', price: 7 },
          {
            name: 'Semifreddo allo zenzero',
            description: 'Con salsa al mango e arancia.',
            price: 7,
          },
          { name: "Torta al cioccolato dell'Osteria", description: 'Con panna.', price: 6 },
          { name: 'Biscottini al vino fatti in casa', price: 4 },
          { name: 'Ricciarelli alle mandorle fatti in casa', description: 'Al pezzo.', price: 2.5 },
        ],
      },
    ],
  },
  {
    id: 'degustazione',
    title: 'Menù Degustazione',
    description: 'Due percorsi a prezzo fisso pensati dallo Chef.',
    sections: [
      {
        title: "I classici dell'Osteria",
        fixedPrice: 35,
        dishes: [
          { name: 'Baccalà mantecato, carciofi fritti', description: 'Salsa di acciughe ed aglio dolce.' },
          { name: 'Polpetta fritta di bollito', description: 'Salsa verde e giardiniera di verdure fatta in casa.' },
          { name: 'Primo della tradizione' },
          { name: 'Saltimbocca di vitella alla romana', description: 'Con patate rosticciate alla salvia.' },
          { name: 'Tiramisù' },
        ],
      },
      {
        title: 'Primavera 2026',
        fixedPrice: 39,
        dishes: [
          { name: 'Focaccia al padellino', description: 'Formaggio di capra, miele e misticanza di verdure ripassata.' },
          { name: 'Salame fatto in casa alla piastra', description: 'Agretti, purè di patate al limone e salsa al finocchio.' },
          {
            name: "Bottoni di pasta all'uovo ripieni alla cacio e pepe",
            description: 'Bisque di crostacei, crudo di gamberi e lime.',
          },
          {
            name: 'Arrosticini di pannicolo di manzo alla griglia',
            description: 'Misticanza e salsa al pepe verde e grani di senape.',
          },
          { name: 'Maritozzo caldo', description: 'Con panna.' },
        ],
      },
    ],
  },
]

/* ------------------------------ CARTA DEI VINI ---------------------------- *
 * Struttura: sections → [ { id, title, subsections?, items? } ]
 * Ogni sezione principale può avere `items` diretti o `subsections` (vini esteri).
 * Ogni vino: { name, description?, price }
 * ------------------------------------------------------------------------- */
export const wines = {
  intro:
    'La nostra carta privilegia piccoli produttori e cantine artigianali: agricoltura attenta, basse rese, lavorazioni naturali. Etichette scelte bottiglia per bottiglia, che raccontano un territorio e una persona.',

  sections: [
    {
      id: 'bollicine',
      title: 'Bollicine',
      items: [
        {
          name: 'Metodo Classico Brut 2015 Docg, Oltrepò Pavese',
          description: 'Pinot Nero – Chardonnay · Piero Torti, Lombardia',
          price: 35,
        },
        {
          name: 'Franciacorta Brut Docg',
          description: 'Chardonnay – Pinot Nero · La Fioca, Nigoline di Corte Francia, Brescia, Lombardia',
          price: 35,
        },
        {
          name: 'Franciacorta SoloUva Dosaggio Zero',
          description: 'Chardonnay · Az. Agricola SoloUva, Erbusco (Bs), Lombardia',
          price: 35,
        },
        {
          name: 'Oltrepò Pavese "Suspir" Docg Brut Rosé, Metodo Classico',
          description: 'Pinot Nero · Azienda Agricola La Piotta, Lombardia',
          price: 30,
        },
        {
          name: 'Vino Frizzante Jonny Gambato',
          description: 'Pinot Nero – Vitigni bianchi · Cascina Baricchi, Neviglie, Lombardia',
          price: 25,
        },
        {
          name: 'Vino Spumante Brut Bianco "Rù Maccone" Igp 2017',
          description: 'Maresco, Metodo Ancestrale · Angiuli Donato, Adelfia, Puglia',
          price: 28,
        },
        {
          name: 'Terrebianche Zero, Metodo Ancestrale Bio',
          description: 'Dosaggio Zero · Grechetto · Terraquilla (Mo), Emilia Romagna',
          price: 20,
        },
        {
          name: 'Prosecco Doc Millesimato Brut 2021',
          description: 'Glera · Terra Vizina, Az. Agricola Cesare, Veneto',
          price: 20,
        },
      ],
    },
    {
      id: 'bianchi',
      title: 'Bianchi',
      items: [
        {
          name: 'Chardonnay, Meriggio 2019',
          description: 'Marco Donati, Trentino',
          price: 28,
        },
        {
          name: 'Sylvaner Doc 2021, Pacher Hof',
          description: 'Sudtirol, Valle Isarco, Trentino Alto Adige',
          price: 35,
        },
        {
          name: 'Sauvignon Blanc Vette 2021',
          description: 'Tenuta San Leonardo, Avio, Trentino Alto Adige',
          price: 30,
        },
        {
          name: 'Ribolla Gialla Bio Dop 2020',
          description: 'Friuli Colli Orientali · Az. Agricola Visentini, Friuli',
          price: 27,
        },
        {
          name: 'Malvasia Istriana Doc 2020',
          description: 'Modeano · Az. Agricola Vialetto Gabriele, Udine, Friuli',
          price: 25,
        },
        {
          name: 'Arneis Langhe Docg 2021',
          description: 'Mario Garibaldi, Milandola, Piemonte',
          price: 25,
        },
        {
          name: 'Chardonnay Langhe 2020',
          description: "Giovanni Rocca, Monteforte d'Alba, Piemonte",
          price: 20,
        },
        {
          name: 'Albana Secco di Romagna Docg 2021',
          description: 'FattoriaMonticino Rosso, Montecatone di Imola, Emilia Romagna',
          price: 22,
        },
        {
          name: 'Pecorino, Aufinum 2021',
          description: 'Terre di Chieti · Cantina Valle Traiana, Abruzzo',
          price: 18,
        },
        {
          name: 'Passerina 2021',
          description: 'Cantine di Castignano, Marche',
          price: 18,
        },
        {
          name: 'Pecorino Offida Docg 2021, Montemisio',
          description: 'Cantine di Castignano, Marche',
          price: 22,
        },
        {
          name: 'Verdicchio di Matelica Doc 2020',
          description: 'Stefano Zoli, Marche',
          price: 32,
        },
        {
          name: 'Piana Grande, Orvieto Classico Superiore Doc 2021',
          description: 'Grechetto Procanico – Malvasia · Az. Agricola Castello di Corbara, Orvieto, Umbria',
          price: 24,
        },
        {
          name: 'Maria Grazia Rosato 2021',
          description: 'Sangiovese · Az. Agricola Castello di Corbara, Orvieto, Umbria',
          price: 25,
        },
        {
          name: 'Cacchione Doc 2021',
          description: 'Az. Agricola Casa Divina Provvidenza, Lazio',
          price: 18,
        },
        {
          name: 'Frascati Superiore Primo Riserva Docg 2018',
          description: 'Merumalia, Lazio',
          price: 30,
        },
        {
          name: 'Malvasia Puntinata, Gallieno 2020 Bio',
          description: 'Az. Agricola Riserva della Cascina, Lazio',
          price: 28,
        },
        {
          name: 'Vermentino di Sardegna Doc 2019, La Giara',
          description: 'Oristano, Sardegna',
          price: 20,
        },
        {
          name: 'Vermentino Pusole Bianco 2018',
          description: 'Lotzorai (Og), Sardegna',
          price: 30,
        },
        {
          name: 'Malvasia, Salina 2021, Secca del Capo',
          description: 'Colosi, Isole Eolie, Sicilia',
          price: 26,
        },
        {
          name: 'Terre Siciliane 2019',
          description: 'Insolia – Cataratto · Colosi, Isole Eolie, Sicilia',
          price: 26,
        },
        {
          name: 'Rina Ianca Doc 2021 Bio',
          description: 'Grillo – Viognier · Santa Tresa, Sicilia',
          price: 30,
        },
        {
          name: 'Negramaro Bianco "Maccone" Igp 2020',
          description: "Angiuli Donato, Valle d'Itria, Puglia",
          price: 22,
        },
      ],
    },
    {
      id: 'rossi',
      title: 'Rossi',
      items: [
        {
          name: 'Lagrein Rubino, Fratte Alte Doc 2021',
          description: 'Marco Donati, Trentino Alto Adige',
          price: 27,
        },
        {
          name: 'Pinot Nero Centa Doc 2021',
          description: 'Marco Donati, Trentino Alto Adige',
          price: 28,
        },
        {
          name: 'Teroldego Rotaliano Doc 2019, Bagolari',
          description: 'Marco Donati, Trentino Alto Adige',
          price: 28,
        },
        {
          name: 'Merlot, Friuli Colli Orientali Bio, Dop 2020',
          description: 'Az. Agricola Visintini, Friuli',
          price: 27,
        },
        {
          name: 'Cabernet Franc Bio 2018',
          description: 'Irene Cencig, Cividale del Friuli, Udine, Friuli',
          price: 29,
        },
        {
          name: 'Refosco dal Peduncolo Rosso Doc 2019',
          description: 'Modeano · Azienda Agricola Vialetto, Udine, Friuli',
          price: 25,
        },
        {
          name: 'Nebbiolo Langhe Doc 2018, Passeggiando in Vigna',
          description: 'Gabriele Scaglione, Piemonte',
          price: 29,
        },
        {
          name: 'Barolo Doc 2018',
          description: 'Giovanni Rocca, Piemonte',
          price: 46,
        },
        {
          name: 'Langhe Rosso Doc Bio 2017',
          description: 'Giribaldi, Piemonte',
          price: 27,
        },
        {
          name: 'Valpolicella Classico Superiore, Vecio Belo Doc 2016',
          description: 'Manara, Veneto',
          price: 25,
        },
        {
          name: 'Valpolicella Ripasso Classico Superiore, Le Morete Doc 2017',
          description: 'Manara, Veneto',
          price: 30,
        },
        {
          name: 'Rossese di Dolceacqua Doc 2019',
          description: 'RosMarinus, Perinaldo, Imperia, Liguria',
          price: 30,
        },
        {
          name: 'Chianti Classico Docg Bio 2019',
          description: 'Soc. Agricola Pomona, Toscana',
          price: 27,
        },
        {
          name: 'Bolgheri Rosso Bio, Scirè, Doc 2020',
          description: 'Az. Agricola Ceralti, Castagneto Carducci, Toscana',
          price: 30,
        },
        {
          name: 'Rosso di Montepulciano Docg 2019',
          description: 'Fattoria del Cerro, Siena, Toscana',
          price: 20,
        },
        {
          name: 'Offida Rosso Docg 2016, Gran Maestro',
          description: 'Cantina Castignano, Marche',
          price: 30,
        },
        {
          name: 'Lago di Corbara, Sangiovese Doc 2019',
          description: 'Az. Agricola Castello di Corbara, Orvieto, Umbria',
          price: 30,
        },
        {
          name: 'Cesanese del Piglio, Brigante, Docg 2017',
          description: 'Lazio',
          price: 20,
        },
        {
          name: 'Cesanese di Olevano Romano Superiore 2021',
          description: 'Giacobbe, Lazio',
          price: 30,
        },
        {
          name: 'Tintilla del Molise, Lame del Sorbo Doc 2016',
          description: 'Agricolavinica Le Colline di Ripa, Ripalimosani, Molise',
          price: 28,
        },
        {
          name: 'Primitivo 2016, Maccone',
          description: 'Angiuli Donato, Puglia',
          price: 30,
        },
        {
          name: 'Nero di Troia, Hellen Rosso 2020',
          description: 'Progetto Calcarius, Apricena, Puglia',
          price: 30,
        },
        {
          name: "Nero D'Avola Doc 2020 Bio",
          description: 'Azienda Agricola Barone di Serramarrocco, Sicilia',
          price: 20,
        },
        {
          name: 'Nerello Mascalese Nostru Bio 2020',
          description: 'Azienda Agricola Cortese, Ragusa, Sicilia',
          price: 28,
        },
        {
          name: 'Rosa di Santa Tresa Bio 2020',
          description: "Nero d'Avola – Frappato · Santa Tresa, Vittoria (RG), Sicilia",
          price: 26,
        },
        {
          name: 'Pollino, Terre di Cosenza Dop 2015',
          description: 'Magliocco · Giuseppe Calabrese, Cosenza, Calabria',
          price: 28,
        },
        {
          name: 'Cannonau di Sardegna Doc 2017',
          description: 'Azienda Agricola Nino Castiglia, Sassari, Sardegna',
          price: 30,
        },
      ],
    },
    {
      id: 'esteri',
      title: 'Vini Esteri',
      subsections: [
        {
          title: 'Francia — Bollicine',
          items: [
            {
              name: 'Vouvray Cuvée Clément Brut 2015',
              description: 'Chenin Blanc · Domaine de la Galinière, Loira',
              price: 27,
            },
            {
              name: 'Expression Brut Méthode Traditionelle Aoc',
              description: 'Gamay · Domaine Claude Vosgien, Lorraine',
              price: 30,
            },
          ],
        },
        {
          title: 'Francia — Bianchi',
          items: [
            {
              name: 'Gewurztraminer AOC 2019',
              description: 'Domaine Leon Faller, Alsace',
              price: 30,
            },
            {
              name: 'Chablis "Le Guilleret" 2021 Aoc',
              description: 'Chardonnay · Domaine de la Motte, Bourgogne',
              price: 40,
            },
            {
              name: 'Vouvray Tradition 2009 Aoc',
              description: 'Chenin Blanc · Domaine de la Galinière, Loira',
              price: 28,
            },
            {
              name: 'Muscadet Sèvre et Maine sur Lie Bio 2018',
              description: 'Melon de Bourgogne · Tête de Linotte, Albert Besombe, Loira',
              price: 26,
            },
            {
              name: 'Pépin Blanc Sec Bio',
              description: 'Chardonnay – Riesling – Sylvaner · Domaine Achielleè, Alsazia',
              price: 35,
            },
            {
              name: 'Vin de Frantz',
              description: 'Sauvignon – Chenin Blanc · Frantz Saumon, Montlouis sur Loire',
              price: 35,
            },
          ],
        },
        {
          title: 'Francia — Rosé',
          items: [
            {
              name: 'Vin Gris Côtes de Toul Grand Terroir Bio 2020',
              description: 'Gamay – Pinot Noir · Domaine Claude Vosgien, Lorraine',
              price: 30,
            },
          ],
        },
        {
          title: 'Francia — Rossi',
          items: [
            {
              name: 'Cabernet Sauvignon 2020 "What the Phoque"',
              description: 'Albert Besombe, Loira',
              price: 25,
            },
            {
              name: 'Merlot Igp Pays d\'Oc 2018',
              description: "Domaine de L'Herbe Sainte, Languedoc",
              price: 25,
            },
          ],
        },
        {
          title: 'Germania',
          items: [
            {
              name: 'Riesling Ambrosia, Kabinett Trocken 2018',
              description: 'Weingut Gessinger, Mosel',
              price: 30,
            },
            {
              name: 'Riesling Spätlese Trocken Alte Reben 2017, Zeltinger',
              description: 'Weingut Gessinger, Mosel',
              price: 40,
            },
          ],
        },
        {
          title: 'Austria',
          items: [
            {
              name: 'Wagram Grüner Veltliner 2021',
              description: 'Stefan Bauer, Austria',
              price: 30,
            },
          ],
        },
      ],
    },
    {
      id: 'birre',
      title: 'Birre Artigianali',
      items: [
        {
          name: 'India Pale Ale 7% — 33cl',
          description: 'Birrificio Plurale, Montoggio, Genova, Liguria',
          price: 6,
        },
        {
          name: 'Golden Ale 5,1% — 33cl',
          description: 'Birrificio Plurale, Montoggio, Genova, Liguria',
          price: 6,
        },
        {
          name: 'White Ale 4,5% — 33cl',
          description: 'Birrificio Plurale, Montoggio, Genova, Liguria',
          price: 6,
        },
        {
          name: 'Summer Ale 3,8% — 33cl',
          description: 'Birrificio Plurale, Montoggio, Genova, Liguria',
          price: 6,
        },
        {
          name: 'Bròc, Birra Agricola 6% — 50cl',
          description: 'Roccalbegna, Toscana',
          price: 11,
        },
      ],
    },
  ],
}
