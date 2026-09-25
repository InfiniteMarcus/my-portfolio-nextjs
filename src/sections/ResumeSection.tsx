import { getTranslations } from "next-intl/server";
import { Container, Typography, Button } from "../components";

export const ResumeSection = async () => {
  const t = await getTranslations("Home");

  return (
    <Container id="resume">
      <Typography text={t("Resume")} />
      <div className="flex flex-col gap-5 text-xl sm:text-2xl w-full max-w-md mx-auto">
        <Button
          download
          downloadFile="/Curriculo_Marcus_Natrielli.pdf"
          className="w-full"
        >
          {t("Download in PDF")} ({t("Portuguese")})
        </Button>
        <Button
          download
          downloadFile="/Resume_Marcus_Natrielli.pdf"
          className="w-full"
        >
          {t("Download in PDF")} ({t("English")})
        </Button>
      </div>
    </Container>
  );
};
