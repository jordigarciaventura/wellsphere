'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TutorialStep {
  image: string
  title: string
  text: string
  color: string
}

const tutorialSteps: TutorialStep[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Purpose and dimensions",
    text: "Take care of your well-being across 6 dimensions. Challenge yourself with daily tasks, keep a journal, and let WellSphere help you track your progress!",
    color: "#7C3AED",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Physical",
    text: "Stay active! Set physical goals, like running or exercising, to keep your body healthy.",
    color: "#4CAF50",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Emotional",
    text: "Balance your emotions. Set a goal to talk about your feelings and reflect daily.",
    color: "#F44336",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Intellectual",
    text: "Challenge your mind! Set a goal, like reading a book or learning something new.",
    color: "#2196F3",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Social",
    text: "Build better connections! Set goals to improve your relationships each day.",
    color: "#FFEB3B",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Spiritual",
    text: "Find inner peace. Add a meditation practice to your daily routine.",
    color: "#9C27B0",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "Occupational",
    text: "Stay ahead in your career! Set goals to keep up with market trends and improve professionally.",
    color: "#FF9800",
  },
]

const darkenColor = (color: string): string => {
  const hex = color.replace('#', '')
  const rgb = parseInt(hex, 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff
  return `#${((r * 0.8) << 16 | (g * 0.8) << 8 | (b * 0.8)).toString(16).padStart(6, '0')}`
}

export default function TutorialCarousel() {
  const [currentStep, setCurrentStep] = useState(0)

  const currentStepData = tutorialSteps[currentStep] || tutorialSteps[0]
  const currentColor = currentStepData.color
  const darkerColor = darkenColor(currentColor)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, tutorialSteps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSkip = () => {
    console.log('Tutorial skipped')
  }

  return (
    <div className="carousel-container">
      <style jsx global>{`
        :root {
          --step-color: ${currentColor};
          --step-color-dark: ${darkerColor};
        }
      `}</style>
      <div className="carousel-content">
        <div className="carousel-image">
          <Image
            src={currentStepData.image}
            alt={currentStepData.title}
            width={400}
            height={400}
          />
        </div>
        <div className="carousel-text">
          <h2>{currentStepData.title}</h2>
          <p>{currentStepData.text}</p>
        </div>
      </div>
      <div className="carousel-navigation">
        <button 
          onClick={handleBack} 
          className="nav-button"
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button 
          onClick={handleNext} 
          className="nav-button"
          disabled={currentStep === tutorialSteps.length - 1}
        >
          Next
        </button>
      </div>
      <button onClick={handleSkip} className="skip-button">
        Skip
      </button>
      <div className="carousel-dots">
        {tutorialSteps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentStep ? 'active' : ''}`}
            onClick={() => setCurrentStep(index)}
          />
        ))}
      </div>
      <style jsx>{`
        .carousel-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .carousel-content {
          display: flex;
          align-items: center;
          gap: 4rem;
          margin-bottom: 2rem;
        }

        .carousel-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #faf5ff;
          border-radius: 50%;
          padding: 2rem;
        }

        .carousel-text {
          flex: 1;
          text-align: left;
        }

        .carousel-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--step-color);
        }

        .carousel-text p {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }

        .carousel-navigation {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .nav-button {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 25px;
          background-color: var(--step-color);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .nav-button:hover {
          background-color: var(--step-color-dark);
        }

        .nav-button:disabled {
          background-color: #d1d5db;
          cursor: not-allowed;
        }

        .skip-button {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 25px;
          background-color: var(--step-color);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .skip-button:hover {
          background-color: var(--step-color-dark);
        }

        .carousel-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #d1d5db;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .dot.active {
          background-color: var(--step-color);
        }

        @media (max-width: 768px) {
          .carousel-content {
            flex-direction: column;
            gap: 2rem;
          }

          .carousel-image,
          .carousel-text {
            flex: none;
            width: 100%;
          }

          .carousel-text h2 {
            font-size: 2rem;
          }

          .carousel-text p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}