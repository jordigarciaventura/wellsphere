import EditProfileForm from "@/features/profile/components/EditProfileForm";

interface Props {
  params: { locale: string };
}

export default function ProfilePage({ params: { locale } }: Props) {
  return <EditProfileForm />;
}
