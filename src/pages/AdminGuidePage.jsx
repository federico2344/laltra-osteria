import { useEffect } from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function AdminGuidePage() {
  useEffect(() => {
    const m = document.createElement('meta')
    m.name = 'robots'
    m.content = 'noindex, nofollow'
    document.head.appendChild(m)
    return () => { document.head.removeChild(m) }
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Solo per il ristoratore"
        title="Guida al pannello di gestione"
        subtitle="Tutto quello che puoi fare dal pannello /admin, spiegato passo passo."
      />
      <section className="container-x py-12 max-w-3xl">
        <nav className="mb-12 rounded-lg bg-cream-darker p-5 text-sm">
          <p className="font-semibold uppercase tracking-wider text-xs text-charcoal/60 mb-3">Indice</p>
          <ul className="space-y-1.5">
            <li><a href="#accesso" className="text-crimson hover:underline">1. Come entrare nel pannello</a></li>
            <li><a href="#info" className="text-crimson hover:underline">2. Modificare le informazioni del ristorante</a></li>
            <li><a href="#menu" className="text-crimson hover:underline">3. Gestire il menù</a></li>
            <li><a href="#vini" className="text-crimson hover:underline">4. Gestire la carta dei vini</a></li>
            <li><a href="#team" className="text-crimson hover:underline">5. Gestire chef e sommelier</a></li>
            <li><a href="#foto" className="text-crimson hover:underline">6. Caricare e gestire le foto</a></li>
            <li><a href="#pubblica" className="text-crimson hover:underline">7. Salvare e pubblicare</a></li>
            <li><a href="#tips" className="text-crimson hover:underline">8. Consigli e problemi comuni</a></li>
          </ul>
        </nav>

        <article className="prose prose-charcoal max-w-none">
          <h2 id="accesso">1. Come entrare nel pannello</h2>
          <p>
            Apri il browser e vai a <code>/admin</code> (es. <code>laltraosteria.it/admin</code>).
            Inserisci email e password che ti sono state fornite. Se hai dimenticato la password,
            clicca su "Forgot password?" e riceverai un link via email per reimpostarla.
          </p>
          <p>
            <strong>Importante:</strong> non condividere le credenziali con persone esterne al
            ristorante. Se più persone devono accedere, chiedi all'amministratore di inviare un
            invito separato per ciascuna.
          </p>

          <h2 id="info">2. Modificare le informazioni del ristorante</h2>
          <p>
            Sezione <strong>🏠 Informazioni Ristorante → Dati principali</strong>. Qui modifichi:
          </p>
          <ul>
            <li><strong>Nome, tagline, testo introduttivo</strong>: quello che si vede nella home.</li>
            <li><strong>Telefono</strong>: la versione visualizzata (con spazi) e quella "solo cifre"
              (usata per i link "chiama"). <em>La versione solo cifre accetta solo numeri.</em></li>
            <li><strong>Email</strong>: indirizzo di contatto. Deve essere un'email valida.</li>
            <li><strong>Indirizzo</strong>: via, città e link Google Maps.</li>
            <li><strong>Orari</strong>: ogni riga è una fascia. Spunta "Giorno di chiusura" se non c'è apertura.</li>
            <li><strong>Social</strong>: link a Instagram, Facebook, Tripadvisor. Devono iniziare con <code>https://</code>.</li>
            <li><strong>Foto slideshow</strong>: le immagini che scorrono nella home (vedi sezione 6).</li>
            <li><strong>Dati aziendali</strong>: ragione sociale, P.IVA, codice fiscale, ecc. Appaiono in piccolo nel footer (obbligo di legge).</li>
          </ul>

          <h2 id="menu">3. Gestire il menù</h2>
          <p>
            Sezione <strong>🍽️ Menù → Categorie del menù</strong>. La struttura è organizzata in 3 livelli:
          </p>
          <ol>
            <li><strong>Categorie</strong>: Pranzo, Serale, Degustazione. Sono i tab principali.</li>
            <li><strong>Sezioni</strong> dentro a una categoria: Antipasti, Primi, Secondi, Dolci, ecc.</li>
            <li><strong>Piatti</strong> dentro a una sezione: nome, descrizione, prezzo.</li>
          </ol>
          <p>
            <strong>Per modificare un piatto:</strong> espandi la categoria → la sezione → clicca sul piatto, modifica e salva.
          </p>
          <p>
            <strong>Per aggiungere un piatto:</strong> nella sezione, clicca su "Aggiungi Piatto" in fondo alla lista.
          </p>
          <p>
            <strong>Per riordinare:</strong> trascina i piatti tenendoli premuti dall'icona di trascinamento.
            L'ordine nel pannello = l'ordine sul sito.
          </p>
          <p>
            <strong>Per il menù degustazione:</strong> usa il campo "Prezzo fisso €/persona" invece dei singoli prezzi.
            Lascia vuoto il prezzo dei singoli piatti.
          </p>

          <h2 id="vini">4. Gestire la carta dei vini</h2>
          <p>
            Sezione <strong>🍷 Carta dei Vini → Vini</strong>. Struttura simile al menù:
          </p>
          <ul>
            <li><strong>Categorie</strong>: Bianchi, Rossi, Rosati, Bollicine, Esteri, ecc.</li>
            <li><strong>Vini</strong> dentro a una categoria: nome, descrizione (produttore/regione), prezzo.</li>
            <li><strong>Sottocategorie</strong> (solo per "Vini Esteri"): es. Francia → Bianchi / Rossi.</li>
          </ul>
          <p>Tutti i vini devono avere un prezzo numerico.</p>

          <h2 id="team">5. Gestire chef e sommelier</h2>
          <p>
            Sezione <strong>👨‍🍳 Chef & Sommelier → Persone</strong>. Ogni persona ha:
          </p>
          <ul>
            <li><strong>Ruolo</strong>: es. "Lo Chef", "La Sommelier".</li>
            <li><strong>Nome e cognome</strong>.</li>
            <li><strong>Biografia</strong>: testo descrittivo.</li>
            <li><strong>Foto</strong>: meglio una foto verticale del volto, ben illuminata.</li>
          </ul>
          <p>Per aggiungere una nuova persona, clicca "Aggiungi Persona" in fondo alla lista.</p>

          <h2 id="foto">6. Caricare e gestire le foto</h2>
          <p>
            Ogni campo "foto" del pannello ha la sua libreria dedicata:
          </p>
          <ul>
            <li><strong>Slideshow home</strong>: solo foto orizzontali e luminose. Le foto scorrono nell'ordine
              in cui appaiono nella lista. Trascina per riordinare.</li>
            <li><strong>Foto team</strong>: solo foto verticali del volto.</li>
          </ul>
          <p>
            Per caricare una nuova foto, clicca su un campo "Foto" → "Carica" → seleziona il file dal computer.
            Le foto vengono <strong>compresse automaticamente</strong> quando il sito viene pubblicato, quindi
            puoi caricare foto anche grandi senza preoccuparti delle dimensioni.
          </p>
          <p>
            <strong>Formati supportati:</strong> JPG, PNG, WebP. La risoluzione ideale è 1920×1080 per
            le foto orizzontali, ma il sistema gestisce qualsiasi formato.
          </p>

          <h2 id="pubblica">7. Salvare e pubblicare</h2>
          <p>
            Quando hai finito di modificare:
          </p>
          <ol>
            <li>Controlla l'<strong>anteprima</strong> a destra: mostra come apparirà la modifica sul sito.</li>
            <li>Clicca <strong>"Salva"</strong> in alto a destra.</li>
            <li>Clicca <strong>"Pubblica"</strong> per rendere la modifica visibile online.</li>
          </ol>
          <p>
            <strong>Tempo di pubblicazione:</strong> circa 1-2 minuti per vedere le modifiche sul sito vero
            (il sito viene ricostruito automaticamente in background).
          </p>

          <h2 id="tips">8. Consigli e problemi comuni</h2>
          <h3>Non riesci a cancellare un elemento?</h3>
          <p>
            Alcune liste (categorie, sezioni, team) hanno un <strong>numero minimo</strong> di elementi
            per evitare che il sito resti vuoto. Se la "X" è disabilitata, hai raggiunto il minimo:
            puoi modificare l'elemento ma non eliminarlo.
          </p>

          <h3>Il campo è rosso e non mi fa salvare</h3>
          <p>
            Significa che il valore non rispetta il formato richiesto. Es. un link Instagram deve
            iniziare con <code>https://www.instagram.com/</code>. Leggi il messaggio rosso sotto al
            campo per capire cosa correggere.
          </p>

          <h3>Ho fatto una modifica per sbaglio</h3>
          <p>
            Se non hai ancora pubblicato: clicca "Annulla" o "Esci senza salvare". Se hai già pubblicato:
            non c'è un "annulla" automatico, ma tutte le versioni precedenti sono salvate. Contatta
            l'amministratore tecnico per ripristinare una versione precedente.
          </p>

          <h3>Best practice</h3>
          <ul>
            <li>Tieni sempre attiva la <strong>verifica in due passaggi (2FA)</strong> sul tuo account.</li>
            <li>Non condividere mai email/password con persone esterne al ristorante.</li>
            <li>Modifica un campo alla volta e verifica il risultato sul sito prima di passare al successivo.</li>
            <li>Per cambiamenti importanti (es. nuova carta dei vini), fai prima un backup screenshot della versione attuale.</li>
          </ul>
        </article>
      </section>
    </>
  )
}
