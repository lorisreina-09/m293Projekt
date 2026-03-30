# Wireframes – Legacy Gym Webshop

## Sitemap

```
index.html (Startseite)
├── shop.html (Produktübersicht)
│   └── product.html (Produktdetail)
├── athletes.html (Athleten)
└── contact.html (Kontakt)
```

---

## Mobile (< 480px)

### Startseite (index.html)

```
┌─────────────────────┐
│  ☰   LEGACY GYM     │  ← Sticky Header, Hamburger-Menü
├─────────────────────┤
│                     │
│  TRAIN LIKE         │
│  A LEGEND           │  ← Hero-Bereich mit rotem Border
│                     │
│  [JETZT SHOPPEN]    │
│                     │
├─────────────────────┤
│  Beliebte Produkte  │
├─────────────────────┤
│  [Bild]             │
│  Oversized Cover    │  ← Produktkarten: 1 Spalte
│  CHF 34.90          │
│  [Entdecken]        │
├─────────────────────┤
│  [Bild]             │
│  CBUM Pre-Workout   │
│  CHF 49.90          │
│  [Entdecken]        │
├─────────────────────┤
│  [Bild]             │
│  Leder Gürtel       │
│  CHF 59.90          │
│  [Entdecken]        │
├─────────────────────┤
│  Unsere Kategorien  │
├─────────────────────┤
│  👕 Kleidung        │  ← Kategorie-Karten: 1 Spalte
│  Für das Training   │
├─────────────────────┤
│  💊 Supplements     │
│  Maximale Perf.     │
├─────────────────────┤
│  🏋️ Equipment       │
│  Zubehör für Profis │
├─────────────────────┤
│  LEGACY GYM         │  ← Footer
│  Newsletter E-Mail  │
│  [Anmelden]         │
│  © 2026 Legacy Gym  │
└─────────────────────┘
```

### Mobilmenü (geöffnet)

```
┌─────────────────────┐
│  ✕   LEGACY GYM     │
├─────────────────────┤
│  Home               │
│  Shop               │
│  Athleten           │
│  Kontakt            │
└─────────────────────┘
```

### Shop (shop.html) – Mobile

```
┌─────────────────────┐
│  ☰   LEGACY GYM     │
├─────────────────────┤
│  Alle Produkte      │
│  Premium Equipment  │
├─────────────────────┤
│ [Alle][Kleidung]    │
│ [Suppl.][Equip.]    │  ← Filter-Buttons, umbrechen
├─────────────────────┤
│  [Bild]             │
│  Produktname        │  ← 1 Spalte
│  CHF XX.XX          │
│  [Details]          │
├─────────────────────┤
│  ...                │
└─────────────────────┘
```

### Produktdetail (product.html) – Mobile

```
┌─────────────────────┐
│  ☰   LEGACY GYM     │
├─────────────────────┤
│  ← Zurück zum Shop  │
├─────────────────────┤
│  [Produktbild]      │  ← Bild oben, volle Breite
├─────────────────────┤
│  [YouTube Video]    │
├─────────────────────┤
│  PRODUKTNAME        │  ← Info unten
│  CHF XX.XX          │
│  Beschreibung...    │
│  ✓ Premium Qualität │
│  ✓ Legacy Approved  │
│  ✓ Schneller Vers.  │
│  ✓ 30 Tage Rückgabe │
├─────────────────────┤
│  Jetzt bestellen    │
│  Menge: [1]         │
│  Name: [_________]  │
│  Adresse: [_______] │
│  [KOSTENPFL. BEST.] │
└─────────────────────┘
```

### Kontakt (contact.html) – Mobile

```
┌─────────────────────┐
│  ☰   LEGACY GYM     │
├─────────────────────┤
│  Kontakt            │
├─────────────────────┤
│  Schreib uns        │
│  Name: [________]   │
│  E-Mail: [_______]  │
│  Betreff: [▼]       │
│  Nachricht:         │
│  [              ]   │
│  [              ]   │
│  [ABSENDEN]         │
├─────────────────────┤
│  Erreichbarkeit     │  ← darunter (1 Spalte)
│  | Support          │
│  | support@...      │
│  | Standort         │
│  | Zürich           │
└─────────────────────┘
```

---

## Tablet (480px – 768px)

### Startseite – Tablet

```
┌──────────────────────────────────┐
│  ☰            LEGACY GYM         │
├──────────────────────────────────┤
│                                  │
│  TRAIN LIKE A LEGEND             │
│  Premium Equipment...            │  ← Hero
│  [JETZT SHOPPEN]                 │
│                                  │
├──────────────────────────────────┤
│  Beliebte Produkte               │
│  ┌──────────┐  ┌──────────┐     │
│  │  [Bild]  │  │  [Bild]  │     │  ← 2 Spalten
│  │ Produkt  │  │ Produkt  │     │
│  │ CHF XX   │  │ CHF XX   │     │
│  └──────────┘  └──────────┘     │
│         ┌──────────┐            │
│         │  [Bild]  │            │
│         │ Produkt  │            │
│         └──────────┘            │
├──────────────────────────────────┤
│  Unsere Kategorien               │
│  ┌────────┐ ┌────────┐ ┌──────┐ │
│  │  👕    │ │  💊    │ │  🏋️  │ │  ← 3 Spalten
│  │Kleidu. │ │Suppl.  │ │Equip.│ │
│  └────────┘ └────────┘ └──────┘ │
└──────────────────────────────────┘
```

### Shop – Tablet

```
┌──────────────────────────────────┐
│  ☰            LEGACY GYM         │
├──────────────────────────────────┤
│  Alle Produkte                   │
│  [Alle] [Kleidung] [Supp.] [Eq.] │
├──────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐     │
│  │  [Bild]  │  │  [Bild]  │     │  ← 2 Spalten
│  │ Produkt  │  │ Produkt  │     │
│  │ CHF XX   │  │ CHF XX   │     │
│  │ [Detail] │  │ [Detail] │     │
│  └──────────┘  └──────────┘     │
│  ...                             │
└──────────────────────────────────┘
```

---

## Desktop (> 768px)

### Startseite – Desktop

```
┌────────────────────────────────────────────────────────┐
│  LEGACY GYM        Home  Shop  Athleten  Kontakt        │  ← Sticky Header
├────────────────────────────────────────────────────────┤
│                                                        │
│  TRAIN LIKE A LEGEND                                   │
│  Premium Equipment und Kleidung für diejenigen,...     │  ← Hero, roter Leftborder
│  [JETZT SHOPPEN]                                       │
│                                                        │
├────────────────────────────────────────────────────────┤
│  Beliebte Produkte                                     │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │   [Bild]   │  │   [Bild]   │  │   [Bild]   │       │  ← 3 Spalten
│  │ Oversized  │  │ Pre-Workout│  │ Gym Belt   │       │
│  │ CHF 34.90  │  │ CHF 49.90  │  │ CHF 59.90  │       │
│  │[Entdecken] │  │[Entdecken] │  │[Entdecken] │       │
│  └────────────┘  └────────────┘  └────────────┘       │
├────────────────────────────────────────────────────────┤
│  Unsere Kategorien                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │     👕       │ │     💊       │ │     🏋️       │   │  ← 3 Spalten
│  │  KLEIDUNG    │ │ SUPPLEMENTS  │ │  EQUIPMENT   │   │
│  │ Für Training │ │ Max. Perf.   │ │ Für Profis   │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
├────────────────────────────────────────────────────────┤
│  LEGACY GYM              Links       Newsletter        │
│  Equipment für Legenden. Shop        [email@__]        │  ← Footer, 3 Spalten
│                          Athleten    [ANMELDEN]        │
│                          Kontakt                       │
│                    © 2026 Legacy Gym                   │
└────────────────────────────────────────────────────────┘
```

### Shop – Desktop

```
┌────────────────────────────────────────────────────────┐
│  LEGACY GYM        Home  Shop  Athleten  Kontakt        │
├────────────────────────────────────────────────────────┤
│  Alle Produkte                                         │
│  [Alle] [Kleidung] [Supplements] [Equipment]           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │  [Bild]  │ │  [Bild]  │ │  [Bild]  │ │  [Bild]  │  │  ← 4 Spalten (auto-fill)
│  │ Produkt  │ │ Produkt  │ │ Produkt  │ │ Produkt  │  │
│  │ CHF XX   │ │ CHF XX   │ │ CHF XX   │ │ CHF XX   │  │
│  │[Details] │ │[Details] │ │[Details] │ │[Details] │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ...                                                   │
└────────────────────────────────────────────────────────┘
```

### Produktdetail – Desktop

```
┌────────────────────────────────────────────────────────┐
│  LEGACY GYM        Home  Shop  Athleten  Kontakt        │
├────────────────────────────────────────────────────────┤
│  ← Zurück zum Shop                                     │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │                     │  │  PRODUKTNAME            │  │
│  │   [Produktbild]     │  │  CHF XX.XX              │  │
│  │                     │  │  Beschreibung...        │  │
│  │                     │  │  ✓ Premium Qualität     │  │
│  │   [YouTube Video]   │  │  ✓ Legacy Approved      │  │
│  │                     │  │  ✓ Schneller Versand    │  │
│  └─────────────────────┘  │  ─────────────────────  │  │
│                           │  Jetzt bestellen        │  │
│                           │  Menge: [1]             │  │
│                           │  Name: [____________]   │  │
│                           │  Adresse: [__________]  │  │
│                           │  [KOSTENPFLICHTIG BEST] │  │
│                           └─────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

### Kontakt – Desktop

```
┌────────────────────────────────────────────────────────┐
│  LEGACY GYM        Home  Shop  Athleten  Kontakt        │
├────────────────────────────────────────────────────────┤
│  Kontakt                                               │
│  ┌────────────────────────────┐  ┌───────────────────┐ │
│  │ Schreib uns                │  │ Erreichbarkeit    │ │
│  │ Name: [_________________]  │  │ | Support         │ │
│  │ E-Mail: [_______________]  │  │ | support@...     │ │
│  │ Betreff: [▼ Dropdown    ]  │  │ | Mo-Fr 09-17 Uhr │ │
│  │ Nachricht:                 │  │ | Standort        │ │
│  │ [_______________________]  │  │ | Zürich          │ │
│  │ [_______________________]  │  │ | Team            │ │
│  │ [ABSENDEN]                 │  │ | → Athleten      │ │
│  └────────────────────────────┘  └───────────────────┘ │
└────────────────────────────────────────────────────────┘
```
