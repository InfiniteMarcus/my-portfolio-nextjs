import Head from 'next/head'
import { Button, Card, Checkbox, Header, Icon, Image, Container, Footer, Gallery } from '../src/components/'

import cardsData from '../src/data/cards.json'
import projectsData from '../src/data/projects.json'
import navbarItems from '../src/data/navbar.json'
import experienceData from '../src/data/experience.json'
import skillsData from '../src/data/skills.json'

import globalStyle from '../src/styles/globalStyle.js'

const [aboutMe, projects, skills, experience, roadmap, resume, contact] = cardsData;
const pageTitle = "Marcus Natrielli";
const pageDescription = "Site portfólio profissional de Marcus Vinícius Natrielli Garcia desenvolvido com React.js, Next.js, HTML e CSS";
const pageImageURL = "https://marcusnatrielli.com/images/photo.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="images/favicon.ico" />

        <meta property="og:url" content="https://marcusnatrielli.com" />
        <meta property="og:type" content="website"/>
        <meta name="title" property="og:title" content={pageTitle}/>
        <meta name="description" property="og:description" content={pageDescription}/>
        <meta name="image" property="og:image" content={pageImageURL}/>
    
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="marcusnatrielli.com"/>
        <meta property="twitter:url" content="https://marcusnatrielli.com/"/>
        <meta name="twitter:title" content={pageTitle}/>
        <meta name="twitter:description" content={pageDescription}/>
        <meta name="twitter:image" content={pageImageURL}/>
    
        <meta name="author" content="Marcus Natrielli"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>{pageTitle}</title>
      </Head>

      <Header 
        image="logo.png" width="90px" height="75px" alt="Logo vermelha com com o nome Marcus Natrielli em branco"
        items={navbarItems}
      />

      <main>
        <Container id={aboutMe.id}>
          <Image alt="Foto de pessoa sorrindo" src="/images/photo.webp" />
          <Card {...aboutMe} />
        </Container>

        <Container id={skills.id}>
          <Card {...skills} >
            <Gallery itemKey="skills" itemSize="15%" items={skillsData} />
          </Card>
        </Container>

        <Container id={projects.id}>
          <Card breakValue='break-word' {...projects} >
            <Gallery itemKey="projects" itemSize="9em" items={projectsData} />
          </Card>
        </Container>

        <Container id={experience.id}>
          <Card breakValue='break-word' {...experience} >
            <Gallery itemKey="experience" itemSize="9em" items={experienceData} />
          </Card>
        </Container>

        <Container id={roadmap.id}>
          <Card {...roadmap} >
            <div>
              <Checkbox checked="true" text="Aprender TypeScript"/>
              <Checkbox checked="true" text="Portfólio com React.js"/>
              <Checkbox text="Site do Projeto Hanna"/>
              <Checkbox text="Aprender mais sobre Docker"/>
            </div>
          </Card>
        </Container>

        <Container id={resume.id}>
          <Card {...resume}>
              <Button download={true} downloadFile="/Currículo_-_Marcus_Natrielli.pdf">Baixar em PDF - Português</Button>
              <Button download={true} downloadFile="/Resume - Marcus Vinícius Natrielli Garcia.pdf">Baixar em PDF - Inglês</Button>
          </Card>
        </Container>

        <Container id={contact.id}>
          <Card {...contact }>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <Icon href="https://www.facebook.com/marcus.natrielli/" src="https://img.icons8.com/color/96/000000/facebook-circled--v1.png" alt="Ícone do Facebook" />
              <Icon href="https://twitter.com/MarcusNatrielli" src="https://img.icons8.com/color/96/000000/twitter-circled--v1.png" alt="Ícone do Twitter" />
              <Icon href="https://www.linkedin.com/in/marcus-natrielli/" src="https://img.icons8.com/color/96/000000/linkedin-circled--v1.png" alt="Ícone do LinkedIn" />
              <Icon href="https://www.youtube.com/channel/UCZNG7XNAtaVwst0BTzxiHCQ" src="https://img.icons8.com/color/96/000000/youtube-squared.png" alt="Ícone do Youtube" />
              <Icon href="https://www.instagram.com/marcusnatrielli/" src="https://img.icons8.com/fluency/96/000000/instagram-new.png" alt="Ícone do Instagram" />
              <Icon href="https://github.com/InfiniteMarcus" src="https://img.icons8.com/color/96/000000/github.png" alt="Ícone do GitHub" />
              <Icon href="mailto:marcus.natrielli@outlook.com" src="https://img.icons8.com/fluency/96/000000/email-open.png" alt="Ícone de E-mail" />
            </div>
          </Card>
          <a style={{fontSize: '21px'}} target="_blank" href="https://icons8.com/">Ícones por Icons8</a>
        </Container>
      </main>

      <Footer>
        Feito com  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> por <a href="https://github.com/InfiniteMarcus" target="_blank" rel="noopener noreferrer">@infinitemarcus</a>
      </Footer>
      <style jsx global>
        {globalStyle}
      </style>
    </div>
  )
}
