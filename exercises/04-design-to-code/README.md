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
- Claude Code CLI med MCP konfigurert

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

#### 3. Implementer Designet med Claude Code
Bruk Claude Code CLI til å hente designet og implementere det:

```bash
# Start Claude Code i prosjektmappen din
claude code

# Eksempel på prompt:
"Using Figma MCP, get the design for [komponentnavn] from my Figma file and implement it as a React component with TypeScript"
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
- Verifiser farger, spacing og typografi nøye mot designet
- Iterer ved å spørre AI-assistenten om å justere detaljer som ikke matcher perfekt

---

## Track B: Uten Figma (Screenshot-tilnærming)

### Forutsetninger
- VS Code med Copilot Chat installert, eller Claude Code CLI
- Et screenshot av en komponent/design du vil implementere
- Node.js og React development environment

### Instruksjoner

#### 1. Finn eller Lag et Design
Du har flere alternativer:

**Alternativ A: Bruk et eksisterende screenshot**
- Et eksempel på en dashboard-komponent finnes i `designs/`-mappen
- Du kan også finne inspirasjon online (se tips nedenfor)

**Alternativ B: Screenshot fra eksisterende nettsider**
- Finn en komponent du liker på nettet
- Ta et screenshot (bruk Windows Snipping Tool eller lignende)
- Lagre det i `designs/`-mappen

#### 2. Implementer med VS Code Copilot Chat

**Metode 1: VS Code Copilot Chat**
- Åpne VS Code Copilot Chat
- Klikk på "Attach" eller ikon for å legge ved filer
- Velg screenshot-filen
- Skriv prompt:

```
"Implement this component in React with TypeScript. Use modern best practices and make it responsive."
```

**Metode 2: Claude Code CLI**
- Start Claude Code i prosjektmappen din
- Bruk en prompt som refererer til bildet:

```bash
"Look at the design in designs/dashboard.png and implement it as a React component with TypeScript and Tailwind CSS"
```

#### 3. Iterer og Forbedre
Bruk oppfølgingsprompts for å justere implementasjonen:

```
"Make the buttons more rounded with larger border radius"

"Change the color scheme to use blue as the primary color instead of purple"

"Add hover effects to all interactive elements"

"Make the layout more compact for mobile devices"

"Add proper TypeScript types for all props"
```

#### 4. Verifiser med Playwright MCP
Når komponenten er implementert, test den:

```bash
# I Claude Code:
"Using Playwright MCP, navigate to http://localhost:3000 and verify that the dashboard component displays correctly. Check that all buttons are clickable and the layout is responsive."

"Take screenshots at different viewport sizes (mobile, tablet, desktop) to verify responsiveness"
```

### Eksempel-prompts for Screenshot-basert Design-to-Code

**Initial implementasjon:**
```
"Implement this dashboard design as a React component. Use TypeScript, Tailwind CSS, and follow Material Design principles"

"Create this card component with proper shadows, spacing, and typography. Make it reusable with props for title, description, and image"

"Build this navigation menu with working links and mobile-responsive hamburger menu"
```

**Iterasjon og forbedring:**
```
"The spacing between cards is too tight. Increase it to match the design better"

"Add loading states to all buttons"

"The font sizes don't match the design. Can you adjust them?"

"Add smooth transitions when hovering over interactive elements"

"Extract reusable components from this layout (Button, Card, Container)"
```

**Styling-justeringer:**
```
"Use CSS Grid instead of Flexbox for the main layout"

"Add a subtle gradient background like in the design"

"Make the shadows more pronounced to match the design"

"Implement dark mode support with a toggle button"
```

### Tips for å Finne Design-inspirasjon

Hvis du ikke har et eget design, søk etter:
- "Material UI dashboard" (for dashboard-komponenter)
- "React admin dashboard" (for komplette admin-paneler)
- "Modern web component design" (for enkeltstående komponenter)
- "Landing page hero section" (for hero-seksjoner)

Nyttige ressurser:
- [Material UI Templates](https://mui.com/material-ui/getting-started/templates/)
- [Tailwind UI Components](https://tailwindui.com/components)
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

### Oppgave 1: Implementer en Enkel Komponent (15 min)
- **Track A**: Hent en knapp-komponent fra Figma og implementer den
- **Track B**: Implementer en knapp fra et screenshot eller design du finner online
- Verifiser at stiler matcher designet
- Test hover- og active-states

### Oppgave 2: Bygg en Kompleks Layout (30 min)
- **Track A**: Implementer en hel side/frame fra Figma
- **Track B**: Implementer et dashboard eller en landing page fra screenshot
- Del opp i mindre komponenter
- Sørg for responsivt design
- Test på ulike skjermstørrelser med Playwright MCP

### Oppgave 3: Iterer og Forbedre (15 min)
- Start med implementasjonen fra Oppgave 2
- Gjør minst 5 iterasjoner for å forbedre designet
- Fokuser på detaljer: spacing, farger, animasjoner
- Sammenlign final versjon med original-designet

### Oppgave 4: Full Design-to-Production Flow (45 min)
- Velg et komplett design (flere komponenter)
- Implementer alle komponenter
- Sett opp proper komponent-hierarki
- Lag en storybook eller demo-side
- Test alt med Playwright MCP
- Dokumenter komponenter med JSDoc-kommentarer

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
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material UI Documentation](https://mui.com/)

---

## Neste Steg

Når du har fullført denne øvelsen, gå videre til:
- **Exercise 5**: Testing og Kvalitetssikring med AI
- **Exercise 6**: Refaktorering og Kodeoptimalisering

God koding!
