"use client";

import { localeLabels } from "@/config/i18n";
import { replaceLocale } from "@/lib/url";
import { MenuItem, TextField } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageSelect() {
  const t = useTranslations("Components.language-select");
  const locale = useLocale();

  const handleChange = (value: string) => {
    window.location.replace(replaceLocale(window.location.href, value));
  };

  return (
    <TextField
      value={locale}
      select
      label={t("language")}
      onChange={(e) => handleChange(e.target.value)}
    >
      {Object.entries(localeLabels).map(([key, label]) => (
        <MenuItem key={key} value={key}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
}
