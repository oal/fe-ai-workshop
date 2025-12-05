import { useState } from 'react'

interface OppgaveSkjemaProps {
  onLeggTil: (tekst: string) => void
}

export function OppgaveSkjema({ onLeggTil }: OppgaveSkjemaProps) {
  const [inputVerdi, settInputVerdi] = useState('')

  const haandterSend = () => {
    if (inputVerdi.trim() === '') return
    onLeggTil(inputVerdi)
    settInputVerdi('')
  }

  const haandterTasteTrykk = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      haandterSend()
    }
  }

  return (
    <div className="input-seksjon">
      <input
        type="text"
        value={inputVerdi}
        onChange={(e) => settInputVerdi(e.target.value)}
        onKeyPress={haandterTasteTrykk}
        placeholder="Hva skal gjores?"
        className="oppgave-input"
      />
      <button onClick={haandterSend} className="legg-til-knapp">
        Legg til
      </button>
    </div>
  )
}
