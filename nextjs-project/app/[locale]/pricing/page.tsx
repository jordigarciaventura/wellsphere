import PlanDisplay from "@/features/quotas/PlanDisplay";

const PricingPage = () => {
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
};

export default PricingPage;
