import Head from 'next/head'
import { Button, Header, Card, Container, Footer, Gallery } from '../src/components/'

import cardsData from '../src/data/cards.json'
import projectsData from '../src/data/projects.json'
import navbarItems from '../src/data/navbar.json'
import skillsData from '../src/data/skills.json'

import globalStyle from '../src/styles/globalStyle.js'

const [aboutMe, projects, skills, resume, contact] = cardsData;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Marcus Natrielli </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <Header title="Marcus Natrielli" items={navbarItems}/>

      <main>
        <Container>
          <Card {...aboutMe} />
        </Container>

        <Container>
          <Card {...projects} >
            <Gallery itemKey="projects" itemSize="9em" items={projectsData} />
          </Card>
        </Container>
        
        <Container>
          <Card {...skills} >
            <Gallery itemKey="skills" itemSize="15%" items={skillsData} />
          </Card>
        </Container>

        <Container>
          <Card {...resume}>
            <Button download={true} downloadFile="/Currículo_-_Marcus_Natrielli.pdf">Baixar currículo (PDF)</Button>
          </Card>
        </Container>

        <Container>
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
