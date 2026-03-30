# Styleguide – Legacy Gym Webshop

## Markenidentität

Legacy Gym steht für Intensität, Disziplin und Ästhetik. Das visuelle Design spiegelt die Gym-Kultur wider: dunkel, kontrastreich und kraftvoll.

---

## Farbpalette

| Name         | Variable        | Hex-Code  | Verwendung                              |
|--------------|-----------------|-----------|------------------------------------------|
| Primärrot    | `--red`         | `#e31b23` | Buttons, Akzente, Hover, Borders        |
| Dunkelrot    | `--red-dark`    | `#b01219` | Button-Hover-Zustand                    |
| Hintergrund  | `--bg`          | `#0a0a0a` | Seitenhintergrund                        |
| Oberfläche   | `--surface`     | `#141414` | Cards, Header, Footer                   |
| Oberfläche 2 | `--surface-2`   | `#1c1c1c` | Formularfelder, dunklere Elemente       |
| Trennlinie   | `--border`      | `#252525` | Rahmen, Divider                         |
| Text         | `--text`        | `#f0f0f0` | Haupttextfarbe                          |
| Gedämpft     | `--muted`       | `#777777` | Sekundärtext, Labels, Beschreibungen    |

### Farbvorschau

```
■ #e31b23  Primärrot   — CTA-Buttons, aktive Navigation, Preisanzeige
■ #0a0a0a  Hintergrund — Gesamthintergrund der Seite
■ #141414  Oberfläche  — Karten, Header, Footer
■ #f0f0f0  Textfarbe   — Alle Haupttexte
■ #777777  Gedämpft    — Metainformationen, Labels
```

---

## Typografie

### Schriftarten

| Schrift        | Quelle        | Verwendung                          |
|----------------|---------------|--------------------------------------|
| **Bebas Neue** | Google Fonts  | Alle Überschriften (h1–h4), Logo    |
| **Inter**      | Google Fonts  | Fliesstext, Labels, Buttons, Inputs |

**Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
```

### Schriftgrössen & Hierarchie

| Element    | Schrift      | Grösse        | Gewicht | Letter-Spacing |
|------------|--------------|---------------|---------|----------------|
| `h1`       | Bebas Neue   | `2.8rem`      | normal  | `2px`          |
| Hero `h1`  | Bebas Neue   | `4rem`        | normal  | `2px`          |
| `h2`       | Bebas Neue   | `2rem`        | normal  | `2px`          |
| `h3`       | Bebas Neue   | `1.4rem`      | normal  | `2px`          |
| `.logo`    | Bebas Neue   | `2rem`        | normal  | `5px`          |
| Body       | Inter        | `1rem (16px)` | 400     | normal         |
| Labels     | Inter        | `0.78rem`     | 700     | `1px`          |
| Buttons    | Inter        | `0.82rem`     | 700     | `2px`          |
| `.muted`   | Inter        | `0.9rem`      | 400     | normal         |

---

## Abstände & Layout

### Breakpoints

| Breakpoint | Breite     | Layout                          |
|------------|------------|---------------------------------|
| Mobile     | `< 480px`  | 1 Spalte, gestapelt             |
| Tablet     | `480–768px`| 2 Spalten                       |
| Desktop    | `> 768px`  | 3–4 Spalten, Seitenleiste       |

### Innenabstände

| Bereich            | Wert          |
|--------------------|---------------|
| Header Padding     | `0.9rem 2rem` |
| Main Padding       | `2.5rem 2rem` |
| Karten Padding     | `1.25rem`     |
| Hero Padding       | `4rem 3rem`   |
| Footer Inner       | `2.5rem 2rem` |
| Grid Gap           | `1.5rem`      |
| Formular-Gruppe    | `1.25rem`     |

### Max-Breite
Alle Hauptinhalte sind auf `1200px` begrenzt und horizontal zentriert.

---

## Komponenten

### Buttons

```
[PRIMÄR BUTTON]  — Roter Hintergrund (#e31b23), weisser Text, 2px Rahmen
[PRIMÄR HOVER]   — Dunkleres Rot (#b01219)
```

**CSS-Klassen:**
- `.btn` — Standard roter Button (CTA)

**Eigenschaften:**
- Padding: `0.75rem 2rem`
- Font: Inter, 700, 0.82rem, 2px Letter-Spacing
- Text: Grossbuchstaben
- Keine abgerundeten Ecken (eckiger, harter Look)

### Produktkarten (`.card`)

```
┌──────────────────┐
│   [Produktbild]  │  height: 280px, object-fit: cover
│                  │
├──────────────────┤
│  Produktname     │  Bebas Neue, 1.1rem
│  CHF XX.XX       │  Primärrot, 1.25rem, fett
│  [Details]       │  .btn
└──────────────────┘
Hintergrund: #141414
Rahmen:      1px solid #252525
Hover:       translateY(-5px), Rahmen: #e31b23
```

### Filter-Buttons (`.filter-btn`)

```
[Alle] [Kleidung] [Supplements] [Equipment]

Standard: transparent, Rahmen #252525, Text #777
Aktiv:    roter Hintergrund, weisser Text
```

### Formulare

- **Hintergrund:** `#1c1c1c`
- **Rahmen:** `1px solid #252525`
- **Fokus:** Rahmen wechselt zu `#e31b23`
- **Labels:** Grossbuchstaben, 0.78rem, gedämpft

### Hero-Bereich

```
Hintergrund: linear-gradient(120deg, #0f0000 0%, #141414 100%)
Linker Rand: 4px solid #e31b23
Padding:     4rem 3rem (Desktop), 2.5rem 1.5rem (Mobile)
```

### Info-Blöcke (Kontaktseite)

```
Hintergrund: #141414
Rahmen:      1px solid #252525
Linker Rand: 3px solid #e31b23  ← Roter Akzent
```

---

## Icons & Medien

- Icons: Unicode-Emojis (kein externes Icon-Set, keine Bibliotheken)
- Bilder: Webp/JPG, `object-fit: cover`, definierte Höhen
- Videos: YouTube iFrame, `aspect-ratio: 16/9`, `width: 100%`

---

## Zugänglichkeit (Accessibility)

- `aria-label` auf dem Hamburger-Menü-Button
- `alt`-Texte auf allen Bildern
- Fokus-Styles über `:focus` (Border wechselt zu Primärrot)
- Semantisches HTML: `<header>`, `<main>`, `<footer>`, `<article>`, `<section>`
