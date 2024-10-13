import ButtonAppBar from "@/components/ButtonAppBar";
import LanguageSelect from "@/components/LanguageSelect";
import ToggleColorMode from "@/components/ToggleColorMode";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
interface Props {
  params: { locale: string };
}

export default async function Example({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Main");

  return (
    <div className="flex flex-col gap-4">
      <ButtonAppBar />
      <h1>{t("welcome")}</h1>
      <LanguageSelect />
      <ToggleColorMode />
      <Button variant="text">Button</Button>
      <TextField label="Text Field" variant="outlined" />
      <FormControlLabel control={<Checkbox />} label="Checkbox" />
      <Typography variant="h6">Typography</Typography>
      <Link href={route.home}>Home</Link>
      <h1>{t("welcome")}</h1>;
    </div>
  );
}
