'use client'
import { useState } from 'react'

export default function ConversorMoeda() {
  const [real, setReal] = useState('')
  const [dolar, setDolar] = useState('')
  const cotacaoDolar = 6.16

  const handleRealChange = (e) => {
    const value = e.target.value
    setReal(value)
    
    if (value === '') {
      setDolar('')
      return
    }
    
    const valorReal = parseFloat(value)
    if (!isNaN(valorReal)) {
      setDolar((valorReal / cotacaoDolar).toFixed(2))
    }
  }

  const handleDolarChange = (e) => {
    const value = e.target.value
    setDolar(value)
    
    if (value === '') {
      setReal('')
      return
    }
    
    const valorDolar = parseFloat(value)
    if (!isNaN(valorDolar)) {
      setReal((valorDolar * cotacaoDolar).toFixed(2))
    }
  }

  return (
    <div className="converter-container">
      <div className="converter-header">
        <h1 className="text-xl font-bold text-center">Conversor de Moedas</h1>
        <p className="text-center text-sm opacity-90">
          Cotação do dólar em 14/04/2025: 1 USD = {cotacaoDolar} BRL
        </p>
      </div>
      
      <div className="converter-body">
        <div className="converter-group">
          <label className="converter-label" htmlFor="real">
            Real Brasileiro (BRL)
          </label>
          <input
            id="dolar"
            type="number"
            value={dolar}
            onChange={handleDolarChange}
            placeholder="0,00"
          />
        </div>
        
        <div className="converter-group">
          <label className="converter-label" htmlFor="dolar">
            Dólar Americano (USD)
          </label>
          <input
            id="real"
            type="number"
            value={real}
            onChange={handleRealChange}
            placeholder="0,00"
          />
        </div>
      </div>
    </div>
  )
}