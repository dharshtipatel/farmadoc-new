"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PolicyComponent from "@/components/policycomponent";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function PrivacyPolicy() {
  const { t } = useAppTranslation();

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px]" />

      <PolicyComponent
        title={t("privacy.title")}
        date={t("privacy.date")}
        description={t("privacy.description")}
        content={t("privacy.content")}
      />

      <Footer />
    </div>
  );
}