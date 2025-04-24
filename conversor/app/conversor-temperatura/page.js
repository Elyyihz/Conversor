'use client'
import { useState } from 'react'

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const handleCelsiusChange = (e) => {
    const value = e.target.value
    setCelsius(value)
    
    if (value === '') {
      setFahrenheit('')
      return
    }
    
    const valorCelsius = parseFloat(value)
    if (!isNaN(valorCelsius)) {
      setFahrenheit(((valorCelsius * 9/5) + 32).toFixed(2))
    }
  }

  const handleFahrenheitChange = (e) => {
    const value = e.target.value
    setFahrenheit(value)
    
    if (value === '') {
      setCelsius('')
      return
    }
    
    const valorFahrenheit = parseFloat(value)
    if (!isNaN(valorFahrenheit)) {
      setCelsius(((valorFahrenheit - 32) * 5/9).toFixed(2))
    }
  }

  return (
    <div className="converter-container">
      <div className="converter-header">
        <h1 className="text-xl font-bold text-center">Conversor de Temperatura</h1>
      </div>
      
      <div className="converter-body">
        <div className="converter-group">
          <label className="converter-label" htmlFor="celsius">
            Celsius (°C)
          </label>
          <input
            id="celsius"
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="0,00"
          />
        </div>
        
        <div className="converter-group">
          <label className="converter-label" htmlFor="fahrenheit">
            Fahrenheit (°F)
          </label>
          <input
            id="fahrenheit"
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="0,00"
          />
        </div>
      </div>
    </div>
  )
}