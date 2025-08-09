"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

interface PhishingExample {
  id: string
  type: 'email' | 'website' | 'sms' | 'social'
  isPhishing: boolean
  title: string
  content: string
  imageUrl?: string
  indicators: string[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const PHISHING_EXAMPLES: PhishingExample[] = [
  {
    id: '1',
    type: 'email',
    isPhishing: true,
    title: 'Urgent: Your Account Will Be Suspended',
    content: `From: security@paypaI.com
Subject: Urgent: Your Account Will Be Suspended

Dear Customer,

We have detected suspicious activity on your account. Your account will be suspended within 24 hours unless you verify your information immediately.

Click here to verify: http://paypal-security-verification.net/verify

Failure to verify will result in permanent account closure.

Best regards,
PayPal Security Team`,
    indicators: [
      'Suspicious sender domain (paypaI.com with capital I instead of l)',
      'Urgency and threat tactics',
      'Suspicious URL domain',
      'Generic greeting',
      'Grammar and spelling issues'
    ],
    explanation: 'This is a classic phishing email that impersonates PayPal. Notice the domain uses a capital I instead of lowercase l, creating a homograph attack.',
    difficulty: 'easy'
  },
  {
    id: '2',
    type: 'website',
    isPhishing: false,
    title: 'Microsoft 365 Login Page',
    content: `URL: https://login.microsoftonline.com/
Title: Microsoft 365 Sign In

Standard Microsoft 365 login page with:
- Correct Microsoft branding
- Secure HTTPS connection
- Legitimate microsoft.com domain
- Proper certificate`,
    indicators: [
      'Legitimate Microsoft domain',
      'Valid SSL certificate',
      'Correct branding and design',
      'HTTPS protocol',
      'No suspicious redirects'
    ],
    explanation: 'This is a legitimate Microsoft 365 login page. The domain is correct, uses HTTPS, and has proper Microsoft branding.',
    difficulty: 'easy'
  },
  {
    id: '3',
    type: 'email',
    isPhishing: true,
    title: 'COVID-19 Relief Fund',
    content: `From: relief-fund@covid19-gov.org
Subject: COVID-19 Emergency Relief - $2,500 Available

Dear Citizen,

The government has approved emergency COVID-19 relief funds. You are eligible for $2,500.

To claim your funds, please provide:
- Social Security Number
- Bank Account Details
- Date of Birth

Click here to claim: https://covid19-relief-claim.org/apply

This offer expires in 48 hours.

Government Relief Department`,
    indicators: [
      'Fake government domain',
      'Requesting sensitive personal information',
      'Too good to be true offer',
      'Time pressure tactics',
      'Suspicious external domain'
    ],
    explanation: 'This phishing email exploits the COVID-19 pandemic to steal personal information. Government agencies don\'t typically request sensitive info via email.',
    difficulty: 'medium'
  },
  {
    id: '4',
    type: 'sms',
    isPhishing: true,
    title: 'Bank Security Alert',
    content: `From: +1-555-0123
Message: ALERT: Unusual activity detected on your account ending in 4567. Reply STOP to freeze account or click link to verify: https://bit.ly/bank-verify-now

Send "HELP" for help, "STOP" to opt out.`,
    indicators: [
      'Shortened URL (bit.ly)',
      'Phone number not from bank',
      'Pressure to act immediately',
      'Vague account reference',
      'Text message for sensitive security matter'
    ],
    explanation: 'Banks typically don\'t send security alerts via SMS with links. Always contact your bank directly using official numbers.',
    difficulty: 'medium'
  },
  {
    id: '5',
    type: 'website',
    isPhishing: true,
    title: 'Amazon Login Look-alike',
    content: `URL: https://amazon-signin.secure-account-verification.com/
Title: Amazon Sign In

Website appears to be Amazon with:
- Similar orange and black color scheme
- Amazon logo and branding
- Login form asking for email and password
- "Secure" in URL but wrong domain`,
    indicators: [
      'Wrong domain (not amazon.com)',
      'Subdomain spoofing',
      'URL contains "secure" to appear trustworthy',
      'Copied branding and design',
      'Missing proper Amazon security features'
    ],
    explanation: 'This fake Amazon site uses subdomain spoofing and copied branding. Always check the main domain in the URL.',
    difficulty: 'hard'
  },
  {
    id: '6',
    type: 'social',
    isPhishing: false,
    title: 'LinkedIn Connection Request',
    content: `Platform: LinkedIn
From: John Smith, Senior Developer at Microsoft

"Hi [Your Name], I noticed your experience in cybersecurity and would like to connect. I'm working on some interesting security projects at Microsoft and think we might have some common interests.

Best regards,
John"

Profile shows:
- 500+ connections
- Detailed work history
- Professional photo
- Mutual connections with colleagues`,
    indicators: [
      'Personalized message mentioning your field',
      'Professional profile with details',
      'Mutual connections',
      'No requests for sensitive information',
      'Standard LinkedIn platform features'
    ],
    explanation: 'This appears to be a legitimate LinkedIn connection request. The profile shows professional details and no red flags.',
    difficulty: 'medium'
  }
]

export function PhishingGame() {
  const [currentExample, setCurrentExample] = useState(0)
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [streak, setStreak] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])

  const example = PHISHING_EXAMPLES[currentExample]

  const handleAnswer = (answer: boolean) => {
    setUserAnswer(answer)
    const isCorrect = answer === example.isPhishing
    
    if (isCorrect) {
      setScore(score + 1)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }

    setAnswers([...answers, isCorrect])
    setShowExplanation(true)
  }

  const nextExample = () => {
    if (currentExample < PHISHING_EXAMPLES.length - 1) {
      setCurrentExample(currentExample + 1)
      setUserAnswer(null)
      setShowExplanation(false)
    } else {
      setGameCompleted(true)
    }
  }

  const resetGame = () => {
    setCurrentExample(0)
    setUserAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setGameCompleted(false)
    setStreak(0)
    setAnswers([])
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return '📧'
      case 'website': return '🌐'
      case 'sms': return '📱'
      case 'social': return '👥'
      default: return '❓'
    }
  }

  if (gameCompleted) {
    const percentage = Math.round((score / PHISHING_EXAMPLES.length) * 100)
    const maxStreak = Math.max(...answers.reduce((streaks: number[], correct, index) => {
      if (correct) {
        const lastStreak = streaks[streaks.length - 1] || 0
        streaks[streaks.length - 1] = lastStreak + 1
      } else {
        streaks.push(0)
      }
      return streaks
    }, [0]))

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Game Complete!</CardTitle>
            <CardDescription>Your phishing detection results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">
                {score}/{PHISHING_EXAMPLES.length}
              </div>
              <div className="text-lg text-muted-foreground">
                {percentage}% Accuracy
              </div>
              <Progress value={percentage} className="mt-4" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{maxStreak}</div>
                <div className="text-sm text-muted-foreground">Best Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {percentage >= 80 ? '🏆' : percentage >= 60 ? '🥈' : '📚'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {percentage >= 80 ? 'Expert' : percentage >= 60 ? 'Good' : 'Needs Practice'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {PHISHING_EXAMPLES.filter(e => e.isPhishing).length}
                </div>
                <div className="text-sm text-muted-foreground">Total Phishing</div>
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              <Button onClick={resetGame}>
                Play Again
              </Button>
              <Button variant="outline">
                View Results
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {PHISHING_EXAMPLES.map((example, index) => (
                <div key={example.id} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="text-2xl">{getTypeIcon(example.type)}</div>
                  <div className="flex-1">
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {example.isPhishing ? 'Phishing' : 'Legitimate'}
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(example.difficulty)}>
                    {example.difficulty}
                  </Badge>
                  <div className="text-2xl">
                    {answers[index] ? '✅' : '❌'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Game Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className={getDifficultyColor(example.difficulty)}>
            {example.difficulty}
          </Badge>
          <Badge variant="outline">
            {getTypeIcon(example.type)} {example.type}
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold">{streak}</div>
            <div className="text-xs text-muted-foreground">Streak</div>
          </div>
          <Badge variant="secondary">
            {currentExample + 1} / {PHISHING_EXAMPLES.length}
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{Math.round(((currentExample + 1) / PHISHING_EXAMPLES.length) * 100)}%</span>
        </div>
        <Progress value={((currentExample + 1) / PHISHING_EXAMPLES.length) * 100} />
      </div>

      {/* Example Display */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">{getTypeIcon(example.type)}</span>
            {example.title}
          </CardTitle>
          <CardDescription>
            Is this a phishing attempt or legitimate communication?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Content */}
            <div className="p-4 bg-muted rounded-lg font-mono text-sm whitespace-pre-wrap">
              {example.content}
            </div>

            {/* Image if available */}
            {example.imageUrl && (
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src={example.imageUrl}
                  alt="Example screenshot"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Answer Buttons */}
            {!showExplanation && (
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => handleAnswer(true)}
                  variant="destructive"
                  size="lg"
                  className="flex-1"
                >
                  🎣 This is Phishing
                </Button>
                <Button 
                  onClick={() => handleAnswer(false)}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  ✅ This is Legitimate
                </Button>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  userAnswer === example.isPhishing 
                    ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800'
                    : 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">
                      {userAnswer === example.isPhishing ? '✅' : '❌'}
                    </span>
                    <span className="font-medium">
                      {userAnswer === example.isPhishing ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="text-sm">
                    This is {example.isPhishing ? 'a phishing attempt' : 'legitimate communication'}.
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-medium mb-2">Explanation</h4>
                  <p className="text-sm mb-3">{example.explanation}</p>
                  
                  <h5 className="font-medium mb-2">Key Indicators:</h5>
                  <ul className="text-sm space-y-1">
                    {example.indicators.map((indicator, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button onClick={nextExample} className="w-full" size="lg">
                  {currentExample < PHISHING_EXAMPLES.length - 1 ? 'Next Example' : 'Finish Game'}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Score Display */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Score</div>
              <div className="text-2xl font-bold">{score}/{currentExample + (showExplanation ? 1 : 0)}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
              <div className="text-2xl font-bold">
                {answers.length > 0 
                  ? Math.round((answers.filter(a => a).length / answers.length) * 100)
                  : 0}%
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
              <div className="text-2xl font-bold">{streak}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}