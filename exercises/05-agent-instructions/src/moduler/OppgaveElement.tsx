import { Oppgave } from '../typer/oppgave'

interface OppgaveElementProps {
  oppgave: Oppgave
  onByttFullfort: (id: number) => void
  onSlett: (id: number) => void
}

export function OppgaveElement({ oppgave, onByttFullfort, onSlett }: OppgaveElementProps) {
  return (
    <div className="oppgave-element">
      <input
        type="checkbox"
        checked={oppgave.fullfort}
        onChange={() => onByttFullfort(oppgave.id)}
        className="oppgave-avkrysning"
      />
      <span className={oppgave.fullfort ? 'fullfort' : ''}>
        {oppgave.tekst}
      </span>
      <button
        onClick={() => onSlett(oppgave.id)}
        className="slett-knapp"
      >
        Slett
      </button>
    </div>
  )
}
