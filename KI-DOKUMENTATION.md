# KI-Dokumentation – Legacy Gym Webshop

## Verwendete KI-Tools

Für die Entwicklung des Legacy Gym Webshops wurden zwei KI-Tools eingesetzt und verglichen:

1. **Claude Code** (Anthropic) — CLI-basierter KI-Assistent direkt im Terminal
2. **ChatGPT** (OpenAI, GPT-4o) — Browser-basierter KI-Chatbot

---

## Einsatzgebiete der KI

### 1. Layout & Struktur (HTML)

**Aufgabe:** Grundstruktur aller Seiten mit Header, Main, Footer und semantischem HTML erstellen.

**Claude Code Prompt-Beispiel:**
> „Erstelle eine vollständige index.html für einen Gym-Webshop mit sticky Header, Hero-Bereich, Produktgrid und Footer mit Newsletter."

**ChatGPT Prompt-Beispiel:**
> „Zeig mir, wie ich eine HTML-Produktübersicht mit Kategoriefilter aufbaue, ohne ein Framework zu nutzen."

**Ergebnis:** Beide Tools lieferten funktionierenden HTML-Code. Claude Code hatte dabei den Vorteil, direkt in die Projektdateien schreiben zu können, während ChatGPT Code-Snippets im Browser zeigte, die manuell eingefügt werden mussten.

---

### 2. CSS-Design & UI-Optimierungen

**Aufgabe:** Dunkles Gym-Theme mit roter Akzentfarbe, Google Fonts, responsivem Grid, Card-Hover-Effekten.

**Claude Code Prompt-Beispiel:**
> „Mach das Design besser. Verwende Bebas Neue für Überschriften, verbessere die Karten, den Hero und den Footer. Kein CSS-Framework."

**ChatGPT Prompt-Beispiel:**
> „Wie setze ich ein responsives CSS-Grid für Produktkarten um, das auf Mobile 1 Spalte, auf Tablet 2 und auf Desktop 4 Spalten hat?"

**Ergebnis:** Claude Code überarbeitete die gesamte `style.css` direkt und konsistent. ChatGPT war hilfreich für gezielte Erklärungen zu CSS-Konzepten wie `auto-fill`, `minmax()` und `aspect-ratio`.

---

### 3. JavaScript-Logik

**Aufgabe:** Shop-Filter, Produktdetailseite per URL-Parameter, Mobile-Menü, Formular-Feedback.

**Claude Code Prompt-Beispiel:**
> „Reduziere script.js auf ca. 50 Zeilen. Produktdaten sollen nicht in script.js sein."

**Lösung:** Die Produktdaten wurden in ein `<script type="application/json">` Tag in `product.html` ausgelagert. `script.js` liest diese per `JSON.parse()` aus — kein Datenbank-Overhead im JS.

**ChatGPT Prompt-Beispiel:**
> „Wie lese ich URL-Parameter mit JavaScript aus, um einen Filter auf einer Shop-Seite automatisch zu setzen?"

**Ergebnis:** ChatGPT lieferte schnell gezielte Code-Snippets für `URLSearchParams`. Claude Code integrierte das direkt in den bestehenden Code.

---

### 4. Problemlösung & Debugging

**Beispiel-Problem:** Der Kategoriefilter auf der Startseite (Kategoriekarten) aktivierte den Shop-Filter nicht automatisch.

**Lösung mit Claude Code:**
> „Die Kategoriekarten auf der Startseite verlinken auf `shop.html?filter=clothing`, aber der Filter wird nicht aktiviert. Beheb das in script.js."

Claude Code ergänzte die `applyFilter`-Funktion und las den URL-Parameter beim Laden der Seite aus.

---

## Vergleich der KI-Tools

| Kriterium                  | Claude Code                              | ChatGPT (GPT-4o)                        |
|---------------------------|-------------------------------------------|-----------------------------------------|
| **Codegenerierung**        | Schreibt direkt in Projektdateien         | Code-Snippets im Browser               |
| **Kontextverständnis**     | Liest alle Projektdateien selbst          | Muss manuell mit Code gefüttert werden |
| **Iterationsgeschwindigkeit** | Sehr schnell (direkt editiert)         | Mittel (Copy-Paste nötig)              |
| **Erklärungsqualität**     | Mittel (mehr auf Aktion fokussiert)       | Sehr gut (ausführliche Erklärungen)    |
| **Lerneffekt**             | Gering – KI macht alles automatisch      | Hoch – erklärt Konzepte Schritt für Schritt |
| **Codequalität**           | Hoch (konsistent, vollständig)            | Hoch (bei guten Prompts)               |
| **Projektüberblick**       | Ja (liest alle Dateien)                   | Nein (nur was man einfügt)             |
| **Verfügbarkeit**          | Terminal (lokal, keine Browser nötig)     | Browser / App                          |
| **Preis**                  | Kostenpflichtig (Subscription)            | Gratis (GPT-3.5) / Kostenpflichtig     |
| **Geeignet für**           | Grosse Änderungen, Refactoring, Fixes     | Lernen, gezielte Snippets, Erklärungen |

---

## Selbst definierte Bewertungskriterien

### Kriterium 1: Effizienz bei Codeänderungen (1–5)

| Tool         | Bewertung | Begründung                                                          |
|--------------|-----------|----------------------------------------------------------------------|
| Claude Code  | ★★★★★ 5   | Schreibt direkt in Dateien, kein Copy-Paste, versteht Kontext       |
| ChatGPT      | ★★★☆☆ 3   | Gute Snippets, aber manueller Transfer in Projektdateien nötig      |

### Kriterium 2: Lerneffekt (1–5)

| Tool         | Bewertung | Begründung                                                          |
|--------------|-----------|----------------------------------------------------------------------|
| Claude Code  | ★★★☆☆ 3   | Macht vieles automatisch, Erklärungen auf Nachfrage vorhanden       |
| ChatGPT      | ★★★★★ 5   | Erklärt Konzepte detailliert, zeigt Alternativen, fördert Verständnis |

### Kriterium 3: Kontextverständnis des Projekts (1–5)

| Tool         | Bewertung | Begründung                                                          |
|--------------|-----------|----------------------------------------------------------------------|
| Claude Code  | ★★★★★ 5   | Liest alle Projektdateien automatisch, erkennt Zusammenhänge        |
| ChatGPT      | ★★☆☆☆ 2   | Nur Kontext was man manuell einfügt, kein Dateizugriff              |

### Kriterium 4: UI-Optimierungsvorschläge (1–5)

| Tool         | Bewertung | Begründung                                                          |
|--------------|-----------|----------------------------------------------------------------------|
| Claude Code  | ★★★★☆ 4   | Sehr gute Design-Verbesserungen auf Befehl hin                      |
| ChatGPT      | ★★★★☆ 4   | Gute Vorschläge, erklärt Design-Entscheidungen besser               |

---

## Fazit

Beide Tools ergänzen sich gut. **Claude Code** war das primäre Entwicklungs-Tool für dieses Projekt, da es direkt im Projektverzeichnis arbeitet und grosse, konsistente Änderungen schnell umsetzt. **ChatGPT** wurde ergänzend für das Verstehen von CSS-Konzepten (Grid, Flexbox, Pseudo-Elemente) und JavaScript-Grundlagen (URLSearchParams, JSON.parse) genutzt.

**Empfehlung:** Claude Code für Produktivität und Effizienz; ChatGPT für Lernen und Verständnis.

---

## Verwendete Prompts (Auswahl)

```
1. "Erstelle einen Gym-Webshop mit index.html, shop.html, contact.html und product.html"
2. "Überarbeite das Design komplett mit Bebas Neue Font und besseren Karten"
3. "Reduziere script.js auf ca. 50 Zeilen, Produktdaten sollen nicht im JS sein"
4. "Was fehlt noch gemäss Aufgabenstellung für eine Note 6?"
5. "Erstelle WIREFRAMES.md, STYLEGUIDE.md und KI-DOKUMENTATION.md"
6. "Erkläre mir, wie CSS Grid mit auto-fill und minmax funktioniert" (ChatGPT)
7. "Wie lese ich URL-Parameter mit JavaScript aus?" (ChatGPT)
```
