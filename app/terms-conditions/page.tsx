"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PolicyComponent from "@/components/policycomponent";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function TermsConditions() {
  const { t } = useAppTranslation();

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px]" />

      <PolicyComponent
        title={t("terms.title")}
        date={t("terms.date")}
        description={t("terms.description")}
        content={t("terms.content")}
      />

      <Footer />
    </div>
  );
}