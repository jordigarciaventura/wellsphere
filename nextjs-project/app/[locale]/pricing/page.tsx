import PlanDisplay from "@/features/quotas/PlanDisplay";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function PricingPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const currentPlan = {
    name: "Free Plan",
    price: 0.0,
    features: [
      { name: "Lorem ipsum dolor sit amet", included: true },
      { name: "Consectetur adipiscing elit", included: true },
      { name: "Sed do eiusmod tempor incididunt", included: false },
      { name: "Ut labore et dolore magna aliqua", included: false },
    ],
  };

  const availablePlans = [
    {
      name: "Basic Plan",
      price: 9.99,
      features: [
        { name: "Lorem ipsum dolor sit amet", included: true },
        { name: "Consectetur adipiscing elit", included: true },
        { name: "Sed do eiusmod tempor incididunt", included: true },
        { name: "Ut labore et dolore magna aliqua", included: false },
      ],
    },
    {
      name: "Pro Plan",
      price: 19.99,
      features: [
        { name: "Lorem ipsum dolor sit amet", included: true },
        { name: "Consectetur adipiscing elit", included: true },
        { name: "Sed do eiusmod tempor incididunt", included: true },
        { name: "Ut labore et dolore magna aliqua", included: true },
      ],
    },
  ];

  return (
    <PlanDisplay currentPlan={currentPlan} availablePlans={availablePlans} />
  );
}
