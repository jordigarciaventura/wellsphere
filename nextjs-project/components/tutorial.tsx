'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  Button, 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  MobileStepper,
  useTheme
} from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

interface TutorialStep {
  image: string
  title: string
  text: string
  color: string
}

interface TutorialCarouselProps {
  onComplete?: () => void
}

const tutorialSteps: TutorialStep[] = [
  {
    image: '../assets/app.svg',
    title: 'Purpose and dimensions',
    text: 'Take care of your well-being across 6 dimensions. Challenge yourself with daily tasks, keep a journal, and let WellSphere help you track your progress!',
    color: 'primary.main', // Default color
  },
  {
    image: '../assets/physical.svg',
    title: 'Physical',
    text: 'Stay active! Set physical goals, like running or exercising, to keep your body healthy.',
    color: '#4CAF50',
  },
  {
    image: '../assets/emotional.svg',
    title: 'Emotional',
    text: 'Balance your emotions. Set a goal to talk about your feelings and reflect daily.',
    color: '#F44336',
  },
  {
    image: '../assets/intellectual.svg',
    title: 'Intellectual',
    text: 'Challenge your mind! Set a goal, like reading a book or learning something new.',
    color: '#2196F3',
  },
  {
    image: '../assets/social.svg',
    title: 'Social',
    text: 'Build better connections! Set goals to improve your relationships each day.',
    color: '#FFEB3B',
  },
  {
    image: '../assets/spiritual.svg',
    title: "Spiritual",
    text: "Find inner peace. Add a meditation practice to your daily routine.",
    color: '#9C27B0',
  },
  {
    image: '../assets/occupational.svg',
    title: "Occupational",
    text: "Stay ahead in your career! Set goals to keep up with market trends and improve professionally.",
    color: '#FF9800',
  },
]

export default function TutorialCarousel({ onComplete }: TutorialCarouselProps = {}) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = tutorialSteps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1
      if (nextStep >= maxSteps) {
        onComplete?.()
        return prevActiveStep 
      }
      return nextStep
    })
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0))
  }

  const currentStep = tutorialSteps[activeStep]

  if (!currentStep) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default 
      }}>
        <Typography variant="h6">Error: Tutorial step not found</Typography>
      </div>
    )
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default 
    }}>
      <Card sx={{ maxWidth: 450, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom align="center">
            {currentStep.title}
          </Typography>
          <div style={{ position: 'relative', width: '100%', height: 450, marginBottom: theme.spacing(2) }}>
            <Image
              src={currentStep.image}
              alt={currentStep.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Typography variant="body2" color="text.secondary" align="center">
            {currentStep.text}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button 
            size="small" 
            onClick={handleBack} 
            disabled={activeStep === 0}
            startIcon={<KeyboardArrowLeft />}
            sx={{ color: currentStep.color }}
          >
            Back
          </Button>
          <Button 
            size="small" 
            onClick={handleNext}
            endIcon={<KeyboardArrowRight />}
            sx={{ color: currentStep.color }}
          >
            {activeStep === maxSteps - 1 ? 'Lets go!' : 'Next'}
          </Button>
        </CardActions>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            '& .MuiMobileStepper-dot': {
              backgroundColor: theme.palette.grey[300],
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: currentStep.color,
            },
          }}
          nextButton={<div />}
          backButton={<div />}
        />
      </Card>
    </div>
  )
}