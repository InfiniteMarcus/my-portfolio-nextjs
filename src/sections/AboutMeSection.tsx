import { getTranslations } from "next-intl/server";
import { Container, Image, Card } from "../components";

export const AboutMeSection = async () => {
  const t = await getTranslations("Home");

  return (
    <Container id="aboutMe">
      <Image alt={t("Images alt.Photo")} src="/images/photo.webp" />
      <Card
        title={t("About me.Title")}
        description={[t("About me.Paragraph1"), t("About me.Paragraph2")]}
      />
    </Container>
  );
};
