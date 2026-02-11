

## Ta bort alla spår av Lovable-branding

### 1. Byt favicon till er egen logga
- Anvand `src/assets/logo-square.png` som grund for att skapa en ny favicon
- Kopiera den kvadratiska loggan till `public/favicon.png` (ersatter nuvarande Lovable-favicon)
- Ta bort `public/favicon.ico` (Lovable's standardikon) eller ersatt den

### 2. Uppdatera OG-bilder i index.html
- Rad 15: `og:image` pekar till `https://lovable.dev/opengraph-image-p98pqg.png` -- byt till er egen logga
- Rad 19: `twitter:image` pekar till samma Lovable-bild -- byt till er egen logga
- Anvand logo-bilden fran `public/` som OG-bild

### 3. Lovable-badge
- Du behover sjalv ga till **Settings** och sla pa **"Hide Lovable Badge"** -- detta kan inte goras via kod

### Tekniska detaljer

Andringer i `index.html`:
- Rad 15: Byt `og:image` fran Lovable-URL till `/logo-square.png` (en kopia av er logga i public-mappen)
- Rad 19: Byt `twitter:image` pa samma satt

Filandringar:
- Kopiera `src/assets/logo-square.png` till `public/logo-square.png` (for OG-bild)
- Kopiera `src/assets/logo-square.png` till `public/favicon.png` (ersatter Lovable-favicon)
- Uppdatera `index.html` med nya OG-bild-sokvagar

**OBS:** Det kan ta nagra veckor innan Google uppdaterar sin cache med den nya faviconen i sokresultaten.

