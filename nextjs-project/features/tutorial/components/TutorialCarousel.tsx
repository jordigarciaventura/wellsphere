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
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/app.svg",
>>>>>>> #96
    title: "Purpose and dimensions",
    text: "Take care of your well-being across 6 dimensions. Challenge yourself with daily tasks, keep a journal, and let WellSphere help you track your progress!",
    color: "#7C3AED",
  },
  {
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/physical.svg",
>>>>>>> #96
    title: "Physical",
    text: "Stay active! Set physical goals, like running or exercising, to keep your body healthy.",
    color: "#4CAF50",
  },
  {
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/emotional.svg",
>>>>>>> #96
    title: "Emotional",
    text: "Balance your emotions. Set a goal to talk about your feelings and reflect daily.",
    color: "#F44336",
  },
  {
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/intellectual.svg",
>>>>>>> #96
    title: "Intellectual",
    text: "Challenge your mind! Set a goal, like reading a book or learning something new.",
    color: "#2196F3",
  },
  {
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/social.svg",
>>>>>>> #96
    title: "Social",
    text: "Build better connections! Set goals to improve your relationships each day.",
    color: "#FFEB3B",
  },
  {
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/spiritual.svg",
>>>>>>> #96
    title: "Spiritual",
    text: "Find inner peace. Add a meditation practice to your daily routine.",
    color: "#9C27B0",
  },
  {
<<<<<<< HEAD
    image: "/placeholder.svg?height=400&width=400",
=======
    image: "/assets/occupational.svg",
>>>>>>> #96
    title: "Occupational",
    text: "Stay ahead in your career! Set goals to keep up with market trends and improve professionally.",
    color: "#FF9800",
  },
]
<<<<<<< HEAD
=======

export default function TutorialCarousel() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, tutorialSteps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSkip = () => {
    console.log('Tutorial skipped')
  }

  const currentColor = tutorialSteps[currentStep].color

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="carousel-image">
          <Image
            src={tutorialSteps[currentStep].image}
            alt={tutorialSteps[currentStep].title}
            width={400}
            height={400}
          />
        </div>
        <div className="carousel-text">
          <h2 style={{ color: currentColor }}>
            {tutorialSteps[currentStep].title}
          </h2>
          <p>{tutorialSteps[currentStep].text}</p>
        </div>
      </div>
      <div className="carousel-navigation">
        <button 
          onClick={handleBack} 
          className="nav-button"
          disabled={currentStep === 0}
          style={{ backgroundColor: currentColor }}
        >
          Back
        </button>
        <button 
          onClick={handleNext} 
          className="nav-button"
          disabled={currentStep === tutorialSteps.length - 1}
          style={{ backgroundColor: currentColor }}
        >
          Next
        </button>
      </div>
      <button onClick={handleSkip} className="skip-button" style={{ backgroundColor: currentColor }}>
        Skip
      </button>
      <div className="carousel-dots">
        {tutorialSteps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentStep ? 'active' : ''}`}
            onClick={() => setCurrentStep(index)}
            style={{ backgroundColor: index === currentStep ? currentColor : '#d1d5db' }}
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
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .nav-button:hover {
          opacity: 0.8;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .skip-button {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .skip-button:hover {
          opacity: 0.8;
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
          cursor: pointer;
          transition: background-color 0.3s ease;
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
>>>>>>> #96
