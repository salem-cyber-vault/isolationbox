"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizQuestion {
  id: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  options: string[]
  correct: number
  explanation: string
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: '1',
    category: 'Network Security',
    difficulty: 'easy',
    question: 'What does VPN stand for?',
    options: [
      'Virtual Private Network',
      'Very Personal Network',
      'Virtual Public Network',
      'Verified Private Network'
    ],
    correct: 0,
    explanation: 'VPN stands for Virtual Private Network, which creates a secure connection over the internet.'
  },
  {
    id: '2',
    category: 'Cryptography',
    difficulty: 'medium',
    question: 'Which of the following is a symmetric encryption algorithm?',
    options: [
      'RSA',
      'AES',
      'ECC',
      'Diffie-Hellman'
    ],
    correct: 1,
    explanation: 'AES (Advanced Encryption Standard) is a symmetric encryption algorithm, while RSA and ECC are asymmetric, and Diffie-Hellman is a key exchange protocol.'
  },
  {
    id: '3',
    category: 'Web Security',
    difficulty: 'hard',
    question: 'What is the primary purpose of Content Security Policy (CSP)?',
    options: [
      'To encrypt web traffic',
      'To authenticate users',
      'To prevent XSS attacks',
      'To compress content'
    ],
    correct: 2,
    explanation: 'Content Security Policy (CSP) is primarily designed to prevent Cross-Site Scripting (XSS) attacks by controlling which resources can be loaded.'
  },
  {
    id: '4',
    category: 'Malware',
    difficulty: 'easy',
    question: 'What type of malware replicates itself to spread to other computers?',
    options: [
      'Virus',
      'Trojan',
      'Spyware',
      'Adware'
    ],
    correct: 0,
    explanation: 'A virus is malware that replicates itself and spreads to other computers, often by attaching to other programs.'
  },
  {
    id: '5',
    category: 'Network Security',
    difficulty: 'medium',
    question: 'Which port is commonly used for HTTPS traffic?',
    options: [
      '80',
      '443',
      '22',
      '25'
    ],
    correct: 1,
    explanation: 'Port 443 is the standard port for HTTPS (HTTP over SSL/TLS) traffic. Port 80 is for HTTP, 22 for SSH, and 25 for SMTP.'
  },
  {
    id: '6',
    category: 'Authentication',
    difficulty: 'hard',
    question: 'What is the main advantage of using SAML over OAuth for enterprise authentication?',
    options: [
      'Better mobile support',
      'Simpler implementation',
      'Built-in user attribute exchange',
      'Faster authentication'
    ],
    correct: 2,
    explanation: 'SAML (Security Assertion Markup Language) provides built-in support for exchanging user attributes and detailed authorization information, making it ideal for enterprise environments.'
  }
]

export function CyberQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>(new Array(QUIZ_QUESTIONS.length).fill(false))
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(QUIZ_QUESTIONS.length).fill(-1))
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setQuizCompleted(true)
    }
  }, [timeLeft, quizCompleted])

  const handleAnswer = () => {
    if (!selectedAnswer) return

    const questionIndex = currentQuestion
    const answerIndex = parseInt(selectedAnswer)
    const isCorrect = answerIndex === QUIZ_QUESTIONS[questionIndex].correct

    // Update score if correct and not already answered
    if (isCorrect && !answered[questionIndex]) {
      setScore(score + 1)
    }

    // Mark as answered and store user answer
    const newAnswered = [...answered]
    newAnswered[questionIndex] = true
    setAnswered(newAnswered)

    const newUserAnswers = [...userAnswers]
    newUserAnswers[questionIndex] = answerIndex
    setUserAnswers(newUserAnswers)

    setShowExplanation(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setShowExplanation(false)
    setScore(0)
    setAnswered(new Array(QUIZ_QUESTIONS.length).fill(false))
    setUserAnswers(new Array(QUIZ_QUESTIONS.length).fill(-1))
    setQuizCompleted(false)
    setTimeLeft(300)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500'
    if (percentage >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  if (quizCompleted) {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100)
    
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            <CardDescription>Here are your results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(percentage)}`}>
                {score}/{QUIZ_QUESTIONS.length}
              </div>
              <div className="text-lg text-muted-foreground">
                {percentage}% Correct
              </div>
              <Progress value={percentage} className="mt-4" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{formatTime(300 - timeLeft)}</div>
                <div className="text-sm text-muted-foreground">Time Taken</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {percentage >= 80 ? '🏆' : percentage >= 60 ? '🥈' : '📚'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {percentage >= 80 ? 'Expert' : percentage >= 60 ? 'Proficient' : 'Keep Learning'}
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              <Button onClick={resetQuiz}>
                Retake Quiz
              </Button>
              <Button variant="outline">
                View Detailed Results
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
            <CardDescription>Review your answers and explanations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {QUIZ_QUESTIONS.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getDifficultyColor(question.difficulty)}>
                      {question.difficulty}
                    </Badge>
                    <Badge variant="outline">{question.category}</Badge>
                    {userAnswers[index] === question.correct ? (
                      <Badge className="bg-green-500">✓ Correct</Badge>
                    ) : (
                      <Badge variant="destructive">✗ Incorrect</Badge>
                    )}
                  </div>
                  <h4 className="font-medium mb-2">{question.question}</h4>
                  <div className="text-sm space-y-1">
                    <div className="text-green-600">
                      ✓ Correct: {question.options[question.correct]}
                    </div>
                    {userAnswers[index] !== question.correct && userAnswers[index] !== -1 && (
                      <div className="text-red-600">
                        ✗ Your answer: {question.options[userAnswers[index]]}
                      </div>
                    )}
                    <div className="text-muted-foreground mt-2">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = QUIZ_QUESTIONS[currentQuestion]

  return (
    <div className="space-y-6">
      {/* Quiz Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className={getDifficultyColor(question.difficulty)}>
            {question.difficulty}
          </Badge>
          <Badge variant="outline">{question.category}</Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-lg font-mono">
            {formatTime(timeLeft)}
          </div>
          <Badge variant="secondary">
            {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
        </div>
        <Progress value={((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100} />
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={selectedAnswer} 
            onValueChange={setSelectedAnswer}
            disabled={showExplanation}
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`} 
                  className={`flex-1 cursor-pointer p-2 rounded border ${
                    showExplanation 
                      ? index === question.correct 
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : selectedAnswer === index.toString()
                        ? 'bg-red-50 border-red-500 text-red-700'
                        : ''
                      : 'hover:bg-accent'
                  }`}
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-medium mb-2">Explanation</h4>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-6">
            {!showExplanation ? (
              <Button 
                onClick={handleAnswer} 
                disabled={!selectedAnswer}
                className="flex-1"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion} className="flex-1">
                {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Score */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Current Score</div>
              <div className="text-2xl font-bold">{score}/{currentQuestion + (showExplanation ? 1 : 0)}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
              <div className="text-2xl font-bold">
                {answered.filter((a, i) => a && userAnswers[i] === QUIZ_QUESTIONS[i].correct).length > 0
                  ? Math.round((answered.filter((a, i) => a && userAnswers[i] === QUIZ_QUESTIONS[i].correct).length / answered.filter(a => a).length) * 100)
                  : 0}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}