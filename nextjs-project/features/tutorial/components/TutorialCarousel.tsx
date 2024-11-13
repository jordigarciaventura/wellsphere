'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Define the TutorialStep interface with required properties
interface TutorialStep {
  image: string
  title: string
  text: string
  color: string
}

// Ensure tutorialSteps is correctly typed and non-nullable
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

// Ensure tutorialSteps is non-empty and has a valid fallback step
const fallbackStep: TutorialStep = {
  image: "/default.svg",
  title: "Default Title",
  text: "This is a default step description.",
  color: "#000000",
}

export default function Component(): JSX.Element {
  // Set initial state for the current step index
  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0)

  // Safely access the current step with a fallback to avoid undefined
  const currentStep = tutorialSteps[currentStepIndex] || fallbackStep

  // Type for handler functions
  const handleNext = (): void => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, tutorialSteps.length - 1))
  }

  const handleBack = (): void => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleSkip = (): void => {
    console.log('Tutorial skipped')
  }

  return (
    <Card className="relative mx-auto max-w-6xl p-8 min-h-[600px]">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
          <div className="flex-1 flex justify-center items-center">
            <div 
              className="rounded-full p-8"
              style={{ backgroundColor: `${currentStep.color}15` }}
            >
              <Image
                src={currentStep.image}
                alt={currentStep.title}
                width={400}
                height={400}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto"
              />
            </div>
          </div>
          <div className="flex-1 text-left">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: currentStep.color }}
            >
              {currentStep.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {currentStep.text}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={handleBack}
            disabled={currentStepIndex === 0}
            style={{ 
              backgroundColor: currentStep.color,
              opacity: currentStepIndex === 0 ? 0.5 : 1 
            }}
            className="rounded-full px-8 hover:opacity-90"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStepIndex === tutorialSteps.length - 1}
            style={{ 
              backgroundColor: currentStep.color,
              opacity: currentStepIndex === tutorialSteps.length - 1 ? 0.5 : 1 
            }}
            className="rounded-full px-8 hover:opacity-90"
          >
            Next
          </Button>
        </div>

        <Button
          onClick={handleSkip}
          style={{ backgroundColor: currentStep.color }}
          className="absolute bottom-8 right-8 rounded-full px-8 hover:opacity-90"
        >
          Skip
        </Button>

        <div className="flex justify-center gap-2 mt-8">
          {tutorialSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStepIndex(index)}
              className="w-2.5 h-2.5 rounded-full transition-colors"
              style={{ 
                backgroundColor: index === currentStepIndex ? currentStep.color : '#d1d5db'
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
