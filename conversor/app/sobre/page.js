export default function Sobre() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Sobre o Desenvolvedor</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Olá! Meu nome é Elynne e sou uma desenvolvedora full-stack com experiência em 
          criação de aplicações web modernas e responsivas.
        </p>
        
        <p className="mb-4">
          Este aplicativo foi desenvolvido como parte do meu portfólio para demonstrar 
          habilidades com Next.js, React e Tailwind CSS. A ideia é criar uma ferramenta 
          útil que possa ajudar pessoas no seu dia a dia com conversões comuns.
        </p>
        
        <p className="mb-4">
          Tenho experiência com diversas tecnologias web, incluindo:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Front-end: React, Next.js</li>
          <li className="mb-2">Estilização: Tailwind CSS, CSS Modules</li>
          <li className="mb-2">Back-end: Node.js, Java, Python</li>
          <li className="mb-2">Bancos de dados: MongoDB, PostgreSQL</li>
        </ul>
        
        <p>
          Se você quiser entrar em contato ou ver mais dos meus projetos, 
          visite meu <a href="https://github.com/Elyyihz">GitHub</a>.
        </p>
      </div>
    </div>
  )
}