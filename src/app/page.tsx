"use client";

import { useTranslations } from "next-intl";

import {
  Button,
  Card,
  Icon,
  Image,
  Container,
  Gallery,
  Header,
  Footer,
  PaginatedCard,
  Typography,
} from "../components";

import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";
import contactData from "../data/contact.json";

import worksData from "../data/experience/work.json";
import coursesData from "../data/experience/courses.json";
import talksData from "../data/experience/talks.json";
import eventsData from "../data/experience/events.json";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Container id="aboutMe">
            <Image alt={t("Images alt.Photo")} src="/images/photo.webp" />
            <Card
              title={t("About me.Title")}
              description={[
                t("About me.Paragraph1"),
                t("About me.Paragraph2"),
                t("About me.Paragraph3"),
              ]}
            />
          </Container>

          <Container id="experience">
            <PaginatedCard
              breakValue="break-word"
              title={t("Experience.Title")}
              pages={[
                {
                  description: [t("Experience.Works.Description")],
                  component: (
                    <Gallery
                      itemKey="experience"
                      itemSize="12em"
                      items={worksData.map((workURL, index) => {
                        return {
                          title: t(`Experience.Works.Items.${index + 1}.Title`),
                          description: t(
                            `Experience.Works.Items.${index + 1}.Description`,
                          ),
                          url: workURL,
                        };
                      })}
                      key="paginated-element-1"
                    />
                  ),
                },
                {
                  description: [t("Experience.Talks.Description")],
                  component: (
                    <Gallery
                      itemKey="experience"
                      itemSize="9em"
                      items={talksData.map((talkURL, index) => {
                        return {
                          title: t(`Experience.Talks.Items.${index + 1}.Title`),
                          description: t(
                            `Experience.Talks.Items.${index + 1}.Description`,
                          ),
                          url: talkURL,
                        };
                      })}
                      key="paginated-element-1"
                    />
                  ),
                },
                {
                  description: [t("Experience.Courses.Description")],
                  component: (
                    <Gallery
                      itemKey="experience"
                      itemSize="8em"
                      items={coursesData.map((courseURL, index) => {
                        return {
                          title: t(
                            `Experience.Courses.Items.${index + 1}.Title`,
                          ),
                          description: t(
                            `Experience.Courses.Items.${index + 1}.Description`,
                          ),
                          url: courseURL,
                        };
                      })}
                      key="paginated-element-1"
                    />
                  ),
                },
                {
                  description: [t("Experience.Events.Description")],
                  component: (
                    <Gallery
                      itemKey="experience"
                      itemSize="9em"
                      items={eventsData.map((eventURL, index) => {
                        return {
                          title: t(
                            `Experience.Events.Items.${index + 1}.Title`,
                          ),
                          description: t(
                            `Experience.Events.Items.${index + 1}.Description`,
                          ),
                          url: eventURL,
                        };
                      })}
                      key="paginated-element-1"
                    />
                  ),
                },
              ]}
            />
          </Container>

          <Container id="projects">
            <Card
              breakValue="break-word"
              title={t("Projects.Title")}
              description={[t("Projects.Paragraph")]}
            >
              <Gallery
                itemKey="projects"
                itemSize="9em"
                items={projectsData.map((project, index) => {
                  return {
                    title: t(`Projects.Items.${index + 1}.Title`),
                    description: t(`Projects.Items.${index + 1}.Description`),
                    url: project.url,
                    footer: project.footer,
                  };
                })}
              />
            </Card>
          </Container>

          <Container id="skills">
            <Card
              title={t("Skills.Title")}
              description={[t("Skills.Paragraph")]}
              containerHeight={450}
            >
              <Gallery
                itemKey="skills"
                itemSize="15%"
                items={skillsData.map((skill) => {
                  return {
                    description: skill,
                  };
                })}
              />
            </Card>
          </Container>

          <Container id="resume">
            <Typography text={t("Resume")} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                fontSize: "1.5rem",
              }}
            >
              <Button download downloadFile="/Curriculo_Marcus_Natrielli.pdf">
                {t("Download in PDF")} ({t("Portuguese")})
              </Button>
              <Button download downloadFile="/Resume_Marcus_Natrielli.pdf">
                {t("Download in PDF")} ({t("English")})
              </Button>
            </div>
          </Container>

          <Container id="contact">
            <Typography text={t("Contact")} />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {contactData.map((contact, index) => (
                <Icon
                  href={contact.href}
                  src={contact.src}
                  alt={contact.alt}
                  key={`contact-${index}`}
                />
              ))}
            </div>

            <div>
              <p style={{ textAlign: "center", fontSize: 27 }}>
                Discord: <span style={{ fontWeight: 600 }}>infinitemarcus</span>
              </p>
            </div>
            <a
              style={{ fontSize: "21px" }}
              target="_blank"
              href="https://icons8.com/"
            >
              {t("Icons by")} Icons8
            </a>
          </Container>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
