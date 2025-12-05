# Øvelse 2: React Todo App

## Mål
Bruk Plan Mode og parallelle agenter til å utforske og utvide en eksisterende React-applikasjon.

## Beskrivelse
En enkel Vite + React 19 todo-applikasjon med grunnleggende funksjonalitet. Applikasjonen har:
- Legge til nye todos
- Markere todos som fullført
- Slette todos
- Vise antall gjenstående oppgaver

## Oppgaver

### 1. Gå inn i Plan Mode
- Trykk **Shift+Tab to ganger** for å aktivere Plan Mode i Claude Code
- I Plan Mode vil Claude utforske koden uten å gjøre endringer

### 2. Utforsk og planlegg
Spør Claude:
```
Jeg vil legge til kategorier på todos og mulighet til å filtrere på kategori.
Undersøk kodebasen og lag en plan.
```

### 3. Observér utforskningen
- Se hvordan Claude undersøker filene
- Legg merke til at ingen kode endres
- Claude vil lage en detaljert plan basert på eksisterende kode

### 4. Gjennomgå planen
- Les gjennom planen Claude lager
- Still oppfølgingsspørsmål hvis noe er uklart
- Be om justeringer i planen om nødvendig

### 5. Implementer endringene
- Gå ut av Plan Mode (Shift+Tab to ganger igjen)
- Godkjenn implementeringen eller gi Claude beskjed om å implementere planen
- Se hvordan Claude gjør endringene basert på planen

## Bonus-utfordringer
Etter at kategorier er implementert, prøv å be Claude om:
- Dark mode toggle
- Sortering av todos (etter dato, alfabetisk)
- Persistent lagring med localStorage
- Søkefunksjonalitet

## Hvordan kjøre applikasjonen

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev

# Bygg for produksjon
npm run build

# Forhåndsvis produksjonsbygg
npm run preview
```

Applikasjonen vil kjøre på http://localhost:5173

## Læringsmål
- Forstå hvordan Plan Mode fungerer
- Se hvordan Claude utforsker kodebaser metodisk
- Lære å samarbeide med AI om planlegging før implementering
- Oppleve fordelen med å gjennomgå planer før kodeendringer
