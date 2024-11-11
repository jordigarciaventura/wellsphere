'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const questions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
]

const options = ["Daily", "Several times a week", "A few times a month", "Rarely"]

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''))

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  return (
    <div className="min-h-screen bg-[#e6f3ff] flex items-center justify-center px-4 w-full">
      <div className="w-full max-w-md flex flex-col mx-auto">
        <div className="flex-1 flex flex-col border-2 border-[#0088ff] rounded-lg p-6 bg-white bg-opacity-50 bg-purple-100">
          <span className="text-[#0088ff] mb-3">Question {currentQuestion + 1}</span>
          
          <p className="text-center mb-8 text-base leading-normal">
            {questions[currentQuestion]}
          </p>

          <RadioGroup 
            value={answers[currentQuestion]} 
            onValueChange={handleAnswer}
            className="gap-4"
          >
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem 
                  value={option} 
                  id={`option-${index}`}
                  className="border-2 border-gray-300 w-5 h-5"
                />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between mt-4">
          <Button 
            variant="ghost" 
            className="text-[#0088ff] hover:text-[#0088ff] hover:bg-transparent px-0"
            onClick={handleBack}
            disabled={currentQuestion === 0}
          >
            Back
          </Button>
          <Button 
            variant="ghost"
            className="text-[#0088ff] hover:text-[#0088ff] hover:bg-transparent px-0"
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}