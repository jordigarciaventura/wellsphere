import { LoginForm } from "@/features/auth/components/LoginForm";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function LoginPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="mt-12 flex">
      <LoginForm />;
    </div>
  );
}
