import { localeLabels } from "@/features/language/utils/i18n";

export type Language = (typeof localeLabels)[keyof typeof localeLabels];
