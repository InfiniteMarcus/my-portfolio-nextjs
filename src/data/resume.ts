export type Locale = "pt-BR" | "en-US";
export type LocalizedString = Record<Locale, string>;

export interface Project {
  title: LocalizedString;
  description: LocalizedString;
  url: string;
  footer: string;
}

export interface Skill {
  name: string;
}

export interface ExperienceItem {
  title: LocalizedString;
  description: LocalizedString;
  url: string;
}

export interface Contact {
  href: string;
  src: string;
  alt: string;
}

export const projects: Project[] = [
  {
    url: "https://github.com/Projeto-Hanna/Hanna-Twitch-Bot",
    footer: "TypeScript, JavaScript",
    title: {
      "pt-BR": "Bot da Hanna para Twitch",
      "en-US": "Hanna Bot for Twitch",
    },
    description: {
      "pt-BR":
        "Bot para Twitch a ser utilizado no canal do Projeto Hanna, possibilitando que as pessoas que vejam as transmissões ao vivo tenham novas formas de interagir e conhecer a comunidade",
      "en-US":
        "Bot for Twitch to be used on the Projeto Hanna channel, allowing people who watch live broadcasts to have new ways of interacting and getting to know the community",
    },
  },
  {
    url: "https://www.ceneinfluences.com.br/",
    footer: "TypeScript, React.js, Next.js",
    title: {
      "pt-BR": "Site do CENE Influences",
      "en-US": "CENE Influences website",
    },
    description: {
      "pt-BR":
        "Site do ministério de jovens da igreja evangélica CENE (Comunidade Evangélica Nação Eleita)",
      "en-US":
        "Website of the youth ministry of the evangelical church CENE (Comunidade Evangélica Nação Eleita)",
    },
  },
  {
    url: "https://github.com/InfiniteMarcus/Arduino-Discord-Integration",
    footer: "JavaScript, Arduino, Wiring/C++, Discord.js",
    title: {
      "pt-BR": "Integração Arduino-Discord",
      "en-US": "Discord-Arduino integration",
    },
    description: {
      "pt-BR":
        "Prova de conceito de integração entre a plataforma do Discord e placas Arduino (ex: Arduino UNO), permitindo a comunicação de via dupla entre essas partes",
      "en-US":
        "Proof of concept integration between the Discord platform and Arduino boards (e.g. Arduino UNO), allowing two-way communication between these parties",
    },
  },
  {
    url: "https://github.com/hackoonspace/site_v2",
    footer: "TypeScript, React.js, Next.js",
    title: {
      "pt-BR": "Site do HackoonSpace - V2.0",
      "en-US": "HackoonSpace website - V2.0",
    },
    description: {
      "pt-BR":
        "Site de entidade estudantil utilizado para apresentar informações, links, inscrições e projetos de formadinâmica e responsiva",
      "en-US":
        "Student entity website used to present information, links, registrations and projects in a dynamic and responsive way",
    },
  },
  {
    url: "https://www.projetohanna.com/",
    footer: "TypeScript, React.js, Next.js",
    title: {
      "pt-BR": "Site do Projeto Hanna",
      "en-US": "Projeto Hanna website",
    },
    description: {
      "pt-BR":
        "Site para apresentação de informações, novidades, links e atividades da comunidade Projeto Hanna",
      "en-US":
        "Website for presenting information, news, links and activities from the Projeto Hanna community",
    },
  },
  {
    url: "https://linktr.ee/Projeto_Hanna",
    footer: "TypeScript, Node.js, Discord.js, Python, PostgreSQL",
    title: {
      "pt-BR": "Projeto Hanna",
      "en-US": "Projeto Hanna",
    },
    description: {
      "pt-BR":
        "Uma assistente virtual (e personagem original minha!) que nasceu como bot para Discord. Aos poucos, está se expandindo para outros meios, como aplicações web e mobile e lançamento de produtos físicos",
      "en-US":
        "A virtual assistant (and my original character!) who was born as a bot for Discord. Little by little, it is expanding to other means, such as web and mobile applications and the launch of physical products",
    },
  },
  {
    url: "https://github.com/hackoonspace/Qwerty-bot",
    footer: "Node.js, Discord.js",
    title: {
      "pt-BR": "Bot do Qwerty",
      "en-US": "Qwerty bot",
    },
    description: {
      "pt-BR":
        "Bot para Discord baseado no mascote da comunidade estudantil HackoonSpace. Possui funções de diversos tipos para facilitar a vida online dos participantes",
      "en-US":
        "Bot for Discord based on the HackoonSpace student community mascot. It has different types of functions to make online life easier for participants",
    },
  },
  {
    url: "https://github.com/hackoonspace/Hacka-Newsletter-v2",
    footer: "React.js, Node.js, TypeScript, HTML, CSS",
    title: {
      "pt-BR": "Hacka Newsletter",
      "en-US": "Hacka Newsletter",
    },
    description: {
      "pt-BR":
        "Site para cadastro em newsletter da comunidade estudantil HackoonSpace. Os e-mails são registrados na plataforma Mailchimp, por meio de uma API",
      "en-US":
        "Website for registering for the HackoonSpace student community newsletter. Emails are registered on the Mailchimp platform, through an API",
    },
  },
  {
    url: "https://github.com/InfiniteMarcus/Lyfer-Education",
    footer: "Godot Engine, GDScript",
    title: {
      "pt-BR": "Lyfer Education",
      "en-US": "Lyfer Education",
    },
    description: {
      "pt-BR":
        "Aplicação feita durante a 2º edição do Hackathon - CCR, organizado pela Shawee. Um jogo para ajudar jovens brasileiros a reforçarem seu interesse pelo aprendizado e descobrirem novos caminhos para o futuro",
      "en-US":
        "Application made during the 2nd edition of Hackathon - CCR, organized by Shawee. A game to help young Brazilians reinforce their interest in learning and discover new paths for the future",
    },
  },
  {
    url: "https://github.com/InfiniteMarcus/my-portfolio-nextjs",
    footer: "React.js, Next.js, HTML, CSS",
    title: {
      "pt-BR": "Portfólio com Next.js",
      "en-US": "Portfolio with Next.js",
    },
    description: {
      "pt-BR":
        "Este próprio site que você está acessando! Feito com React.js e Next.js, meu site pessoal para que mais pessoas possam conhecer eu e meu trabalho :D",
      "en-US":
        "This very website you are accessing! Made with React.js and Next.js, my personal website so that more people can get to know me and my work :D",
    },
  },
  {
    url: "https://github.com/InfiniteMarcus/Compilador-Java",
    footer: "Java",
    title: {
      "pt-BR": "Compilador Java",
      "en-US": "Java Compiler",
    },
    description: {
      "pt-BR":
        "Projeto desenvolvido na disciplina de Compiladores na faculdade. O programa serve como um compilador de uma linguagem fictícia K para a linguagem C, passando pelas fases de análise sintática, léxica e semântica",
      "en-US":
        "Project developed in the Compilers discipline at college. The program serves as a compiler from a fictional language K to the C language, going through the syntactic, lexical and semantic analysis phases",
    },
  },
];

export const skills: Skill[] = [
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Discord.js" },
  { name: "Express.js" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "PostgreSQL" },
  { name: "AWS" },
  { name: "Serverless" },
  { name: "DynamoDB" },
  { name: "Git" },
  { name: "Front end" },
  { name: "Godot" },
  { name: "Arduino" },
];

export const works: ExperienceItem[] = [
  {
    url: "https://mathex.com.br/",
    title: {
      "pt-BR": "Desenvolvedor FullStack - Mathex",
      "en-US": "FullStack Software Engineer - Mathex",
    },
    description: {
      "pt-BR": "2026/01 - atualmente",
      "en-US": "2026/01 - currently",
    },
  },
  {
    url: "https://shipeezi.com/",
    title: {
      "pt-BR": "Desenvolvedor FullStack - Shipeezi",
      "en-US": "FullStack Software Engineer - Shipeezi",
    },
    description: {
      "pt-BR": "2025/12 - 2026/01",
      "en-US": "2025/12 - 2026/01",
    },
  },
  {
    url: "https://gamersafer.com/",
    title: {
      "pt-BR": "Desenvolvedor Backend Pleno - GamerSafer",
      "en-US": "Backend Developer - GamerSafer",
    },
    description: {
      "pt-BR": "2023/01 - 2025/11",
      "en-US": "2023/01 - 2025/11",
    },
  },
  {
    url: "https://www.aionsolution.com.br/",
    title: {
      "pt-BR": "Estagiário - Aion Solution",
      "en-US": "Intern - Aion Solution",
    },
    description: {
      "pt-BR": "2022/06 - 2023/01",
      "en-US": "2022/06 - 2023/01",
    },
  },
  {
    url: "https://aplikey.com.br/",
    title: {
      "pt-BR": "Freelancer - Aplikey+",
      "en-US": "Freelancer - Aplikey+",
    },
    description: {
      "pt-BR": "2021",
      "en-US": "2021",
    },
  },
];

export const courses: ExperienceItem[] = [
  {
    url: "",
    title: {
      "pt-BR": "Bacharelado em Ciência da Computação",
      "en-US": "Bachelor's Degree in Computer Science",
    },
    description: {
      "pt-BR": "UFSCar Sorocaba",
      "en-US": "UFSCar Sorocaba",
    },
  },
  {
    url: "https://drive.google.com/file/d/1SgAokned8BrAk5sCrBRywbeCCvrXKCEe/view?usp=sharing",
    title: {
      "pt-BR":
        "Computação em Nuvem e Inteligência Artificial em Microsoft Azure",
      "en-US": "Cloud Computing and Artificial Intelligence in Microsoft Azure",
    },
    description: {
      "pt-BR": "Minha Chance, FAT",
      "en-US": "Minha Chance, FAT",
    },
  },
  {
    url: "https://drive.google.com/file/d/1xcVb97lZybQBBDDZE-tqdwom0aSe86hp/view?usp=sharing",
    title: {
      "pt-BR": "Computação em Nuvem em Google Cloud Platform",
      "en-US": "Cloud Computing on Google Cloud Platform",
    },
    description: {
      "pt-BR": "Minha Chance, FAT",
      "en-US": "Minha Chance, FAT",
    },
  },
  {
    url: "https://drive.google.com/file/d/10uMc2MSSZMva7kxKDebH5J9-MFWfI-5q/view",
    title: {
      "pt-BR": "3ª turma do DIO Campus Expert",
      "en-US": "3rd class of DIO Campus Expert",
    },
    description: {
      "pt-BR": "",
      "en-US": "",
    },
  },
  {
    url: "https://drive.google.com/file/d/1Lduup3xndq6OG_uF5DbOyUUvbXEmdM_2/view",
    title: {
      "pt-BR": "2ª turma do DIO Campus Expert",
      "en-US": "2nd class of DIO Campus Expert",
    },
    description: {
      "pt-BR": "",
      "en-US": "",
    },
  },
];

export const talks: ExperienceItem[] = [
  {
    url: "https://www.instagram.com/p/DOdnyCFEaPg",
    title: {
      "pt-BR": "O porquê você não deve confiar no input dos seus usuários",
      "en-US": "Why you shouldn't trust your user input",
    },
    description: {
      "pt-BR": "17ª SeCoT - 2025",
      "en-US": "17th SeCoT - 2025",
    },
  },
  {
    url: "https://www.instagram.com/p/DBe8T6BxxY2",
    title: {
      "pt-BR": "O que fazer com sua graduação em TI além de programar?",
      "en-US": "What to do with your IT degree besides programming?",
    },
    description: {
      "pt-BR": "16ª SeCoT - 2024",
      "en-US": "16th SeCoT - 2024",
    },
  },
  {
    url: "https://www.youtube.com/live/alMZ5clxgBc?feature=shared&t=3597",
    title: {
      "pt-BR": "Automatize Tarefas com Bots",
      "en-US": "Automate Tasks with Bots",
    },
    description: {
      "pt-BR": "Campus Party Brasil 15",
      "en-US": "Campus Party Brasil 15",
    },
  },
  {
    url: "https://youtu.be/YjaGU6V8lEo?feature=shared",
    title: {
      "pt-BR": "Como iniciar em Cloud para desenvolvedores",
      "en-US": "How to get started in the Cloud for developers",
    },
    description: {
      "pt-BR": "RoadSec 2023",
      "en-US": "RoadSec 2023",
    },
  },
  {
    url: "https://drive.google.com/file/d/1Doy_s1p0ImcwUBnba4GJLLjMfGpbpFWu/view?usp=sharing",
    title: {
      "pt-BR": "Criando comunidades: um pequeno guia",
      "en-US": "Creating communities: a short guide",
    },
    description: {
      "pt-BR": "DIO Community Week 2022",
      "en-US": "DIO Community Week 2022",
    },
  },
  {
    url: "https://youtu.be/kTQDZ9UzvBQ?t=30505",
    title: {
      "pt-BR": "A importância das comunidades no desenvolvimento de carreiras",
      "en-US": "The importance of communities in career development",
    },
    description: {
      "pt-BR": "Campus Party Brasil 14",
      "en-US": "Campus Party Brasil 14",
    },
  },
  {
    url: "https://www.youtube.com/watch?v=Dv-1nGhgNew",
    title: {
      "pt-BR": "O que fazer ao encontrar falhas de segurança?",
      "en-US": "What to do when you find security flaws?",
    },
    description: {
      "pt-BR": "CPBR Digital Edition 2 - 2021",
      "en-US": "CPBR Digital Edition 2 - 2021",
    },
  },
  {
    url: "https://www.youtube.com/watch?v=Xnn1S3D9T7o",
    title: {
      "pt-BR": "Como se proteger na Web?",
      "en-US": "How to protect yourself on the Web?",
    },
    description: {
      "pt-BR": "12ª SeCoT - 2020",
      "en-US": "12th SeCoT - 2020",
    },
  },
];

export const events: ExperienceItem[] = [
  {
    url: "https://www.sympla.com.br/evento/hannaday-2024/2743421",
    title: {
      "pt-BR": "HannaDay 2024",
      "en-US": "HannaDay 2024",
    },
    description: {
      "pt-BR": "Projeto Hanna, UFSCar Sorocaba",
      "en-US": "Projeto Hanna, UFSCar Sorocaba",
    },
  },
  {
    url: "https://www.youtube.com/watch?v=QirPzv4L1qQ&list=PLSYx7h5HkQPq3FyaGPbNyQf6GGhgV0akj",
    title: {
      "pt-BR": "HackoonWeek 2021",
      "en-US": "HackoonWeek 2021",
    },
    description: {
      "pt-BR": "HackoonSpace, UFSCar Sorocaba",
      "en-US": "HackoonSpace, UFSCar Sorocaba",
    },
  },
  {
    url: "https://www.youtube.com/watch?v=AHOb6xl9p3M&list=PLSYx7h5HkQPoW5WIdgco9CC3nehcqJYD9",
    title: {
      "pt-BR": "HackoonWeek 2020",
      "en-US": "HackoonWeek 2020",
    },
    description: {
      "pt-BR": "HackoonSpace, UFSCar Sorocaba",
      "en-US": "HackoonSpace, UFSCar Sorocaba",
    },
  },
  {
    url: "https://secot.com.br/",
    title: {
      "pt-BR": "12ª edição da SeCoT (Semana da Computação e Tecnologia)",
      "en-US": "12th edition of SeCoT (Semana da Computação e Tecnologia)",
    },
    description: {
      "pt-BR": "UFSCar Sorocaba",
      "en-US": "UFSCar Sorocaba",
    },
  },
];

export const contacts: Contact[] = [
  {
    href: "https://www.facebook.com/marcus.natrielli/",
    src: "https://img.icons8.com/color/96/000000/facebook-circled--v1.png",
    alt: "Facebook",
  },
  {
    href: "https://twitter.com/MarcusNatrielli",
    src: "https://img.icons8.com/color/96/000000/twitter-circled--v1.png",
    alt: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/marcus-natrielli/",
    src: "https://img.icons8.com/color/96/000000/linkedin-circled--v1.png",
    alt: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/channel/UCZNG7XNAtaVwst0BTzxiHCQ",
    src: "https://img.icons8.com/color/96/000000/youtube-squared.png",
    alt: "Youtube",
  },
  {
    href: "https://www.instagram.com/marcusnatrielli/",
    src: "https://img.icons8.com/fluency/96/000000/instagram-new.png",
    alt: "Instagram",
  },
  {
    href: "https://github.com/InfiniteMarcus",
    src: "https://img.icons8.com/color/96/000000/github.png",
    alt: "GitHub",
  },
  {
    href: "mailto:marcus.natrielli@outlook.com",
    src: "https://img.icons8.com/fluency/96/000000/email-open.png",
    alt: "E-mail",
  },
];
