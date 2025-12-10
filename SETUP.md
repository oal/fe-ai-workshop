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

## 3. Playwright MCP for AI-verktøy

Playwright MCP (Model Context Protocol) server gir AI-verktøy mulighet til å automatisere nettlesere.

### Installasjon

<details>
<summary>VS Code med GitHub Copilot</summary>

**Metode 1: Via Command Palette**
1. Trykk `Cmd/Ctrl+Shift+P`
2. Velg "MCP: Add Server"
3. Velg "Command (stdio)"
4. Skriv inn: `npx -y @playwright/mcp@latest`

**Metode 2: Via mcp.json**
1. Opprett `.vscode/mcp.json` i prosjektet:
```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```
2. Klikk "Start" knappen som vises i filen

</details>

<details>
<summary>GitHub Copilot CLI</summary>

1. Start Copilot CLI: `copilot`
2. Kjør `/mcp add` kommandoen
3. Fyll inn følgende:
   - **Name:** `playwright`
   - **Type:** `command`
   - **Command:** `npx -y @playwright/mcp@latest`
4. Trykk `Ctrl+S` for å lagre

</details>

<details>
<summary>Claude Code</summary>

```bash
claude mcp add playwright -s user -- npx -y @playwright/mcp@latest
```

</details>

### Verifisering

Sjekk at MCP-serveren er aktivert ved å kjøre `/mcp` kommandoen i ditt AI-verktøy.

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

<details>
<summary>VS Code med GitHub Copilot</summary>

**Metode 1: Via Command Palette**
1. Trykk `Cmd/Ctrl+Shift+P`
2. Velg "MCP: Add Server"
3. Velg HTTP
4. Skriv inn: `http://127.0.0.1:3845/mcp`

**Metode 2: Via mcp.json**
1. Opprett `.vscode/mcp.json` i prosjektet:
```json
{
  "servers": {
    "figma": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```
2. Klikk "Start" knappen som vises i filen

</details>

<details>
<summary>GitHub Copilot CLI</summary>

1. Start Copilot CLI: `copilot`
2. Kjør `/mcp add` kommandoen
3. Fyll inn følgende:
   - **Name:** `figma`
   - **Type:** `http`
   - **URL:** `http://127.0.0.1:3845/mcp`
4. Trykk `Ctrl+S` for å lagre

Alternativt kan du legge til direkte i `~/.copilot/mcp-config.json`:
```json
{
  "servers": {
    "figma": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

</details>

<details>
<summary>Claude Code</summary>

```bash
claude mcp add figma-desktop --transport http http://127.0.0.1:3845/mcp
```

</details>

---

## Feilsøking

Hvis du opplever problemer med installasjonene:

- **Claude Code:** Sjekk [dokumentasjonen](https://docs.anthropic.com/en/docs/claude-code)
- **GitHub Copilot:** Sjekk [GitHub Copilot dokumentasjon](https://docs.github.com/copilot)
- **MCP-servere:** Kjør `/mcp` i Claude Code for å se status på tilkoblede servere
