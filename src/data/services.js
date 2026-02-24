/**
 * Central data for service detail pages.
 * Add new entries here to get new routes at /services/:slug
 * Slug is used in URL (e.g. virtual-table → /services/virtual-table).
 */
export const services = [
  {
    slug: 'virtual-table',
    title: 'Virtuelne Table',
    description: 'Virtuelne table (digitalne instrument table) zamjenjuju klasične analogne i pružaju potpuno digitalni prikaz brzine, obrtaja, navigacije i upozorenja. Nudimo aktivaciju fabričkih virtuelnih tabla, nadogradnju na digitalne kokpite te konfiguraciju i personalizaciju prikaza prema vašim željama. Usluga uključuje podršku za head-up display (HUD), različite teme prikaza i integraciju sa navigacijom i asistencijama u vožnji. Kompatibilno s većinom modernih modela (VW grupa, BMW, Mercedes, Audi).',
    images: ['/virtual.jpg', '/bmw.jpeg'].filter(Boolean),
  },
  {
    slug: 'multimedia',
    title: 'Multimedija',
    description: 'Aktivacija CarPlay i Android Auto, podešavanje fabričkih infotainment sistema, ugradnja i nadogradnja multimedijskih jedinica te personalizacija audio i video sadržaja. Nudimo ažuriranje softvera, otključavanje skrivenih funkcija i integraciju pametnih uređaja s vozilom. Kompatibilno s VW grupom, BMW, Mercedes, Audi i drugim markama.',
    images: ['/multimedia.jpg', '/bmw.jpeg'].filter(Boolean),
  },
  {
    slug: 'osvjetljenje',
    title: 'Osvjetljenje',
    description: 'Ambijentalno osvjetljenje enterijera, aktivacija i konfiguracija dinamičkih svjetala, LED nadogradnje te personalizacija boja i intenziteta. Uključuje podešavanje dnevnih i pozicijskih svjetala, nadogradnju na matrix/LED tehnologiju i integraciju s komfor i vizualnim postavkama vozila.',
    images: ['/lighting.jpg', '/bmw.jpeg'].filter(Boolean),
  },
  {
    slug: 'retrofit',
    title: 'Retrofiti i ugradnje',
    description: 'Profesionalne retrofit ugradnje OEM opreme: multimedije, virtuelne table, ambijentalno osvjetljenje, kamere i senzori, sportski upravljači i dodatna oprema. Sve ugradnje u fabričkom izgledu s punom CAN-BUS integracijom i bez grešaka u sustavu.',
    images: ['/retrofit.jpeg', '/bmw.jpeg'].filter(Boolean),
  },
  {
    slug: 'konverzija-sistema',
    title: 'Konverzija sistema',
    description: 'Konverzija vozila iz drugih tržišta (npr. USA, Azija) na europske standarde: mijenjanje jedinica (milje/km), radio frekvencije, jezika sustava, navigacijskih mapa i svih postavki prema vašem tržištu. Nudimo i prilagodbu opreme i softvera za pravnu i tehničku usklađenost.',
    images: ['/system.jpeg', '/bmw.jpeg'].filter(Boolean),
  },
  {
    slug: 'navigacija',
    title: 'Navigacija',
    description: 'Aktivacija i ažuriranje navigacionih sistema, otključavanje novih mapa na multimediji, podešavanje GPS-a i navigacionih funkcija za optimalnu vožnju.',
    images: ['/bmw.jpeg'],
  },
];

const bySlug = services.reduce((acc, s) => ({ ...acc, [s.slug]: s }), {});

export const getServiceBySlug = (slug) => (slug ? bySlug[slug] : null);
