"use client";

import { useAppTranslation } from "@/lib/useAppTranslation";

export default function DescriptionTab({ description }: { description: string | null }) {
  const { t } = useAppTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-5 relative space-y-2">
      <h2 className="text-2xl font-semibold mb-2">
        {t("descriptionTab.title")}
      </h2>
      {description ? (
        <div dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <p>{t("descriptionTab.empty")}</p>
      )}
    </div>
  );
}
