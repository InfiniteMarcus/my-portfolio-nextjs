import Head from 'next/head'
import { Button, Card, Header, Image, Container, Footer, Gallery } from '../src/components/'

import cardsData from '../src/data/cards.json'
import projectsData from '../src/data/projects.json'
import navbarItems from '../src/data/navbar.json'
import skillsData from '../src/data/skills.json'
import techsData from '../src/data/techs.json'

import globalStyle from '../src/styles/globalStyle.js'

const [aboutMe, projects, techs, skills, resume, contact] = cardsData;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Marcus Natrielli </title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Portfólio de Marcus Natrielli"></meta>
      </Head>

      <Header title="Marcus Natrielli" items={navbarItems}/>

      <main>
        <Container id={aboutMe.id}>
          <Image alt="Foto de pessoa sorrindo" src="/images/photo.webp"/>
          <Card {...aboutMe} />
        </Container>

        <Container id={projects.id}>
          <Card {...projects} >
            <Gallery itemKey="projects" itemSize="9em" items={projectsData} />
          </Card>
        </Container>

        <Container id={techs.id}>
          <Card {...techs} >
            <Gallery itemKey="skills" itemSize="15%" items={techsData} />
          </Card>
        </Container>
        
        <Container id={skills.id}>
          <Card {...skills} >
            <Gallery itemKey="skills" itemSize="15%" items={skillsData} />
          </Card>
        </Container>

        <Container id={resume.id}>
          <Card {...resume}>
            <Button download={true} downloadFile="/Currículo_-_Marcus_Natrielli.pdf">Baixar currículo (PDF)</Button>
          </Card>
        </Container>

        <Container id={contact.id}>
          <Card {...contact} />
        </Container>
      </main>

      <Footer>
        Feito com  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> por <a href="https://github.com/InfiniteMarcus" target="_blank" rel="noopener noreferrer">@infinitemarcus</a>
      </Footer>
      <style jsx global>
        { globalStyle }
      </style>
    </div>
  )
}
