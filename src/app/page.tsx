import { getTranslations } from "next-intl/server";
import { Header, Footer } from "../components";
import {
  AboutMeSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ResumeSection,
  ContactSection,
} from "../sections";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-md focus:shadow-lg"
      >
        {t("About me.Title")}
      </a>
      <Header />
      <div className="relative min-h-screen pt-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <main id="main-content">
          <h1 className="sr-only">Marcus Natrielli - Engenheiro de Software</h1>
          <AboutMeSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ResumeSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
