import { getTranslations, getLocale } from "next-intl/server";
import { Container, Card, Gallery } from "../components";
import { projects, Locale } from "../data/resume";

export const ProjectsSection = async () => {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as Locale;

  return (
    <Container id="projects">
      <Card
        breakValue="break-word"
        title={t("Projects.Title")}
        description={[t("Projects.Paragraph")]}
      >
        <Gallery
          itemKey="projects"
          itemSize="9em"
          items={projects.map((project) => ({
            title: project.title[locale],
            description: project.description[locale],
            url: project.url,
            footer: project.footer,
          }))}
        />
      </Card>
    </Container>
  );
};
