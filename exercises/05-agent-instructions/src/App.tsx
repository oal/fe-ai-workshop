import './App.css'
import { brukOppgaver } from './hooks/brukOppgaver'
import { OppgaveListe } from './moduler/OppgaveListe'
import { OppgaveSkjema } from './moduler/OppgaveSkjema'

function App() {
  const { oppgaver, leggTilOppgave, byttFullfort, slettOppgave, gjenstaendeAntall } = brukOppgaver()

  return (
    <div className="app">
      <div className="beholder">
        <h1>Oppgave App</h1>

        <OppgaveSkjema onLeggTil={leggTilOppgave} />

        <OppgaveListe
          oppgaver={oppgaver}
          onByttFullfort={byttFullfort}
          onSlett={slettOppgave}
        />

        {oppgaver.length > 0 && (
          <div className="bunntekst">
            <p>
              {gjenstaendeAntall} {gjenstaendeAntall === 1 ? 'oppgave' : 'oppgaver'} gjenstaar
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
