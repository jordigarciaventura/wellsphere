'use client'

import React from 'react'
import styles from './PlanDisplay.module.css'

type Feature = {
  name: string
  included: boolean
}

type Plan = {
  name: string
  price: number
  features: Feature[]
}

type PlanDisplayProps = {
  currentPlan: Plan
  availablePlans: Plan[]
}

const PlanDisplay: React.FC<PlanDisplayProps> = ({ currentPlan, availablePlans }) => {
  return (
    <div className={styles.container}>
      <div className={styles.currentPlan}>
        <h2>Your Current Plan</h2>
        <div className={styles.planCard}>
          <h3>{currentPlan.name}</h3>
          <p className={styles.price}>${currentPlan.price}/month</p>
          <ul className={styles.featureList}>
            {currentPlan.features.map((feature, index) => (
              <li key={index} className={feature.included ? styles.included : styles.notIncluded}>
                {feature.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.availablePlans}>
        <h2>Available Plans</h2>
        <div className={styles.planGrid}>
          {availablePlans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <h3>{plan.name}</h3>
              <p className={styles.price}>${plan.price}/month</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={feature.included ? styles.included : styles.notIncluded}>
                    {feature.name}
                  </li>
                ))}
              </ul>
              <button className={styles.upgradeButton}>Upgrade</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlanDisplay

