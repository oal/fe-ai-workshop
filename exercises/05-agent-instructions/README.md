# Øvelse 5: Prosjektinstruksjoner (CLAUDE.md / copilot-instructions.md)

## Mål
Opplev hvordan AI-genererte prosjektinstruksjoner forbedrer AI-assistansen dramatisk.

## Beskrivelse
Dette er en todo-app med bevisst uvanlige konvensjoner:
- Norske variabel- og funksjonsnavn
- `moduler/` i stedet for `components/`
- `brukNavn` hooks i stedet for `useNavn`
- `typer/` i stedet for `types/`

AI-verktøy vet ikke om disse konvensjonene med mindre de får beskjed!

## Prosjektkonvensjoner

| Standard | Dette prosjektet |
|----------|------------------|
| `components/` | `moduler/` |
| `useNavn` | `brukNavn` |
| English names | Norsk (`oppgaver`, `leggTil`) |
| `types/` | `typer/` |

## Oppgaver

### 1. Før: Opplev problemet
- Start applikasjonen med `npm run dev`
- Spør AI-assistenten din:
  ```
  Legg til en prioritet-funksjon som følger prosjektets konvensjoner.
  Oppgaver skal kunne ha prioritet høy, medium eller lav.
  ```
- **Observér:** AI vil sannsynligvis foreslå:
  - `components/Priority.tsx` (feil - skal være `moduler/`)
  - `usePriority` hook (feil - skal være `brukPrioritet`)
  - Engelske variabelnavn (feil - skal være norsk)

### 2. Generer instruksjonsfil
La AI-verktøyet lære prosjektet ditt:

- **Claude Code:** Kjør `/init`
- **VS Code Copilot:** Tannhjul-ikon (⚙️) → "Generate Chat Instructions"

Se gjennom hva som ble generert. Filen vil beskrive prosjektets struktur og mønstre.

### 3. Etter: Opplev forskjellen
- Still **samme spørsmål** på nytt
- **Observér:** AI bruker nå:
  - `moduler/Prioritet.tsx`
  - `brukPrioritet` hook
  - Norske variabelnavn som `prioritet`, `hoyPrioritet`

### 4. Bonus: Forbedre filen
Legg til mer spesifikk veiledning i instruksjonsfilen, for eksempel:
- Spesifikke navnekonvensjoner
- Foretrukne mønstre
- Ting AI bør unngå

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
- Forstå verdien av prosjektspesifikke instruksjonsfiler
- Se hvordan AI-verktøy kan generere kontekst automatisk
- Oppleve forskjellen før og etter instruksjonsfilen
- Lære at prosjektspesifikke mønstre > generiske "best practices"

## Verktøy-spesifikke tips

<details>
<summary>Claude Code</summary>

**Generer CLAUDE.md:**
```
/init
```

Dette skanner prosjektet og genererer en `CLAUDE.md`-fil med:
- Prosjektstruktur
- Kodestil og konvensjoner
- Viktige kommandoer

Filen plasseres i prosjektets rotmappe og leses automatisk av Claude.

</details>

<details>
<summary>VS Code med GitHub Copilot</summary>

**Generer copilot-instructions.md:**
1. Åpne Copilot Chat med **Ctrl+Shift+I** (Windows/Linux) eller **Cmd+Shift+I** (Mac)
2. Klikk på tannhjul-ikonet (⚙️)
3. Velg "Generate Chat Instructions"
4. Filen `.github/copilot-instructions.md` blir opprettet

Copilot leser denne filen automatisk for å forstå prosjektet bedre.

</details>

<details>
<summary>Andre AI-verktøy</summary>

For verktøy uten automatisk generering:
1. Opprett en `AGENTS.md` eller lignende fil manuelt
2. Beskriv prosjektets konvensjoner:
   - Mappestruktur
   - Navnekonvensjoner
   - Foretrukne mønstre
3. Referer til filen når du chatter med AI

</details>

## Filstruktur

```
05-agent-instructions/
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── App.css
    ├── moduler/           ← Ikke "components"
    │   ├── OppgaveListe.tsx
    │   ├── OppgaveSkjema.tsx
    │   └── OppgaveElement.tsx
    ├── hooks/
    │   └── brukOppgaver.ts  ← "bruk" ikke "use"
    └── typer/             ← Ikke "types"
        └── oppgave.ts
```
