import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function AdminGuidePage() {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    const m = document.createElement('meta')
    m.name = 'robots'
    m.content = 'noindex, nofollow'
    document.head.appendChild(m)
    return () => { document.head.removeChild(m) }
  }, [])

  useEffect(() => {
    const identity = window.netlifyIdentity
    if (!identity) {
      window.location.replace('/admin/')
      return
    }

    const handle = (user) => {
      if (user) {
        setStatus('ok')
      } else {
        window.location.replace('/admin/')
      }
    }

    if (identity.currentUser) {
      const existing = identity.currentUser()
      if (existing) {
        setStatus('ok')
        return
      }
    }

    identity.on('init', handle)
    identity.on('login', () => setStatus('ok'))
    identity.on('logout', () => window.location.replace('/admin/'))

    const timeout = setTimeout(() => {
      const u = identity.currentUser && identity.currentUser()
      handle(u)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  if (status !== 'ok') {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-cream">
        <p className="text-charcoal/60">Verifica accesso…</p>
      </section>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="Solo per il ristoratore"
        title="Guida al pannello di gestione"
        subtitle="Manuale completo del pannello di amministrazione, spiegato come se fosse la prima volta."
      />
      <section className="container-x py-12 max-w-3xl mx-auto">
        <nav className="mb-12 rounded-xl border border-blush bg-cream/60 p-6 text-sm">
          <p className="font-semibold uppercase tracking-widest text-xs text-charcoal/60 mb-4">Indice</p>
          <ul className="space-y-2">
            <li><a href="#cose" className="text-terracotta hover:underline">1. Cos'è il pannello e a cosa serve</a></li>
            <li><a href="#accesso" className="text-terracotta hover:underline">2. Come entrare nel pannello</a></li>
            <li><a href="#orientarsi" className="text-terracotta hover:underline">3. Orientarsi nel pannello</a></li>
            <li><a href="#info" className="text-terracotta hover:underline">4. Modificare le informazioni del ristorante</a></li>
            <li><a href="#menu" className="text-terracotta hover:underline">5. Gestire il menù</a></li>
            <li><a href="#vini" className="text-terracotta hover:underline">6. Gestire la carta dei vini</a></li>
            <li><a href="#team" className="text-terracotta hover:underline">7. Gestire chef e sommelier</a></li>
            <li><a href="#foto" className="text-terracotta hover:underline">8. Caricare e gestire le foto</a></li>
            <li><a href="#pubblica" className="text-terracotta hover:underline">9. Salvare e pubblicare le modifiche</a></li>
            <li><a href="#trovare" className="text-terracotta hover:underline">10. Trovare velocemente un piatto o un vino</a></li>
            <li><a href="#errori" className="text-terracotta hover:underline">11. Errori comuni e come risolverli</a></li>
            <li><a href="#sicurezza" className="text-terracotta hover:underline">12. Sicurezza e buone abitudini</a></li>
          </ul>
        </nav>

        <article className="prose max-w-none">

          <h2 id="cose">1. Cos'è il pannello e a cosa serve</h2>
          <p>
            Il pannello di gestione (o "pannello admin") è una <strong>pagina web privata</strong> dove
            puoi modificare i contenuti del sito del ristorante <strong>senza dover toccare codice</strong>.
            Tutto ciò che modifichi qui appare sul sito vero, visibile ai clienti, entro un paio di minuti.
          </p>
          <p>Dal pannello puoi:</p>
          <ul>
            <li>Cambiare nome, descrizione, orari, indirizzo, telefono ed email del ristorante</li>
            <li>Aggiungere, modificare o togliere piatti e prezzi del menù</li>
            <li>Aggiornare la carta dei vini</li>
            <li>Cambiare le foto dello slideshow della home e quelle del team</li>
            <li>Aggiornare i link ai social (Instagram, Facebook, Tripadvisor)</li>
          </ul>
          <p>
            <strong>Non serve installare nulla.</strong> Si usa direttamente dal browser
            (Chrome, Safari, Edge, Firefox), sia da computer che da telefono o tablet.
            Da computer è molto più comodo.
          </p>

          <h2 id="accesso">2. Come entrare nel pannello</h2>
          <p>Passo per passo:</p>
          <ol>
            <li>
              Apri il browser che usi di solito (Chrome, Safari, ecc.).
            </li>
            <li>
              Nella barra degli indirizzi in alto digita l'indirizzo del sito seguito da{' '}
              <code>/admin</code>. Esempio: <code>laltraosteria.it/admin</code>. Premi Invio.
            </li>
            <li>
              Si aprirà una pagina con il logo del ristorante e un pulsante <strong>"Login"</strong>.
              Cliccalo.
            </li>
            <li>
              Compare una finestra che chiede <strong>email</strong> e <strong>password</strong>.
              Sono quelle che ti sono state fornite via email al momento della consegna del sito.
            </li>
            <li>
              Clicca <strong>"Log in"</strong>. Se le credenziali sono corrette entri nel pannello.
            </li>
          </ol>
          <p>
            <strong>Se hai dimenticato la password</strong>, nella finestra di login clicca su
            "Forgot password?". Ti arriverà un'email con un link per impostarne una nuova.
            Controlla anche la cartella Spam.
          </p>
          <p>
            <strong>Aggiungere alla schermata iniziale del telefono</strong> (consigliato): da Safari o Chrome
            sul telefono, mentre sei sulla pagina <code>/admin</code>, tocca l'icona di condivisione e poi
            "Aggiungi a Home". Avrai un'icona dedicata per entrare con un tocco.
          </p>

          <h2 id="orientarsi">3. Orientarsi nel pannello</h2>
          <p>Una volta entrato vedrai tre aree principali:</p>
          <ul>
            <li>
              <strong>Colonna di sinistra "Raccolte"</strong>: contiene le 4 sezioni del sito che puoi
              modificare:
              <ul>
                <li>🏠 <strong>Informazioni Ristorante</strong> — nome, orari, indirizzo, telefono, social, slideshow home, dati fiscali</li>
                <li>🍽️ <strong>Menù</strong> — tutti i piatti suddivisi per categorie e sezioni</li>
                <li>👨‍🍳 <strong>Chef &amp; Sommelier</strong> — biografie e foto del team</li>
                <li>🍷 <strong>Carta dei Vini</strong> — vini suddivisi per categorie</li>
              </ul>
            </li>
            <li>
              <strong>Area centrale</strong>: qui appare il contenuto della sezione selezionata.
              È qui che modifichi.
            </li>
            <li>
              <strong>Anteprima a destra</strong>: mentre modifichi, qui vedi in tempo reale come
              apparirà la modifica sul sito vero. Aggiornata istantaneamente.
            </li>
          </ul>
          <p>
            In basso a destra c'è un pulsante rosso fisso <strong>"Guida"</strong>: cliccandolo
            riapri sempre questa pagina che stai leggendo.
          </p>
          <p>
            Per <strong>uscire dal pannello</strong> clicca sul tuo nome in alto a destra e poi
            "Logout".
          </p>

          <h2 id="info">4. Modificare le informazioni del ristorante</h2>
          <ol>
            <li>Dalla colonna a sinistra clicca su <strong>🏠 Informazioni Ristorante</strong>.</li>
            <li>Clicca su <strong>"Dati principali"</strong>.</li>
            <li>Compaiono tutti i campi modificabili. Scorri verso il basso per vederli tutti.</li>
          </ol>
          <p><strong>Campi disponibili</strong>:</p>
          <ul>
            <li>
              <strong>Nome ristorante</strong>: il nome che appare nei titoli del sito.
            </li>
            <li>
              <strong>Tagline</strong>: la frase breve che appare sotto il nome (es. "Cucina romana,
              tra tradizione e rivisitazione").
            </li>
            <li>
              <strong>Testo introduttivo (home)</strong>: paragrafo di presentazione che appare nella
              home dopo il nome.
            </li>
            <li>
              <strong>Telefono</strong>: il numero come preferisci scriverlo, anche con spazi
              (es. <code>+39 06 8952 4311</code>). Il sito ricava in automatico la versione "pulita"
              per i link "chiama".
            </li>
            <li>
              <strong>Email</strong>: deve essere un indirizzo valido con la <code>@</code> e il
              dominio (es. <code>info@ristorante.it</code>). Se sbagli formato, il sistema te lo dice
              con un messaggio rosso e non ti fa salvare.
            </li>
            <li>
              <strong>Indirizzo</strong>: via e numero civico, CAP e città, link a Google Maps
              (opzionale ma consigliato — incolla l'URL della scheda Google Maps del ristorante).
            </li>
            <li>
              <strong>Orari di apertura</strong>: ogni riga è una fascia. Per ciascuna riga indica:
              <ul>
                <li><em>Giorni</em>: testo libero (es. "Martedì – Sabato", "Domenica e Lunedì")</li>
                <li><em>Orario pranzo</em>: opzionale (es. "13:00 – 14:45")</li>
                <li><em>Orario cena</em>: opzionale (es. "20:00 – 22:30")</li>
                <li><em>Giorno di chiusura</em>: spunta questa casella se quei giorni siete chiusi.
                  In tal caso lascia vuoti gli orari.</li>
              </ul>
              Per aggiungere una fascia clicca <strong>"Aggiungi Fascia oraria"</strong> in fondo.
              Per rimuoverne una clicca la <strong>X</strong> a destra della riga.
            </li>
            <li>
              <strong>Social</strong>: i link alle pagine Instagram, Facebook e Tripadvisor.
              <strong>Devono iniziare con <code>https://</code></strong> ed essere link completi
              (es. <code>https://www.instagram.com/laltraosteria/</code>). Se non avete una pagina,
              lascia vuoto.
            </li>
            <li>
              <strong>Foto slideshow (home)</strong>: le immagini che scorrono automaticamente nella home.
              Vedi la sezione 8 per come caricarle.
            </li>
            <li>
              <strong>Dati aziendali</strong>: ragione sociale, P.IVA, codice fiscale, sede legale,
              PEC. <strong>Obbligatori per legge</strong> (D.Lgs. 70/2003): se non compilati il sito
              tecnicamente non è a norma. Si vedono in piccolo nel footer di ogni pagina.
            </li>
          </ul>

          <h2 id="menu">5. Gestire il menù</h2>
          <p>
            Il menù è organizzato a "scatole" — categorie che contengono sezioni, che contengono piatti.
          </p>
          <p><strong>Struttura</strong>:</p>
          <ul>
            <li>
              <strong>Categoria</strong>: il tab principale che il cliente vede sul sito.
              Esempio: "Menù Pranzo", "Menù Serale", "Menù Degustazione".
            </li>
            <li>
              <strong>Sezione</strong>: la suddivisione dentro a una categoria.
              Esempio: "Antipasti", "Primi", "Secondi", "Dolci".
            </li>
            <li>
              <strong>Piatto</strong>: la singola portata con nome, descrizione e prezzo.
            </li>
          </ul>

          <h3>Modificare un piatto esistente</h3>
          <ol>
            <li>Dalla colonna a sinistra clicca <strong>🍽️ Menù → Categorie del menù</strong>.</li>
            <li>Vedrai l'elenco delle categorie. Clicca sulla freccia <strong>{'>'}</strong> a sinistra
              della categoria che ti interessa per espanderla.</li>
            <li>Espandi la sezione (es. "Primi") allo stesso modo.</li>
            <li>Clicca sul piatto da modificare per aprirlo.</li>
            <li>Modifica nome, descrizione o prezzo.</li>
            <li>Scorri in cima alla pagina e clicca <strong>"Salva"</strong>, poi <strong>"Pubblica"</strong>.</li>
          </ol>

          <h3>Aggiungere un piatto nuovo</h3>
          <ol>
            <li>Espandi la categoria e la sezione dove vuoi aggiungerlo.</li>
            <li>In fondo all'elenco dei piatti clicca <strong>"Aggiungi Piatto"</strong>.</li>
            <li>Compila nome, descrizione (opzionale) e prezzo. <strong>Il prezzo è solo un numero</strong>:
              scrivi <code>13</code>, non <code>13€</code> o <code>13 €</code>. Per usare i decimali metti
              il punto (es. <code>13.50</code>).</li>
            <li>Salva e pubblica.</li>
          </ol>

          <h3>Riordinare i piatti</h3>
          <p>
            Tieni premuto il <strong>quadratino con tre lineette</strong> a sinistra del piatto
            e <strong>trascinalo</strong> sopra o sotto. L'ordine sul pannello = l'ordine che vedrà
            il cliente sul sito.
          </p>

          <h3>Eliminare un piatto</h3>
          <p>
            Clicca la <strong>X</strong> a destra del piatto e conferma. Attenzione: l'eliminazione
            è effettiva solo dopo aver cliccato "Salva" e "Pubblica".
          </p>

          <h3>Menù degustazione (prezzo fisso)</h3>
          <p>
            Per il menù degustazione c'è il campo <strong>"Prezzo fisso €/persona"</strong> a livello
            di <em>sezione</em>. Compilalo con il prezzo per persona (es. <code>35</code>) e
            <strong>lascia vuoto il prezzo dei singoli piatti</strong> della sezione. In questo
            modo sul sito appariranno i piatti elencati senza prezzo e in alto il totale a persona.
          </p>

          <h2 id="vini">6. Gestire la carta dei vini</h2>
          <p>Struttura simile al menù, ma a 2 livelli (o 3 per i vini esteri):</p>
          <ul>
            <li><strong>Categoria</strong>: es. "Bianchi", "Rossi", "Bollicine", "Vini Esteri".</li>
            <li><strong>Vino</strong>: nome, descrizione (produttore, regione, annata), prezzo.</li>
            <li><strong>Sottocategoria</strong> (solo per "Vini Esteri"): permette di suddividere ulteriormente, es. "Francia — Bianchi" / "Francia — Rossi".</li>
          </ul>
          <p>
            Procedura per modificare/aggiungere identica al menù.
            <strong>Tutti i vini devono avere un prezzo numerico</strong> (sennò il sistema non ti fa
            salvare).
          </p>

          <h2 id="team">7. Gestire chef e sommelier</h2>
          <p>Dalla colonna sinistra clicca <strong>👨‍🍳 Chef &amp; Sommelier → Persone</strong>.</p>
          <p>Per ogni persona puoi modificare:</p>
          <ul>
            <li><strong>Ruolo</strong>: es. "Lo Chef", "La Sommelier", "Il Maître".</li>
            <li><strong>Nome e cognome</strong>.</li>
            <li><strong>Biografia</strong>: il testo descrittivo che appare sotto la foto sul sito.</li>
            <li>
              <strong>Foto</strong>: meglio una foto <strong>verticale del volto</strong>, ben
              illuminata, con sfondo non troppo carico. Vedi sezione 8 per come caricarla.
            </li>
          </ul>
          <p>
            Per aggiungere una persona nuova clicca <strong>"Aggiungi Persona"</strong> in fondo
            all'elenco. Per riordinarle, trascinale.
          </p>

          <h2 id="foto">8. Caricare e gestire le foto</h2>
          <p>
            Ogni campo "Foto" del pannello ha una sua <strong>libreria dedicata</strong>: quando clicchi
            su un campo foto vedi solo le immagini di quella categoria (slideshow vs team), così non si
            mescolano.
          </p>

          <h3>Caricare una foto nuova</h3>
          <ol>
            <li>Clicca sul campo foto (es. una nuova foto del team).</li>
            <li>Si apre una finestra "Risorse multimediali" con le foto già presenti.</li>
            <li>In alto a destra clicca il pulsante nero <strong>"Upload"</strong>.</li>
            <li>Si apre il file manager del tuo computer: scegli la foto e clicca "Apri".</li>
            <li>La foto appare nella libreria. Cliccala per selezionarla.</li>
            <li>Clicca <strong>"Inserisci selezionato"</strong> in alto.</li>
          </ol>

          <h3>Sostituire una foto esistente</h3>
          <p>
            Apri il campo foto, clicca sull'icona di rimozione (cestino o X) per togliere quella
            attuale, poi segui la procedura di caricamento sopra.
          </p>

          <h3>Formati e dimensioni</h3>
          <ul>
            <li>Formati supportati: <strong>JPG</strong>, <strong>PNG</strong>, <strong>WebP</strong>.</li>
            <li>
              <strong>Slideshow home</strong>: foto <em>orizzontali</em>, luminose, evitare foto buie
              o sgranate.
            </li>
            <li>
              <strong>Foto team</strong>: foto <em>verticali</em> del volto, sfondo pulito,
              ben illuminate.
            </li>
            <li>
              Non preoccuparti delle dimensioni del file: il sito <strong>comprime automaticamente</strong>
              le foto al momento della pubblicazione. Puoi caricare anche foto da 10 MB e funzionerà.
            </li>
          </ul>

          <h3>Riordinare le foto dello slideshow</h3>
          <p>
            Nella sezione "Foto slideshow (home)", trascina le foto su o giù tenendole premute dal
            quadratino con le tre lineette. L'ordine qui = l'ordine in cui scorrono nella home.
          </p>

          <h2 id="pubblica">9. Salvare e pubblicare le modifiche</h2>
          <p>
            Quando modifichi un campo, in alto al centro/destra compaiono due pulsanti che ti
            riguardano:
          </p>
          <ul>
            <li>
              <strong>"Salva"</strong>: salva le modifiche come <em>bozza</em>. Sul sito vero non si
              vede ancora niente. Utile se vuoi tornare più tardi a finire.
            </li>
            <li>
              <strong>"Pubblica"</strong>: rende le modifiche <strong>visibili sul sito vero</strong>.
              Cliccalo solo quando sei sicuro.
            </li>
          </ul>
          <p>
            <strong>Quanto tempo ci mette ad apparire?</strong> Tipicamente da 1 a 2 minuti. Il sito
            si "ricostruisce" automaticamente in background. Se ricarichi la pagina sul sito vero dopo
            2 minuti, vedrai la nuova versione.
          </p>
          <p>
            <strong>Se ti penti prima di pubblicare</strong>: clicca "Esci" / "Annulla" senza salvare.
            Le modifiche vanno perse e resta tutto com'era.
          </p>

          <h2 id="trovare">10. Trovare velocemente un piatto o un vino</h2>
          <p>
            Il pannello non ha una ricerca dentro ai piatti, ma puoi usare il <strong>cerca del
            browser</strong>:
          </p>
          <ol>
            <li>Entra nella categoria (es. "Menù Serale") ed espandi tutte le sezioni che ti interessano.</li>
            <li>Premi <strong>Ctrl+F</strong> (su Windows) o <strong>Cmd+F</strong> (su Mac).</li>
            <li>Si apre una barra di ricerca in alto. Digita il nome del piatto (es. "tartare").</li>
            <li>Il browser evidenzia tutte le occorrenze sulla pagina. Con i tasti freccia su/giù scorri tra i risultati.</li>
          </ol>

          <h2 id="errori">11. Errori comuni e come risolverli</h2>

          <h3>"Il campo è rosso e non mi fa salvare"</h3>
          <p>
            Significa che il valore inserito non rispetta il formato richiesto. Sotto al campo
            compare un messaggio rosso che spiega cosa correggere. Esempi:
          </p>
          <ul>
            <li>Email senza la <code>@</code> → correggi inserendo un'email completa</li>
            <li>Link social senza <code>https://</code> → aggiungi <code>https://</code> all'inizio</li>
            <li>Prezzo con virgola o simbolo → usa il punto e niente €</li>
          </ul>

          <h3>"Non riesco a cancellare un elemento, la X è grigia"</h3>
          <p>
            Alcune liste (categorie, sezioni, team) hanno un <strong>numero minimo</strong> di elementi
            per evitare che il sito resti vuoto. Se la X è disabilitata, significa che sei al minimo:
            puoi modificare l'elemento ma non eliminarlo. Per esempio non puoi avere zero membri del
            team o zero categorie nel menù.
          </p>

          <h3>"Ho pubblicato una modifica sbagliata"</h3>
          <p>
            Niente panico — il pannello salva ogni versione precedente. Puoi semplicemente
            riaprire il campo e correggerlo, poi ripubblicare. Se la modifica era grossa e non
            ricordi com'era prima, contatta l'amministratore tecnico: può ripristinare una versione
            precedente partendo dalla cronologia.
          </p>

          <h3>"Le mie modifiche non appaiono sul sito vero"</h3>
          <p>Verifica nell'ordine:</p>
          <ol>
            <li>Hai cliccato <strong>Pubblica</strong> (non solo "Salva")?</li>
            <li>Sono passati almeno 2 minuti?</li>
            <li>Hai ricaricato la pagina del sito con <strong>Ctrl+F5</strong> (o Cmd+R su Mac)
              per forzare l'aggiornamento?</li>
          </ol>
          <p>Se dopo questi controlli non vedi niente, contatta l'amministratore tecnico.</p>

          <h3>"Non riesco più ad entrare nel pannello"</h3>
          <p>
            Verifica:
          </p>
          <ol>
            <li>L'indirizzo è scritto bene? Deve finire con <code>/admin</code>.</li>
            <li>La password è giusta? Hai provato a copia/incollarla con eventuali spazi?</li>
            <li>Se ti dice "Email non trovata", verifica di scrivere l'email senza errori.</li>
            <li>Reset password con "Forgot password?" se nient'altro funziona.</li>
          </ol>

          <h2 id="sicurezza">12. Sicurezza e buone abitudini</h2>
          <ul>
            <li>
              <strong>Attiva la verifica in due passaggi (2FA)</strong> sul tuo account Netlify:
              chiede un codice dal telefono ogni volta che entri da un dispositivo nuovo. È la
              difesa più importante contro chi cercasse di rubarti l'accesso.
            </li>
            <li>
              <strong>Non condividere mai email e password</strong> con persone esterne al ristorante,
              neanche per email o WhatsApp. Se più persone devono accedere, ognuna deve avere il
              proprio account.
            </li>
            <li>
              <strong>Usa una password lunga e unica</strong> (almeno 12 caratteri, non riutilizzata su
              altri siti). Se non riesci a ricordarle, usa un gestore password tipo Bitwarden o
              quello integrato in Chrome/Safari.
            </li>
            <li>
              <strong>Esci dal pannello quando hai finito</strong>, soprattutto se usi un computer
              condiviso (es. quello in sala).
            </li>
            <li>
              <strong>Modifica una cosa alla volta</strong> e verifica il risultato sul sito vero
              prima di passare al successivo. Eviti di scoprire un errore quando hai già fatto
              dieci modifiche.
            </li>
            <li>
              <strong>Per cambiamenti grossi</strong> (es. nuova carta dei vini stagionale), fai
              prima uno screenshot della versione attuale: avere un confronto può sempre tornare
              utile.
            </li>
          </ul>

          <p className="text-sm text-charcoal/60 mt-12 border-t border-blush pt-6">
            Hai trovato un errore in questa guida o qualcosa non è chiaro? Segnalalo
            all'amministratore tecnico, ti risponderemo e aggiorneremo la pagina.
          </p>
        </article>
      </section>
    </>
  )
}
