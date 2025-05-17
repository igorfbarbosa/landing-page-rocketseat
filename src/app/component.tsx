'use client'

import { useEffect } from 'react'

export function ErrorComponent() {
  useEffect(() => {
    throw new Error('componente lançando um erro')
  })

  return <h2>Erro component</h2>
}
