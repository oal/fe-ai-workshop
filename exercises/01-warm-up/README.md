# Øvelse 1: Oppvarming (HTML/CSS/JS)

## Mål
Bli komfortabel med AI-assistanse i webutvikling

## Beskrivelse
En enkel landingsside for et SaaS-produkt med ufullstendig styling. Denne øvelsen hjelper deg med å bli kjent med hvordan AI-verktøy kan assistere deg i utvikling.

## Oppgaver

### 1. Forstå eksisterende kode
- Åpne `index.html` og `styles.css`
- Bruk AI-assistenten din til å forklare eksisterende kode
- Spør om BEM-navngivningskonvensjonen som brukes i CSS
- Be om forklaring på CSS custom properties (variabler)

### 2. Legg til responsiv navigasjonsmeny
- Be AI om hjelp til å legge til en responsiv navigasjonsmeny i headeren
- Menyen skal inneholde lenker til: Hjem, Funksjoner, Priser, Kontakt
- Menyen skal være responsiv med en hamburger-meny på mobil
- Test at den fungerer på ulike skjermstørrelser

### 3. Implementer dark mode
- Be AI-assistenten din om å først analysere koden og lage en plan for dark mode
- Les gjennom planen og forstå arkitekturen før du implementerer
- Implementer dark mode-funksjonaliteten:
  - En toggle-knapp i headeren
  - Mørke farger for bakgrunn, tekst og kort
  - Smooth overgang mellom lysere og mørk modus
  - Lagre brukerens preferanse i localStorage

## Hvordan åpne

### Alternativ 1: Statisk fil
Åpne `index.html` direkte i nettleseren din. Ingen server eller build-prosess er nødvendig.

### Alternativ 2: Med Vite (hot reload)
For en bedre utvikleropplevelse med hot reloading:
```bash
cd vite-starter
npm install
npm run dev
```
Dette starter en utviklingsserver med automatisk oppdatering når du endrer koden.

## Teknologier
- HTML5
- Vanilla CSS / SCSS (med BEM-navngivning)
- Vanilla JavaScript (legges til av deg)
- Vite (valgfritt, for hot reload)

## Tips
- Start med å lese gjennom koden grundig
- Bruk AI-verktøyene til å stille spørsmål når noe er uklart
- Eksperimenter med forskjellige AI-prompts for å se hvordan de påvirker resultatene
- Husk å teste funksjonaliteten din i nettleseren underveis

## Verktøy-spesifikke tips

<details>
<summary>Claude Code</summary>

- Trykk **Shift+Tab to ganger** for å aktivere Plan Mode
- I Plan Mode vil Claude analysere koden uten å gjøre endringer
- Godkjenn planen før implementering starter
- Bruk `/mcp` for å se tilgjengelige MCP-servere

</details>

<details>
<summary>VS Code med GitHub Copilot</summary>

- Åpne Copilot Chat med **Ctrl+Shift+I** (Windows/Linux) eller **Cmd+Shift+I** (Mac)
- Bruk `@workspace` for å gi Copilot kontekst om hele prosjektet
- Be eksplisitt om en plan: "Analyser koden og lag en plan for å implementere dark mode"
- Marker kode og høyreklikk → "Copilot" → "Explain" for forklaringer

</details>

<details>
<summary>GitHub Copilot CLI</summary>

- Start med `copilot` i terminalen
- Bruk `gh copilot explain` for å få forklaring på kode
- Bruk `gh copilot suggest` for å få forslag til kommandoer

</details>

<details>
<summary>Andre AI-verktøy (ChatGPT, Claude web, etc.)</summary>

- Kopier relevant kode og lim inn i chatten
- Be om analyse og plan før implementering
- Del opp komplekse oppgaver i mindre steg
- Be om forklaring på kode du ikke forstår

</details>
