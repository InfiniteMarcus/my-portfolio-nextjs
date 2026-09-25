import { getTranslations } from "next-intl/server";
import { Container, Typography, Icon } from "../components";
import { contacts } from "../data/resume";

export const ContactSection = async () => {
  const t = await getTranslations("Home");

  return (
    <Container id="contact">
      <Typography text={t("Contact")} />

      <div className="flex flex-wrap gap-6 sm:gap-7 mx-auto justify-center max-w-[560px]">
        {contacts.map((contact, index) => (
          <Icon
            href={contact.href}
            src={contact.src}
            alt={contact.alt}
            key={`contact-${index}`}
          />
        ))}
      </div>

      <div>
        <p className="text-center text-2xl sm:text-3xl text-white/95">
          Discord:{" "}
          <span className="font-semibold text-white">infinitemarcus</span>
        </p>
      </div>
      <a
        className="text-lg sm:text-xl text-white/80 hover:text-brand-primary underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        href="https://icons8.com/"
      >
        {t("Icons by")} Icons8
      </a>
    </Container>
  );
};
