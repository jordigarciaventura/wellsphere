import { SignUpForm } from "@/features/auth/components/SignUpForm";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function RegisterPage({ params: { locale } }: Props) {
  "use client";

  unstable_setRequestLocale(locale);

  return (
    <div className="mt-12 flex">
      <SignUpForm />;
    </div>
  );
}
