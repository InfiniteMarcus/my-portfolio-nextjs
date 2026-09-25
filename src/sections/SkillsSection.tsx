import { getTranslations } from "next-intl/server";
import { Container, Card, Gallery } from "../components";
import { skills } from "../data/resume";

export const SkillsSection = async () => {
  const t = await getTranslations("Home");

  return (
    <Container id="skills">
      <Card
        title={t("Skills.Title")}
        description={[t("Skills.Paragraph")]}
        containerHeight={450}
      >
        <Gallery
          itemKey="skills"
          itemSize="15%"
          items={skills.map((skill) => ({
            description: skill.name,
          }))}
        />
      </Card>
    </Container>
  );
};
