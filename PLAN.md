# AI Coding Workshop for Frontend Developers

## Workshop Overview
**Duration:** 1.5 hours (exercises can be continued afterward)
**Audience:** Frontend developers familiar with HTML/CSS/JS/TS, some Copilot experience
**Goal:** Inspire developers to use AI as a planning partner and debugging colleague, not just autocomplete

### Language
- **Norwegian** for all descriptions, instructions, and explanatory text
- **English** for code, technical terms, commands, and file names

---

## Progress Tracker

- [x] Create repo structure and README.md
- [x] Create SETUP.md with installation instructions
- [x] Create Exercise 1 (warm-up) - simple HTML/CSS/JS page
- [x] Create Exercise 2 (React app) - Vite + React 19 + TypeScript todo app
- [x] Create Exercise 3 (debug challenge) - buggy React app
- [x] Create Exercise 4 (design-to-code) - both tracks (Duolingo design)
- [x] Create Exercise 5 (agent-instructions) - bonus exercise
- [x] Create cheatsheet.md
- [x] Test all exercises

---

## Repository Structure

```
ai-coding-workshop/
├── README.md                    # Workshop overview & setup instructions
├── SETUP.md                     # Detailed installation guide
├── cheatsheet.md               # Quick reference for commands
├── exercises/
│   ├── 01-warm-up/             # Simple static HTML/CSS/JS
│   │   ├── README.md
│   │   ├── index.html
│   │   └── styles.css
│   ├── 02-react-app/           # Small React/Vite app
│   │   ├── README.md
│   │   ├── package.json
│   │   └── src/
│   ├── 03-debug-challenge/     # Broken code to fix
│   │   ├── README.md
│   │   ├── package.json
│   │   └── src/
│   ├── 04-design-to-code/      # Figma MCP or screenshot track
│   │   ├── README.md
│   │   └── duolingo.png        # Screenshot for Track B
│   └── 05-agent-instructions/  # Bonus: Project instructions
│       ├── README.md
│       ├── package.json
│       └── src/
```

---

## Workshop Agenda (1.5 hours)

| Tid | Del | Format |
|-----|-----|--------|
| 0:00-0:10 | Introduksjon & oppsettsjekk | Presentasjon |
| 0:10-0:20 | Demo: Plan Mode & parallelle agenter | Live demo |
| 0:20-0:35 | Øvelse 1: Warm-up (HTML/CSS/JS) | Praktisk |
| 0:35-0:45 | Demo: Playwright MCP | Live demo |
| 0:45-1:05 | Øvelse 2 eller 3: React App ELLER Debug Challenge | Praktisk |
| 1:05-1:20 | Øvelse 4: Design-to-Code | Praktisk |
| 1:20-1:30 | Q&A, tips & avslutning | Diskusjon |

---

## Exercise Details

### Exercise 1: Warm-up (HTML/CSS/JS)
**Mål:** Bli komfortabel med AI-assistanse

**Starter:** En enkel landingsside med ufullstendig styling

**Oppgaver:**
1. Bruk Copilot Chat til å forklare eksisterende kode
2. Be AI legge til en responsiv navigasjonsmeny
3. Bruk Claude Code i Plan Mode (`Shift+Tab` to ganger) for å undersøke hvordan man legger til dark mode toggle, deretter implementer det

---

### Exercise 2: React App Enhancement
**Mål:** Bruk plan mode og parallelle agenter

**Starter:** En Vite + React todo-app med grunnleggende funksjonalitet

**Oppgaver:**
1. Gå inn i Plan Mode i Claude Code
2. Spør: "Jeg vil legge til kategorier på todos og mulighet til å filtrere på kategori. Undersøk kodebasen og lag en plan."
3. Se hvordan Claude utforsker uten å endre kode
4. Gjennomgå planen, still oppfølgingsspørsmål
5. Gå ut av plan mode og implementer

---

### Exercise 3: Debug Challenge
**Mål:** Bruk AI som en debugging-kollega

**Starter:** En React-app med 3-4 bevisste bugs:
- useEffect med manglende dependencies (uendelig loop)
- CSS specificity-problem
- async/await-bug
- state mutation-bug

**Oppgaver:**
1. Kjør appen, observer problemene
2. Bruk Copilot CLI: `copilot` → beskriv buggen → få forslag
3. Bruk Claude Code: lim inn feilmeldinger, be om analyse
4. Bruk Playwright MCP til å automatisere testing av fiksene

---

### Exercise 4: Design-to-Code

#### Track A: Med Figma MCP (krever Dev seat)
**Oppgaver:**
1. Åpne en Figma-fil du allerede har tilgang til (velg en komponent du vil implementere)
2. Aktiver MCP server i Figma Desktop (Shift+D → Enable desktop MCP server)
3. I Claude Code: "Using Figma MCP, get the design for [komponentnavn] and implement it"
4. Bruk Playwright MCP til å verifisere implementasjonen

#### Track B: Uten Figma (Screenshot-tilnærming)
**Oppgaver:**
1. Screenshot av Material UI Dashboard-komponent finnes i `designs/`-mappen
2. I VS Code Copilot Chat: legg ved bildet, spør "Implement this component in React"
3. Iterer: "Make the button more rounded" / "Change the color scheme"
4. Bruk Playwright MCP til å navigere til siden og verifisere

---

## Key Demo Scripts

### Demo 1: Plan Mode & Parallel Agents (10 min)

```
# I Claude Code, naviger til exercise 02

# Gå inn i plan mode
Trykk Shift+Tab to ganger

# Gi en kompleks forespørsel
"I want to refactor this todo app to use a proper state management
solution and add persistent storage. Research the current codebase
structure, explore what patterns are already in use, and create
a detailed implementation plan. Don't change any code yet."

# Vis frem:
# - Claude leser filer, endrer ikke
# - Den utforsker mønstre
# - Plan-filen som blir laget
# - Hvordan man gjennomgår før godkjenning
```

### Demo 2: Playwright MCP (10 min)

```
# I Claude Code med Playwright MCP installert

"Use Playwright MCP to:
1. Open a browser to our local dev server at localhost:5173
2. Add a new todo item
3. Verify it appears in the list
4. Check that the count updated"

# Vis frem:
# - Ekte nettleser åpnes
# - Claude beskriver hva den ser
# - Accessibility tree, ikke screenshots
# - Kan autentisere manuelt ved behov
```

---

## Installation Commands

### Claude Code CLI

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```

**macOS/Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | sh
```

**Verifiser & Logg inn:**
```bash
claude --version
claude
# Følg innloggingsinstruksjonene
```

### GitHub Copilot CLI

**Krav:** Node.js 22+, npm 10+

```bash
npm install -g @github/copilot
copilot
# Skriv /login for å autentisere
```

**Windows alternativ:**
```bash
winget install GitHub.Copilot
```

### Playwright MCP (for Claude Code)

```bash
claude mcp add playwright -s user -- npx -y @playwright/mcp@latest
```

Verifiser med `/mcp` kommandoen i Claude Code.

### Figma MCP (krever Dev/Full seat)

1. Åpne Figma Desktop-appen (siste versjon)
2. Åpne en Design-fil → Trykk `Shift+D` for Dev Mode
3. I inspect-panelet → Klikk "Enable desktop MCP server"
4. Server kjører på `http://127.0.0.1:3845/mcp`

**Legg til i VS Code:**
- `Cmd/Ctrl+Shift+P` → "MCP: Add Server" → HTTP → `http://127.0.0.1:3845/mcp`

**Legg til i Claude Code:**
```bash
claude mcp add figma-desktop --transport http http://127.0.0.1:3845/mcp
```
