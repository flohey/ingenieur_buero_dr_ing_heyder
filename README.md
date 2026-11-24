# Ingenieurbüro Dr.-Ing. Florian Heyder – Website

Quelltext der Website **https://florian-heyder.de** (GitHub Pages, Jekyll).

## Inhalte ändern

| Was | Wo |
|---|---|
| Telefon, E-Mail, Adresse, Domain, Stand der Förderangaben | `_config.yml` |
| Leistungen (Titel, Text, Stichpunkte, Etikett) | `_data/leistungen.yml` |
| Häufige Fragen | `_data/faq.yml` |
| Texte Einstieg, Förderung, Ablauf, Über mich, Kontakt | `index.html` |
| Impressum / Datenschutz | `impressum.html`, `datenschutz.html` |
| Farben, Schriften, Layout | `assets/style.css` |

## Foto einfügen

Ein Porträt als **`assets/img/portrait.jpg`** ablegen (Hochformat 4:5, z. B. 800 × 1000 px,
unter ca. 250 KB). Die Seite erkennt die Datei automatisch und ersetzt den Platzhalter.

## Lokal ansehen (optional)

```bash
gem install bundler jekyll jekyll-sitemap
jekyll serve      # danach http://localhost:4000 öffnen
```

## Veröffentlichen

Änderungen auf `main` pushen – GitHub Pages baut die Seite automatisch neu
(Einstellungen: *Settings → Pages → Deploy from a branch → main / (root)*).

Schriften: Barlow Semi Condensed und Source Sans 3, lokal eingebunden (SIL Open Font License, siehe `assets/fonts/`).
