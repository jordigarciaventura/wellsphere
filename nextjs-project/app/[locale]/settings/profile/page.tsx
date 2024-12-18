import EditProfileForm from "@/features/profile/components/EditProfileForm";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function ProfilePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <EditProfileForm />;
}
