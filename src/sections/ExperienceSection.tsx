import { getTranslations, getLocale } from "next-intl/server";
import { Container, PaginatedCard, Gallery } from "../components";
import { works, talks, courses, events, Locale } from "../data/resume";

export const ExperienceSection = async () => {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as Locale;

  return (
    <Container id="experience">
      <PaginatedCard
        breakValue="break-word"
        title={t("Experience.Title")}
        pages={[
          {
            description: [t("Experience.Works.Description")],
            component: (
              <Gallery
                itemKey="experience-works"
                itemSize="12em"
                items={works.map((work) => ({
                  title: work.title[locale],
                  description: work.description[locale],
                  url: work.url,
                }))}
              />
            ),
          },
          {
            description: [t("Experience.Talks.Description")],
            component: (
              <Gallery
                itemKey="experience-talks"
                itemSize="9em"
                items={talks.map((talk) => ({
                  title: talk.title[locale],
                  description: talk.description[locale],
                  url: talk.url,
                }))}
              />
            ),
          },
          {
            description: [t("Experience.Courses.Description")],
            component: (
              <Gallery
                itemKey="experience-courses"
                itemSize="8em"
                items={courses.map((course) => ({
                  title: course.title[locale],
                  description: course.description[locale],
                  url: course.url,
                }))}
              />
            ),
          },
          {
            description: [t("Experience.Events.Description")],
            component: (
              <Gallery
                itemKey="experience-events"
                itemSize="9em"
                items={events.map((event) => ({
                  title: event.title[locale],
                  description: event.description[locale],
                  url: event.url,
                }))}
              />
            ),
          },
        ]}
      />
    </Container>
  );
};
