import { Oppgave } from '../typer/oppgave'
import { OppgaveElement } from './OppgaveElement'

interface OppgaveListeProps {
  oppgaver: Oppgave[]
  onByttFullfort: (id: number) => void
  onSlett: (id: number) => void
}

export function OppgaveListe({ oppgaver, onByttFullfort, onSlett }: OppgaveListeProps) {
  if (oppgaver.length === 0) {
    return <p className="tom-melding">Ingen oppgaver enna. Legg til en ovenfor!</p>
  }

  return (
    <div className="oppgave-liste">
      {oppgaver.map((oppgave) => (
        <OppgaveElement
          key={oppgave.id}
          oppgave={oppgave}
          onByttFullfort={onByttFullfort}
          onSlett={onSlett}
        />
      ))}
    </div>
  )
}
