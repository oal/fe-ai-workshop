# Installasjonsveiledning

Denne guiden dekker installasjon av AI-verktøy for utvikling.

## 1. Claude Code CLI

Claude Code er Anthropics offisielle CLI for å bruke Claude direkte i terminalen.

### Installasjon

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```

**macOS/Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | sh
```

### Verifisering

Sjekk at installasjonen var vellykket:
```bash
claude --version
```

Logg inn første gang:
```bash
claude
```

Følg instruksjonene for å logge inn.

## 2. GitHub Copilot CLI

GitHub Copilot CLI gir AI-assistanse direkte i terminalen.

### Krav

- Node.js versjon 22 eller nyere
- npm versjon 10 eller nyere

### Installasjon

**Via npm (alle plattformer):**
```bash
npm install -g @github/copilot
```

**Windows alternativ (winget):**
```bash
winget install GitHub.Copilot
```

### Autentisering

Start Copilot og logg inn:
```bash
copilot
```

Kjør `/login` kommandoen i Copilot for å autentisere.

## 3. Playwright MCP for Claude Code

Playwright MCP (Model Context Protocol) server gir Claude Code mulighet til å automatisere nettlesere.

### Installasjon

Legg til Playwright MCP i Claude Code:
```bash
claude mcp add playwright -s user -- npx -y @playwright/mcp@latest
```

### Verifisering

Sjekk at MCP-serveren er aktivert ved å kjøre `/mcp` kommandoen inne i Claude Code.

## 4. Figma MCP (valgfritt)

Figma MCP krever en Figma Dev eller Full seat for å fungere.

### Oppsett

1. **Åpne Figma Desktop-appen**

2. **Åpne en Design-fil**

3. **Aktiver Dev Mode:**
   - Trykk `Shift+D`

4. **Aktiver MCP-serveren:**
   - I inspect-panelet, klikk på "Enable desktop MCP server"
   - Serveren kjører nå på `http://127.0.0.1:3845/mcp`

### Koble til MCP-serveren

**VS Code:**
1. Trykk `Cmd/Ctrl+Shift+P`
2. Velg "MCP: Add Server"
3. Velg HTTP
4. Skriv inn: `http://127.0.0.1:3845/mcp`

**Claude Code:**
```bash
claude mcp add figma-desktop --transport http http://127.0.0.1:3845/mcp
```

---

## Feilsøking

Hvis du opplever problemer med installasjonene:

- **Claude Code:** Sjekk [dokumentasjonen](https://docs.claude.ai)
- **GitHub Copilot:** Sjekk [GitHub Copilot dokumentasjon](https://docs.github.com/copilot)
- **MCP-servere:** Kjør `/mcp` i Claude Code for å se status på tilkoblede servere
