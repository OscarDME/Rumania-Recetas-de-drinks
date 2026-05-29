// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Sursa pentru TOT textul vizibil de pe landing page.
// Doc §7: Fără text hardcodat în componente. Dacă e pe ecran, e aici.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Layout.astro citește asta) ──────────────────────────────
  metadata: {
    lang: 'ro',
    title: '150 de rețete pentru cocktailuri premium la tine acasă',
    description:
      'Rețete de cocktailuri gata de petrecere — ingrediente simple, preparare rapidă. Impresionează-ți prietenii, economisește banii dați pe baruri scumpe și devino vedeta serii. Include bonusuri exclusive.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'LUMEA COCKTAILURILOR',
  },

  // ── 1. TIMER STICKY ANTE ──────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Oferta expiră în:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Ofertă Exclusivă',
    titleHighlight: '150 de Rețete de Cocktailuri Geniale',
    titleConnector: 'pentru',
    titleHighlightGreen: 'Plăcerea Ta',
    titleEnd: 'Chiar dacă ești la început',
    deliveryLabel: 'Primești acces imediat pe',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'Email', kind: 'email' },
    ],
    videoAlt: 'Prezentarea pachetului cu 150 de rețete pentru cocktailuri făcute în casă',
    ctaLabel: '✅ VREAU SĂ IAU REȚETELE ACUM',
    ctaSub: '🔒 Achiziție 100% sigură • Acces instantaneu',
  },

  // ── 3. BENEFICII ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Rețete create pentru plăcere maximă — ingrediente simple, preparare super rapidă,',
    introStrong: 'un gust și un aspect demențial, cu care vei lăsa mască orice invitat!',
    items: [
      'Să prepari orice cocktail fără pic de experiență anterioară',
      'Să faci magie fără ustensile de fițe sau o bucătărie scumpă',
      'Să te bucuri de rețete testate, cu ingrediente super accesibile',
      'Să fii sufletul oricărei petreceri acasă, la cabană sau la ieșirile cu gașca',
    ],
    ctaLabel: '🍹 VREAU SĂ IAU REȚETELE ACUM',
  },

  // ── 4. CARUSEL CU REȚETE ────────────────────────────────────────────────
  carousel: {
    title: '🍹 O mică parte din rețetele pe care',
    titleHighlight: 'le vei savura cu prietenii!',
    slides: [
      { caption: 'Sărut Dulce', alt: 'Cocktail Sărut Dulce' },
      {
        caption: 'Vin Spaniol cu Maracuja',
        alt: 'Cocktail Vin Spaniol cu Maracuja',
      },
      { caption: 'MaracuBeats Cremos', alt: 'Cocktail MaracuBeats Cremos' },
      { caption: 'Cocktail cu bomboane Halls', alt: 'Cocktail cu bomboane Halls' },
      { caption: 'Briză de Vară', alt: 'Cocktail Briză de Vară' },
      {
        caption: 'Caipirinha cu Maracuja și Cafea',
        alt: 'Cocktail Caipirinha cu Maracuja și Cafea',
      },
    ],
    prevLabel: 'Slide-ul anterior',
    nextLabel: 'Slide-ul următor',
    dotLabel: 'Către slide',
  },

  // ── 5. BONUSURI ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 Și bineînțeles, ai parte de',
    titleHighlight: 'BONUSURI!',
    items: [
      {
        tag: 'Bonus 1',
        title: '50 de Rețete pentru shot-uri și punch-uri cu alcool',
        description: 'Băuturile perfecte pentru petreceri, pe care să le faci rapid și să le împarți cu toată lumea.',
        alt: '50 de Rețete pentru shot-uri și punch-uri',
      },
      {
        tag: 'Bonus 2',
        title: 'Lista inteligentă de cumpărături — cum să nu arunci cu banii',
        description:
          'Află exact ce ingrediente să cumperi ca să faci cocktailuri de top, fără să-ți golești buzunarele prin baruri scumpe.',
        alt: 'Listă de cumpărături și calculator',
      },
      {
        tag: 'Bonus 3',
        title: '✅ Ghid practic: Cum să organizezi seara perfectă de cocktailuri',
        description: 'Idei gata făcute și pași exacți pentru a crea o experiență de neuitat și a-ți da pe spate invitații.',
        alt: 'Ghid pentru petreceri acasă',
      },
      {
        tag: 'Bonus 4',
        title: 'Tutorial Video: Cum să decorezi și să servești ca un barman pro',
        description:
          'Învață secretele unei prezentări vizuale care transformă o băutură banală într-o capodoperă de 5 stele.',
        alt: 'Tutorial video pentru decorarea cocktailurilor',
      },
    ],
  },

  // ── 6. PREȚURI ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'preturi',
    title: 'Alege cum vrei să începi azi:',
    complete: {
      badge: '⭐ Cel mai vândut',
      title: 'Pachetul Complet: Peste 150 de Rețete de Cocktailuri',
      descriptionLead: '150+ rețete pentru cocktailuri de casă incredibile + toate',
      descriptionStrong: 'bonusurile exclusive,',
      descriptionTail: 'ca să devii cel mai tare barman la tine acasă.',
      mockupAlt: 'Mockup Pachet Complet cu 150 de Rețete',
      includesLabel: '🎁 Include toate bonusurile:',
      items: [
        'Peste 150 de rețete de cocktailuri premium',
        'Lista cu alternative ieftine la băuturile fine scumpe',
        'Ghid pentru cumpărături inteligente de ingrediente',
        'Manualul pentru petrecerea perfectă acasă',
        'Tutorial video pentru decorațiuni de nota 10',
      ],
      strikePrice: 'De la 145 lei',
      price: '35 lei',
      priceNote: 'acces imediat',
      ctaLabel: '🛒 VREAU PACHETUL COMPLET',
      footer: '✅ Acces imediat · Email + WhatsApp · Garanție 14 zile',
    },
  },

  // ── 7. GARANȚIE ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14 zile garanție totală',
    description:
      'Dacă din orice motiv nu ești absolut încântat de rețete, îți dăm banii înapoi până la ultimul leu. Fără întrebări ciudate, fără bătăi de cap.',
  },

  // ── 8. FAQ (Întrebări frecvente) ────────────────────────────────────────────────
  faq: {
    title: 'Întrebări',
    titleHighlight: 'frecvente:',
    items: [
      {
        q: 'Trebuie să am experiență ca să le prepar?',
        a: 'Sub nicio formă! Rețetele sunt explicate atât de simplu încât oricine le poate face, chiar dacă n-ai mai amestecat o băutură în viața ta.',
      },
      {
        q: 'Am nevoie de shakere scumpe și ustensile de fițe?',
        a: 'Nici gând. Totul se poate face acasă cu ustensile obișnuite pe care punem pariu că deja le ai prin bucătărie.',
      },
      {
        q: 'Pentru ce fel de ocazii se potrivesc cocktailurile astea?',
        a: 'Pentru orice! De la o relaxare pe canapea după o zi lungă de muncă, la o cină romantică, până la un chef nebun acasă sau la cabană.',
      },
      {
        q: 'Sunt scumpe ingredientele?',
        a: 'Nu. Cu lista noastră inteligentă de cumpărături vei învăța cum să obții un gust premium cu produse super accesibile, luate de la supermarketul din colț.',
      },
      {
        q: 'Cum o să primesc accesul după ce cumpăr?',
        a: 'Accesul este instant! Imediat ce plata este confirmată, primești totul direct pe email și pe WhatsApp.',
      },
      {
        q: 'Există vreo garanție dacă nu îmi plac?',
        a: 'Bineînțeles! Ai la dispoziție 14 zile de garanție totală. Dacă nu ești mulțumit, îți returnăm 100% din bani fără discuții.',
      },
    ],
  },

  // ── 9. URGENȚĂ ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Nu mai amâna — vine weekendul, și odată cu el riști încă o seară plictisitoare. Schimbă placa chiar acum!',
  },

  // ── 10. CTA FINAL ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 VREAU ACCES LA CELE 150 DE REȚETE ACUM',
    subText: '🔒 Acces instantaneu • Garanție 14 zile • Plată sigură',
  },

  // ── 11. SECURITATE (insigne) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'Protecție SSL' },
      { icon: '💳', label: 'Plată sigură' },
      { icon: '📲', label: 'Acces imediat' },
    ],
  },

  // ── 12. FOOTER ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · LUMEA COCKTAILURILOR · Toate drepturile rezervate',
  },

  // ── A11Y / text ajutător ──
  a11y: {
    skipToContent: 'Sari la conținutul principal',
  },
};