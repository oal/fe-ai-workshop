# Exercise 4: Fra Design til Kode med AI-Assistanse

## Mål
Lær hvordan du kan bruke AI-verktøy til å transformere design til fungerende kode, enten ved å koble direkte til Figma eller ved å bruke screenshots og beskrivelser.

## Oversikt
Dette kurset tilbyr to spor avhengig av om du har tilgang til Figma med MCP-integrasjon eller ikke. Begge sporene gir verdifull erfaring med AI-assistert utvikling, men bruker ulike tilnærminger.

---

## Track A: Med Figma MCP (krever Figma Dev seat)

### Forutsetninger
- Figma Desktop app installert
- Figma Dev seat (for å aktivere MCP server)
- En Figma-fil du har tilgang til

### Instruksjoner

#### 1. Forbered Figma-filen
- Åpne en Figma-fil du allerede har tilgang til
- Velg en komponent du vil implementere (f.eks. en knapp, kort, navigasjonsmeny, eller et skjema)
- Merk deg navnet på komponenten eller framen

#### 2. Aktiver MCP Server i Figma Desktop
- Åpne Figma Desktop app
- Trykk `Shift + D` for å åpne developer-menyen
- Velg "Enable desktop MCP server"
- Bekreft at serveren kjører (du skal se en melding om at MCP er aktivert)

#### 3. Implementer designet
Bruk Copilot CLI / Claude Code CLI til å hente designet og implementere det:

```bash
# Start Copilot CLI i prosjektmappen din
copilot

# Eksempel på prompt:
"Using Figma MCP, get the design for [FIGMA-KOMPONENT-LENKE] from my Figma file and implement it as a React component with TypeScript"
```

#### 4. Verifiser Implementasjonen med Playwright MCP
Etter at komponenten er implementert, bruk Playwright til å verifisere:

```bash
# Eksempel på prompt:
"Using Playwright MCP, navigate to http://localhost:3000 and verify that the [komponentnavn] component renders correctly. Take a screenshot for comparison."
```

### Eksempel-prompts for Figma MCP

**Grunnleggende implementasjon:**
```
"Using Figma MCP, connect to my Figma file and show me what designs are available"

"Get the design specifications for the 'Primary Button' component and implement it as a React component with styled-components"

"Extract the color palette from the Figma design system and create a theme.ts file"
```

**Avansert bruk:**
```
"Using Figma MCP, get the entire 'Dashboard' frame and implement it as a responsive React component with proper component breakdown"

"Compare the current implementation of LoginForm.tsx with the Figma design and suggest improvements to match the design better"

"Extract all typography styles from Figma and create corresponding CSS classes"
```

### Tips for Track A
- Start med enkle komponenter før du går videre til komplekse layouts
- Bruk Figma's komponentnavn konsekvent i både design og kode
- Kopier lenker til komponent i Figma (figma foreslår prompt med lenke med @ foran)
- Verifiser farger, spacing og typografi nøye mot designet
- Iterer ved å spørre AI-assistenten om å justere detaljer som ikke matcher perfekt

---

## Track B: Uten Figma (Screenshot-tilnærming)

### Forutsetninger
- VS Code med Copilot Chat installert, eller Claude Code CLI
- Et screenshot av en komponent/design du vil implementere
- Node.js installert

### Velg et Starter-prosjekt

Vi har to ferdigkonfigurerte starter-prosjekter du kan bruke:

**React + TypeScript** (`react-starter/`):
```bash
cd react-starter
npm install
npm run dev
```

**HTML + SCSS** (`html-starter/`):
```bash
cd html-starter
npm install
npm run dev
```

Begge prosjektene bruker Vite med hot reloading. Velg React hvis du er komfortabel med React, eller HTML + SCSS hvis du foretrekker å jobbe uten rammeverk.

### Instruksjoner

#### 1. Hovedoppgave: Duolingo Quiz-komponent
Implementer Duolingo quiz-grensesnittet fra `duolingo.png`:

**Designet inneholder:**
- Fremdriftslinje øverst med X-knapp for å lukke
- "NEW WORD" badge i grønt
- "Select the correct image" instruksjonstekst
- Audio-knapp med ordet "Kaffee" (tysk for kaffe)
- 2x2 grid med bildekort (tea, coffee, bread, milk)
- Valgt tilstand med blå highlight (coffee er valgt)
- Grønn "CHECK"-knapp nederst

**Ekstra utfordring:** Når du er ferdig, finn et annet design å klone fra Dribbble eller Behance (se ressurser nedenfor).

#### 2. Implementer med VS Code Copilot Chat

**Metode 1: VS Code Copilot Chat**
- Åpne VS Code Copilot Chat
- Klikk på "Attach" eller ikon for å legge ved filer
- Velg `duolingo.png`
- Skriv prompt:

```
"Implement this Duolingo quiz component in React with TypeScript. Include the progress bar, audio button, image grid, and check button."
```

**Metode 2: Claude Code CLI**
- Start Claude Code i prosjektmappen din
- Bruk en prompt som refererer til bildet:

```bash
"Look at the design in duolingo.png and implement it as a React component with TypeScript and CSS"
```

#### 3. Iterer og Forbedre
Bruk oppfølgingsprompts for å justere implementasjonen:

```
"Add hover effect to the image cards when hovering"

"Make the selected card have a thicker blue border like in the design"

"Add a click handler that toggles the selection state"

"Style the CHECK button with the exact green color from the design"

"Add a subtle animation when selecting a card"
```

#### 4. Verifiser med Playwright MCP
Når komponenten er implementert, test den:

```bash
# I Claude Code:
"Using Playwright MCP, navigate to http://localhost:3000 and verify that the quiz component displays correctly. Click on each image card and verify the selection state changes."

"Take a screenshot and compare it with the original duolingo.png design"
```

### Eksempel-prompts for Screenshot-basert Design-to-Code

**Initial implementasjon:**
```
"Implement this Duolingo quiz design as a React component. Use TypeScript and CSS"

"Create the image card grid with proper selection states. Each card should show an image and label"

"Build the progress bar component with the X close button on the left"
```

**Iterasjon og forbedring:**
```
"The spacing between cards doesn't match the design. Adjust the gap"

"Add the audio button with the speaker icon and 'Kaffee' text"

"The selected state needs a light blue background, not just a border"

"Add smooth transitions when selecting a card"

"Extract reusable components: ProgressBar, AudioButton, ImageCard, CheckButton"
```

**Styling-justeringer:**
```
"Use CSS Grid for the 2x2 image card layout"

"Match the exact green color (#58cc02) for the CHECK button"

"Add the dotted underline to the 'Kaffee' text like in the design"

"Make the component mobile-first since it's a mobile app design"
```

### Tips for å Finne Design-inspirasjon

Hvis du ikke har et eget design, søk etter:
- "Material UI dashboard" (for dashboard-komponenter)
- "React admin dashboard" (for komplette admin-paneler)
- "Modern web component design" (for enkeltstående komponenter)
- "Landing page hero section" (for hero-seksjoner)

Nyttige ressurser:
- [Material UI Templates](https://mui.com/material-ui/getting-started/templates/)
- [Dribbble](https://dribbble.com/) (for design-inspirasjon)
- [Behance](https://www.behance.net/) (for design-inspirasjon)

---

## Felles Tips for Begge Spor

### Verifisering med Playwright MCP

**Grunnleggende navigasjon:**
```
"Using Playwright MCP, navigate to http://localhost:3000 and take a screenshot"

"Click on the 'Dashboard' button and verify the navigation works"

"Fill in the login form and submit it to test the validation"
```

**Responsivitet-testing:**
```
"Test the component at mobile viewport (375x667) and take a screenshot"

"Verify that the layout switches to mobile view at 768px width"

"Test all breakpoints and ensure the design is responsive"
```

**Interaktivitet-testing:**
```
"Click all buttons on the page and verify they have proper hover states"

"Test keyboard navigation through the form"

"Verify that the modal opens and closes correctly"
```

### Iterasjon og Forbedring

**Best Practices:**
1. **Start enkelt**: Implementer grunnstrukturen først, deretter detaljer
2. **Iterer steg for steg**: En endring om gangen gjør det lettere å spore problemer
3. **Vær spesifikk**: "Gjør knappen større" vs "Øk knappens høyde til 48px"
4. **Sammenlign visuelt**: Ta screenshots og sammenlign med original-designet
5. **Test tidlig og ofte**: Verifiser at komponenten fungerer i nettleseren

**Vanlige iterasjoner:**
- Juster farger og fargepaletter
- Endre spacing og margins
- Justere typografi (font-størrelse, vekt, linjehøyde)
- Legge til animasjoner og overganger
- Forbedre responsivitet for ulike skjermstørrelser
- Legge til tilgjengelighetsfunksjoner (ARIA-labels, keyboard navigation)

### Ting å Være Oppmerksom På

**Vanlige utfordringer:**
- **Farger matcher ikke**: Bruk color picker-verktøy for å få eksakte hex-verdier
- **Spacing er feil**: Spesifiser eksakte pixel-verdier eller bruk design tokens
- **Font ser annerledes ut**: Sjekk at du bruker riktig font-family og -weight
- **Layout bryter på mobil**: Test tidlig på små skjermer

**Kvalitetssjekk:**
- [ ] Komponenten matcher designet visuelt
- [ ] Koden er ren og vedlikeholdbar
- [ ] TypeScript-typer er korrekte
- [ ] Komponenten er responsiv
- [ ] Tilgjengelighet er ivaretatt
- [ ] Interaktive elementer fungerer som forventet

---

## Oppgaver

### Oppgave 1: Grunnstruktur
- **Track A**: Hent en komponent fra Figma og implementer den
- **Track B**: Implementer grunnstrukturen for Duolingo quiz-komponenten fra `duolingo.png`
- Lag fremdriftslinje, overskrift, og CHECK-knappen
- Verifiser at stiler matcher designet

### Oppgave 2: Bildegrid med Interaksjon
- **Track A**: Implementer en interaktiv komponent fra Figma
- **Track B**: Bygg 2x2 bildegridet med seleksjon-funksjonalitet
- Implementer valgt tilstand (blå highlight)
- Legg til hover-effekter
- Test at kun ett kort kan være valgt om gangen

### Oppgave 3: Iterer og Forbedre
- Start med implementasjonen fra Oppgave 2
- Gjør minst 5 iterasjoner for å matche designet bedre
- Fokuser på detaljer: spacing, farger, animasjoner
- Legg til audio-knappen med "Kaffee" tekst
- Sammenlign final versjon med original-designet

### Oppgave 4: Ekstra Utfordring
- Finn et nytt design på Dribbble eller Behance
- Implementer det fra scratch med samme tilnærming
- Test med Playwright MCP

---

## Læringsmål

Etter å ha fullført denne øvelsen skal du kunne:

- [ ] Transformere design til fungerende React-komponenter med AI-assistanse
- [ ] Bruke enten Figma MCP eller screenshot-basert tilnærming effektivt
- [ ] Iterere på implementasjoner for å matche design nøyaktig
- [ ] Verifisere implementasjoner med Playwright MCP
- [ ] Bygge responsive komponenter som fungerer på alle enheter
- [ ] Dele opp komplekse designs i gjenbrukbare komponenter
- [ ] Teste og validere at implementasjonen matcher designet

---

## Ekstra Ressurser

### For Track A (Figma MCP):
- [Figma MCP Server Documentation](https://github.com/figma/mcp-server-figma)
- [Figma Dev Mode Guide](https://help.figma.com/hc/en-us/articles/360055203533-Dev-Mode)

### For Track B (Screenshot-basert):
- [VS Code Copilot Chat Guide](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [Claude Vision Capabilities](https://www.anthropic.com/claude)

### Generelt:
- [Playwright Testing Guide](https://playwright.dev/)
- [React TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app/)
- [Material UI Documentation](https://mui.com/)

---

## Neste Steg

Når du har fullført denne øvelsen, gå videre til:
- **Exercise 5**: Testing og Kvalitetssikring med AI
- **Exercise 6**: Refaktorering og Kodeoptimalisering

God koding!
