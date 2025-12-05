# AI Coding Cheatsheet

> **Merk:** Denne guiden inneholder tips spesifikke for ulike verktøy. Bruk seksjonene som er relevante for ditt oppsett.

---

## Claude Code Snarveier

### Viktige tastatursnarveier
- **Shift+Tab (2x)**: Åpne Plan Mode
- **Ctrl+C**: Avbryt pågående operasjon
- **Ctrl+D**: Avslutt Claude Code

### Nyttige kommandoer
- `/mcp`: Liste alle tilgjengelige MCP-servere
- `/help`: Få hjelp og se tilgjengelige kommandoer
- `/clear`: Tøm samtalehistorikken
- `/reset`: Start en ny samtale

## Plan Mode Tips

### Hva er Plan Mode?
Plan Mode lar Claude utforske kodebasen og lage en plan uten å endre kode.

### Fordeler med Plan Mode
- Claude analyserer kodebasen grundig
- Lager en detaljert planfil for gjennomgang
- Du kan gjennomgå planen før implementering
- Godkjenn eller be om endringer før kode endres

### Når bør du bruke Plan Mode?
- Store refaktoreringer
- Komplekse features med flere filer
- Når du vil forstå endringene før de implementeres
- For å få en oversikt over påvirkning på kodebasen

### Workflow
1. Trykk **Shift+Tab (2x)** for å aktivere Plan Mode
2. Beskriv hva du vil oppnå
3. Claude utforsker og lager en plan
4. Gjennomgå planfilen som blir opprettet
5. Godkjenn eller be om justeringer
6. Claude implementerer planen

## Playwright MCP Kommandoer

### Grunnleggende nettleserautomatisering
```
Åpne https://example.com med Playwright
```

### Navigasjon
```
Gå til https://example.com og ta et skjermbilde
```
```
Naviger til login-siden og fyll inn skjemaet
```

### Interaksjon med elementer
```
Klikk på knappen med teksten "Sign In"
```
```
Finn input-feltet for email og skriv inn test@example.com
```
```
Søk etter elementet med id "submit-button" og klikk på det
```

### Verifisering
```
Sjekk at siden inneholder teksten "Welcome"
```
```
Verifiser at elementet med class "success-message" er synlig
```

### Skjermbilder og debugging
```
Ta et skjermbilde av hele siden
```
```
Ta et skjermbilde av elementet med id "navigation"
```

### Komplekse workflows
```
Gå til shopping-siden, legg til 3 produkter i handlekurven, og verifiser at totalprisen er korrekt
```

## Eksempel Prompts per Øvelse

### Øvelse 1: HTML/CSS Grunnlag
**Forklare kode:**
```
Forklar hva denne HTML-strukturen gjør
```
```
Hva er forskjellen mellom flexbox og grid i denne CSS-filen?
```

**Responsive design:**
```
Legg til responsiv navigasjon som kollapser til hamburger-meny på mobile enheter
```
```
Gjør bildegalleriet responsivt med CSS Grid
```

**Dark mode:**
```
Implementer dark mode toggle med CSS custom properties
```
```
Legg til en knapp som bytter mellom lyst og mørkt tema
```

**Styling:**
```
Legg til hover-effekter på kortene
```
```
Forbedre typografien og legg til bedre spacing
```

### Øvelse 2: React Komponenter
**Utforske kodebasen:**
```
Undersøk kodebasen og lag en plan for å legge til kategorier for oppgaver
```
```
Analyser komponentstrukturen og foreslå forbedringer
```

**State management:**
```
Hjelp meg å forstå hvordan state flyter gjennom komponentene
```
```
Refaktorer state management til å bruke useReducer
```

**Nye features:**
```
Legg til mulighet til å filtrere oppgaver etter kategori
```
```
Implementer søkefunksjonalitet for oppgaver
```
```
Lag en komponent for statistikk som viser antall fullførte oppgaver
```

### Øvelse 3: Debugging & Testing
**Debug problemer:**
```
Hjelp meg å debugge dette problemet - komponenten re-renderer uendelig
```
```
Hvorfor vises ikke dataene i listen?
```
```
Feilmeldingen sier "Cannot read property 'map' of undefined" - hva er galt?
```

**Ytelse:**
```
Hvorfor er applikasjonen treg når jeg har mange oppgaver?
```
```
Analyser ytelsen og foreslå optimaliseringer
```

**Testing:**
```
Skriv tester for TodoList-komponenten
```
```
Hjelp meg å forstå hvorfor denne testen feiler
```
```
Legg til integrasjonstester for hele todo-flyten
```

### Øvelse 4: Design til Kode
**Figma MCP:**
```
Bruk Figma MCP til å hente designet for landing page og implementer det
```
```
Hent fargepaletten fra Figma-filen og oppdater CSS-variabler
```
```
Sammenlign implementeringen med Figma-designet og finn avvik
```

**Implementering fra design:**
```
Implementer denne komponenten basert på Figma-designet
```
```
Lag en Button-komponent som matcher designsystemet
```

**Responsive design:**
```
Implementer mobile, tablet og desktop-versjoner basert på Figma-artboards
```

## Copilot CLI Tips

### Installasjon
```bash
npm install -g @githubnext/github-copilot-cli
gh copilot auth
```

### Beskrive bugs
```bash
# Be om hjelp med en kommando
gh copilot suggest "hvordan finne store filer i mappen"

# Forklar en kommando
gh copilot explain "git rebase -i HEAD~3"
```

### Terminal-kommandoer
```bash
# Be om git-kommandoer
gh copilot suggest "lag en ny branch og push den"

# Få forslag til npm-scripts
gh copilot suggest "kjør tester med coverage"
```

### Debugging-prompts
- Vær spesifikk om feilen: "npm install feiler med EACCES-feil"
- Inkluder kontekst: "hvordan fikse merge conflicts i package.json"
- Be om forklaring: "forklar hva denne git-kommandoen gjør"

## Nyttige Generelle Prompts

### Kodeforståelse
```
Forklar denne kodefilen i enkle termer
```
```
Hva er formålet med denne funksjonen?
```
```
Lag et diagram som viser komponenthierarkiet
```

### Refaktorering
```
Hvordan kan jeg forbedre denne koden?
```
```
Refaktorer til å bruke mer moderne JavaScript-syntaks
```
```
Gjør denne funksjonen mer lesbar
```

### Beste praksis
```
Følger denne koden beste praksis for React?
```
```
Hvordan kan jeg gjøre denne komponenten mer tilgjengelig (a11y)?
```
```
Legg til TypeScript types for bedre type-sikkerhet
```

## Pro Tips

### Få bedre svar
1. **Vær spesifikk**: Jo mer detaljer, jo bedre svar
2. **Gi kontekst**: Forklar hva du prøver å oppnå
3. **Iterer**: Start enkelt, bygg på løsningen
4. **Be om forklaringer**: "Forklar hvorfor du valgte denne tilnærmingen"

### Effektiv bruk av Plan Mode
- Bruk for store endringer som påvirker flere filer
- Gjennomgå planen nøye før godkjenning
- Be om justeringer hvis noe ikke er klart
- Lær av planen for fremtidige implementeringer

### MCP Server Tips
- Sjekk `/mcp` for å se hvilke servere som er tilgjengelige
- Les dokumentasjonen for hver MCP-server
- Kombiner MCP-servere for kraftige workflows (f.eks. Figma + Playwright)

### Debugging Workflow
1. Beskriv problemet tydelig
2. Del relevante feilmeldinger
3. Forklar hva du har prøvd
4. Be om forklaring på løsningen
5. Lær av feilen for fremtiden

## Ressurser

### Dokumentasjon
- [Claude Code Docs](https://docs.claude.ai/)
- [MCP Dokumentasjon](https://modelcontextprotocol.io/)
- [Playwright Docs](https://playwright.dev/)

### Community
- Del tips med kursdeltakere
- Eksperimenter med forskjellige prompts
- Lær av andres løsninger

---

**Husk:** AI er et verktøy for å gjøre deg mer produktiv. Jo bedre du blir til å kommunisere med AI, jo mer effektiv blir du som utvikler!
