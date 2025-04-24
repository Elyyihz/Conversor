import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao Conversor Universal</h1>
      </div>
      
      <div className="feature-cards">
        {/* Card Moeda */}
        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                <path d="M12 18V6"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Conversor de Moedas</h2>
          </div>
          <div className="feature-card-body">
            <p className="mb-4">Converta entre dólar americano e real brasileiro com a cotação atualizada.</p>
            <Link href="/conversor-moeda" className="btn btn-primary w-full">
              Acessar
            </Link>
          </div>
        </div>

        {/* Card Temperatura */}
        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Conversor de Temperatura</h2>
          </div>
          <div className="feature-card-body">
            <p className="mb-4">Converta entre Celsius e Fahrenheit de forma rápida e precisa.</p>
            <Link href="/conversor-temperatura" className="btn btn-primary w-full">
              Acessar
            </Link>
          </div>
        </div>

        {/* Card Medidas */}
        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18 7V3"></path>
                <path d="M15 7V3"></path>
                <path d="M12 7V3"></path>
                <path d="M9 7V3"></path>
                <path d="M6 7V3"></path>
                <rect x="3" y="15" width="18" height="3"></rect>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Conversor de Medidas</h2>
          </div>
          <div className="feature-card-body">
            <p className="mb-4">Converta entre metros, pés e polegadas para suas necessidades.</p>
            <Link href="/conversor-medidas" className="btn btn-primary w-full">
              Acessar
            </Link>
          </div>
        </div>
      </div>

      <div className="card mt-8">
        <h2 className="text-2xl font-semibold mb-4">Como usar o Conversor Universal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Conversão em tempo real</h3>
            <p>Todos os conversores atualizam automaticamente enquanto você digita, sem necessidade de clicar em botões.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Interface intuitiva</h3>
            <p>Design limpo e focado na usabilidade para que você encontre o que precisa rapidamente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}