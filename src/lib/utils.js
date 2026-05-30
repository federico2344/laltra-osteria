/** Helper condivisi e leggeri (niente dipendenze esterne). */

/** Formatta un prezzo numerico in euro: 16 -> "€ 16,00". */
export function formatPrice(value) {
  if (value === null || value === undefined) return ''
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

/**
 * Costruisce il link tel: per aprire il dialer con il numero precompilato.
 * @param {string} raw - numero in formato internazionale solo cifre (es. "390689524311")
 */
export function telLink(raw) {
  return `tel:+${raw}`
}

/**
 * (Tenuto per uso futuro) — Costruisce il link WhatsApp "click-to-chat".
 * @param {string} number - solo cifre, prefisso internazionale incluso
 * @param {string} message - testo libero, viene codificato per l'URL
 */
export function whatsappLink(number, message) {
  const base = `https://wa.me/${number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
