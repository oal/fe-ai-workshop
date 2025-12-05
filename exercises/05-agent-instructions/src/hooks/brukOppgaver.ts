import { useState } from 'react'
import { Oppgave } from '../typer/oppgave'

export function brukOppgaver() {
  const [oppgaver, settOppgaver] = useState<Oppgave[]>([])

  const leggTilOppgave = (tekst: string) => {
    if (tekst.trim() === '') return

    const nyOppgave: Oppgave = {
      id: Date.now(),
      tekst: tekst,
      fullfort: false,
    }

    settOppgaver([...oppgaver, nyOppgave])
  }

  const byttFullfort = (id: number) => {
    settOppgaver(
      oppgaver.map((oppgave) =>
        oppgave.id === id ? { ...oppgave, fullfort: !oppgave.fullfort } : oppgave
      )
    )
  }

  const slettOppgave = (id: number) => {
    settOppgaver(oppgaver.filter((oppgave) => oppgave.id !== id))
  }

  const gjenstaendeAntall = oppgaver.filter((oppgave) => !oppgave.fullfort).length

  return {
    oppgaver,
    leggTilOppgave,
    byttFullfort,
    slettOppgave,
    gjenstaendeAntall,
  }
}
