# Øvelse 2: React Todo App

## Mål
Lær å bruke AI som planleggingspartner - utforsk og planlegg endringer før du implementerer.

## Beskrivelse
En enkel Vite + React 19 todo-applikasjon med grunnleggende funksjonalitet. Applikasjonen har:
- Legge til nye todos
- Markere todos som fullført
- Slette todos
- Vise antall gjenstående oppgaver

## Oppgaver

### 1. Start med en plan
- Be AI-assistenten din om å **analysere koden først**, uten å gjøre endringer
- Konseptet "plan-først" betyr at du får en oversikt før implementering starter
- Se "Verktøy-spesifikke tips" nederst for hvordan du aktiverer dette i ditt verktøy

### 2. Utforsk og planlegg
Be AI-assistenten om å lage en plan:
```
Jeg vil legge til kategorier på todos og mulighet til å filtrere på kategori.
Analyser kodebasen og lag en detaljert plan før du gjør noen endringer.
```

### 3. Observér utforskningen
- Se hvordan AI-assistenten undersøker filene
- Legg merke til at ingen kode endres ennå
- AI-assistenten vil lage en detaljert plan basert på eksisterende kode

### 4. Gjennomgå planen
- Les gjennom planen som blir laget
- Still oppfølgingsspørsmål hvis noe er uklart
- Be om justeringer i planen om nødvendig

### 5. Implementer endringene
- Når du er fornøyd med planen, be AI-assistenten om å implementere den
- Se hvordan endringene gjøres basert på planen
- Test at funksjonaliteten fungerer som forventet

## Bonus-utfordringer
Etter at kategorier er implementert, prøv å be AI-assistenten om:
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
- Forstå verdien av å planlegge før implementering
- Se hvordan AI-verktøy kan utforske kodebaser metodisk
- Lære å samarbeide med AI om planlegging før implementering
- Oppleve fordelen med å gjennomgå planer før kodeendringer

## Verktøy-spesifikke tips

<details>
<summary>Claude Code</summary>

**Plan Mode** er en innebygd funksjon som gjør dette enkelt:
- Trykk **Shift+Tab to ganger** for å aktivere Plan Mode
- Claude vil utforske koden uten å gjøre endringer
- En planfil blir opprettet som du kan gjennomgå
- Trykk **Shift+Tab to ganger** igjen for å gå ut av Plan Mode
- Godkjenn planen, og Claude implementerer endringene

</details>

<details>
<summary>VS Code med GitHub Copilot</summary>

- Åpne Copilot Chat med **Ctrl+Shift+I** (Windows/Linux) eller **Cmd+Shift+I** (Mac)
- Bruk `@workspace` for å gi Copilot kontekst om hele prosjektet
- Be eksplisitt om analyse først:
  ```
  @workspace Analyser todo-applikasjonen og lag en detaljert plan for
  å legge til kategorier. Ikke gjør noen endringer ennå.
  ```
- Gjennomgå planen, still spørsmål, og be deretter om implementering

</details>

<details>
<summary>GitHub Copilot CLI</summary>

- Start med `copilot` i terminalen
- Bruk `gh copilot explain` for å forstå eksisterende kode først
- Be om en plan i chat-modus før du ber om kodeendringer
- Implementer steg for steg basert på planen

</details>

<details>
<summary>Andre AI-verktøy (ChatGPT, Claude web, etc.)</summary>

- Kopier innholdet i `src/App.tsx` og `src/App.css` inn i chatten
- Be eksplisitt om en plan:
  ```
  Her er min todo-app. Jeg vil legge til kategorier og filtrering.
  Analyser koden og lag en detaljert plan før du foreslår endringer.
  ```
- Gjennomgå planen og still spørsmål
- Be om implementering når du er fornøyd med planen

</details>
