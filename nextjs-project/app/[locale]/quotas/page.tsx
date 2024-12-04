import PlanDisplay from '@/features/quotas/PlanDisplay'

const PlansPage = () => {
  const currentPlan = {
    name: 'Free Plan',
    price: 0.00,
    features: [
      { name: 'Lorem ipsum dolor sit amet', included: true },
      { name: 'Consectetur adipiscing elit', included: true },
      { name: 'Sed do eiusmod tempor incididunt', included: false },
      { name: 'Ut labore et dolore magna aliqua', included: false },
    ],
  }

  const availablePlans = [
    {
      name: 'Basic Plan',
      price: 9.99,
      features: [
        { name: 'Lorem ipsum dolor sit amet', included: true },
        { name: 'Consectetur adipiscing elit', included: true },
        { name: 'Sed do eiusmod tempor incididunt', included: true },
        { name: 'Ut labore et dolore magna aliqua', included: false },
      ],
    },
    {
      name: 'Pro Plan',
      price: 19.99,
      features: [
        { name: 'Lorem ipsum dolor sit amet', included: true },
        { name: 'Consectetur adipiscing elit', included: true },
        { name: 'Sed do eiusmod tempor incididunt', included: true },
        { name: 'Ut labore et dolore magna aliqua', included: true },
      ],
    },
  ]

  return (
    <div>
      <h1>Your Subscription</h1>
      <PlanDisplay currentPlan={currentPlan} availablePlans={availablePlans} />
    </div>
  )
}

export default PlansPage