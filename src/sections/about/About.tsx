import Container from "../../components/Container/Container";

export default function About() {
  return (
    <Container section="about">
      <div className="flex flex-col gap-10">
        <h1 className="text-white text-4xl font-bold">
          Sou <span className="text-gray-600">Desenvolvedor Fullstack</span>
        </h1>
        <p className="[&_span]:text-[#3E3E41]">
          Sou um desenvolvedor <span>Full Stack</span> experiente com uma base
          sólida nos ecossistemas <span>Java</span> e <span>JavaScript</span>,
          especializado em <span>TypeScript</span>, <span>React</span>,{" "}
          <span>Angular</span>, <span>Node.js</span> e <span>Express.js</span>.
          Sou excelente na construção de aplicações web escaláveis e de alto
          desempenho e na implementação de lógicas de negócios complexas, com
          experiência em liderar equipes de desenvolvimento. Meu kit de
          ferramentas técnicas inclui experiência em bancos de dados como
          <span> MongoDB</span>, <span>PostgreSQL</span>, <span>OracleDB</span>{" "}
          e <span>MySQL</span>, conteinerização com <span>Docker</span> e
          plataformas de nuvem como <span>AWS</span> e <span>CloudFlare</span>.
          Como aprendo rápido e colaborador proativo, me dedico a criar soluções
          eficientes e centradas no usuário que resolvam desafios do mundo real.
          Vamos trabalhar juntos para dar vida às suas ideias!
        </p>
      </div>
    </Container>
  );
}
