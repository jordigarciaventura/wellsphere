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
