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

### 2. Bruk Copilot CLI til debugging
```bash
# Start Copilot CLI
copilot

# Beskriv buggen du ser, for eksempel:
# "The app keeps making network requests over and over"
# "When I add a new user, the list doesn't update correctly"
# "The button styling looks wrong"
```

La Copilot foreslå hva som kan være galt og hvordan du kan fikse det.

### 3. Bruk Claude Code til dypere analyse
Hvis du får en feilmelding eller advarsel i konsollen:
```bash
# Kopier feilmeldingen og lim den inn i Claude Code
# Be om analyse: "Hva betyr denne feilen?"
# Eller be om en forklaring: "Hvorfor får jeg infinite loop warning?"
```

Du kan også be Claude Code om å:
- Analysere koden din: "Se på App.tsx og forklar hva som kan forårsake sakte ytelse"
- Foreslå forbedringer: "Hvordan kan jeg fikse denne CSS-konflikten?"

### 4. Bruk Playwright MCP til å teste fiksene dine
Når du tror du har fikset en bug, kan du bruke Playwright MCP (via Claude Code) til å:
- Automatisere testing av appen
- Verifisere at brukere lastes inn korrekt
- Teste at nye brukere legges til riktig
- Sjekke at ingen uventede nettverkskall skjer

Eksempel prompts til Claude Code med Playwright:
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
- Kunne bruke Playwright MCP til automatisert testing

## Ekstra utfordring
Når du har fikset alle bugs:
1. Be Claude Code om å forklare hvorfor hver bug oppstod
2. Be om forslag til hvordan du kan forhindre lignende bugs i fremtiden
3. Bruk Playwright MCP til å lage en komplett testsuitte for appen
