'use client'
import { useState } from 'react'

export default function ConversorMedidas() {
  const [metros, setMetros] = useState('')
  const [pes, setPes] = useState('')
  const [polegadas, setPolegadas] = useState('')

  const handleMetrosChange = (e) => {
    const value = e.target.value
    setMetros(value)
    
    if (value === '') {
      setPes('')
      setPolegadas('')
      return
    }
    
    const valorMetros = parseFloat(value)
    if (!isNaN(valorMetros)) {
      const pesValue = valorMetros * 3.28084
      setPes(pesValue.toFixed(2))
      setPolegadas((pesValue * 12).toFixed(2))
    }
  }

  const handlePesChange = (e) => {
    const value = e.target.value
    setPes(value)
    
    if (value === '') {
      setMetros('')
      setPolegadas('')
      return
    }
    
    const valorPes = parseFloat(value)
    if (!isNaN(valorPes)) {
      const metrosValue = valorPes / 3.28084
      setMetros(metrosValue.toFixed(2))
      setPolegadas((valorPes * 12).toFixed(2))
    }
  }

  const handlePolegadasChange = (e) => {
    const value = e.target.value
    setPolegadas(value)
    
    if (value === '') {
      setMetros('')
      setPes('')
      return
    }
    
    const valorPolegadas = parseFloat(value)
    if (!isNaN(valorPolegadas)) {
      const pesValue = valorPolegadas / 12
      setPes(pesValue.toFixed(2))
      setMetros((pesValue / 3.28084).toFixed(2))
    }
  }

  return (
    <div className="converter-container">
      <div className="converter-header">
        <h1 className="text-xl font-bold text-center">Conversor de Medidas</h1>
      </div>
      
      <div className="converter-body">
        <div className="converter-group">
          <label className="converter-label" htmlFor="metros">
            Metros (m)
          </label>
          <input
            id="metros"
            type="number"
            value={metros}
            onChange={handleMetrosChange}
            placeholder="0,00"
          />
        </div>
        
        <div className="converter-group">
          <label className="converter-label" htmlFor="pes">
            Pés (ft)
          </label>
          <input
            id="pes"
            type="number"
            value={pes}
            onChange={handlePesChange}
            placeholder="0,00"
          />
        </div>
        
        <div className="converter-group">
          <label className="converter-label" htmlFor="polegadas">
            Polegadas (in)
          </label>
          <input
            id="polegadas"
            type="number"
            value={polegadas}
            onChange={handlePolegadasChange}
            placeholder="0,00"
          />
        </div>
      </div>
    </div>
  )
}