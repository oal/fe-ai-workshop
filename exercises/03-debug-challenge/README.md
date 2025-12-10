# Øvelse 3: Debug Challenge

## Mål
Lær å bruke AI som en debugging-kollega for å identifisere og fikse bugs i en React-applikasjon.

## Beskrivelse
Denne React-appen har flere bugs som må fikses. Appen er en enkel brukerliste som henter data og lar deg legge til nye brukere. Men noe er galt...

## Symptomer (ting du vil legge merke til)
- **"Appen kjører sakte og fryser noen ganger"** - Nettverkstrafikken ser mistenkelig ut
- **"Styling ser ikke riktig ut"** - Noen elementer har feil farger eller størrelser
- **"Data lastes ikke som forventet"** - Brukere vises ikke riktig i listen
- **"Listen oppdaterer seg ikke korrekt"** - Når du legger til en bruker, skjer det rare ting

## Oppgaver

### 1. Kjør appen og observer problemene
```bash
npm install
npm run dev
```

Åpne appen i nettleseren og observer hva som skjer:
- Se på Network-fanen i DevTools
- Se på Console for advarsler eller feil
- Prøv å legge til en ny bruker
- Observer ytelsen

### 2. Beskriv problemet til AI-assistenten
Når du har observert et problem, beskriv det til AI-assistenten din:

**Eksempel-prompts:**
- "Appen gjør uendelig mange nettverkskall - hva kan være galt?"
- "Når jeg legger til en bruker, oppdateres ikke listen korrekt"
- "Knappen har feil styling - kan du se på CSS-en?"
- "Hvorfor får jeg denne advarselen i konsollen: [lim inn advarsel]"

### 3. Analyser feilmeldinger med AI
Hvis du får feilmeldinger eller advarsler i konsollen:
- Kopier feilmeldingen og del den med AI-assistenten
- Be om forklaring: "Hva betyr denne feilen?"
- Be om analyse: "Se på App.tsx og forklar hva som kan forårsake sakte ytelse"
- Be om løsningsforslag: "Hvordan kan jeg fikse dette?"

### 4. Test fiksene dine
Når du tror du har fikset en bug:
- Test manuelt i nettleseren
- Sjekk at Network-fanen ikke viser uventede kall
- Verifiser at Console er fri for feil

**Valgfritt - Automatisert testing med Playwright:**
Hvis du bruker et AI-verktøy med Playwright MCP (se [SETUP.md](../../SETUP.md)), kan du automatisere testingen:
- "Bruk Playwright til å teste at brukerlisten lastes inn"
- "Automatiser testing av å legge til en ny bruker"
- "Sjekk at appen ikke gjør mer enn ett API-kall ved oppstart"

## Tips
- Det er **4 bugs** i denne appen
- Hver bug representerer en vanlig feil i React-utvikling
- Les kommentarene i koden - noen har `// TODO: Something seems off here`
- Bruk React DevTools for å se når komponenter re-renderer
- Bruk Network-fanen for å se API-kall

## Læringsmål
Etter denne øvelsen skal du:
- Kunne bruke AI-verktøy til å diagnostisere bugs
- Forstå vanlige React-feil (useEffect dependencies, state mutation, etc.)
- Vite hvordan man beskriver bugs til AI for best mulig hjelp
- Kunne teste og verifisere at fikser fungerer

## Ekstra utfordring
Når du har fikset alle bugs:
1. Be AI-assistenten om å forklare hvorfor hver bug oppstod
2. Be om forslag til hvordan du kan forhindre lignende bugs i fremtiden
3. Skriv tester for å sikre at buggene ikke kommer tilbake

## Verktøy-spesifikke tips

<details>
<summary>Claude Code</summary>

- Claude Code kan lese filer direkte - bare referer til filnavn
- Bruk Playwright MCP for automatisert testing:
  ```
  Bruk Playwright til å åpne appen og verifisere at brukerlisten lastes
  ```
- Be om analyse av spesifikke filer:
  ```
  Analyser App.tsx og finn potensielle ytelsesproblem
  ```

</details>

<details>
<summary>VS Code med GitHub Copilot</summary>

- Åpne Copilot Chat med **Ctrl+Shift+I** (Windows/Linux) eller **Cmd+Shift+I** (Mac)
- Bruk `@workspace` for kontekst om hele prosjektet
- Marker problematisk kode og bruk "Copilot" → "Fix" fra høyreklikk-menyen
- Lim inn feilmeldinger direkte i chatten for analyse

</details>

<details>
<summary>GitHub Copilot CLI</summary>

- Start med `copilot` i terminalen
- Beskriv problemet du ser:
  ```
  The React app keeps making infinite network requests
  ```
- Be om hjelp til å forstå feilmeldinger ved å spørre naturlig

</details>

<details>
<summary>Andre AI-verktøy (ChatGPT, Claude web, etc.)</summary>

- Kopier innholdet i `src/App.tsx` inn i chatten
- Del feilmeldinger og advarsler fra konsollen
- Beskriv symptomene du observerer
- Be om trinnvis analyse av koden

</details>
