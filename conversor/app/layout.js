import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Conversor Universal',
  description: 'Aplicativo de conversão de moedas, temperaturas e medidas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}