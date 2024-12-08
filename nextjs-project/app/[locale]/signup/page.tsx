import { SignUpForm } from "@/features/auth/components/SignUpForm";
import { setRequestLocale } from "next-intl/server";

interface Props {
    params: { locale: string };
  }
  
export default function SignUpPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="mt-12 flex">
      <SignUpForm />;
    </div>
  );
}
