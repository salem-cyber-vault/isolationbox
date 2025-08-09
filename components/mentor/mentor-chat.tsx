"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatMessage {
  id: string
  sender: 'user' | 'mentor'
  content: string
  timestamp: Date
  type: 'text' | 'suggestion' | 'resource'
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    sender: 'mentor',
    content: 'Hello! I\'m your AI cybersecurity mentor. I\'m here to help you learn and grow in cybersecurity. What would you like to explore today?',
    timestamp: new Date(),
    type: 'text'
  }
]

const SUGGESTED_QUESTIONS = [
  'How do I start a career in cybersecurity?',
  'What certifications should I pursue?',
  'Explain the difference between symmetric and asymmetric encryption',
  'How can I improve my penetration testing skills?',
  'What are the most common attack vectors?',
  'Help me understand zero-trust architecture'
]

export function MentorChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: content.trim(),
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const mentorResponse = generateMentorResponse(content)
      const mentorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'mentor',
        content: mentorResponse,
        timestamp: new Date(),
        type: 'text'
      }
      
      setMessages(prev => [...prev, mentorMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateMentorResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('career') || input.includes('start')) {
      return `Great question! Starting a cybersecurity career involves several key steps:

1. **Build foundational knowledge**: Start with networking, operating systems, and security fundamentals
2. **Get hands-on experience**: Use platforms like this one, TryHackMe, or HackTheBox
3. **Pursue relevant certifications**: Consider CompTIA Security+, CEH, or CISSP depending on your goals
4. **Specialize**: Choose areas like penetration testing, incident response, or security architecture
5. **Network**: Join cybersecurity communities and attend conferences

Would you like me to elaborate on any of these areas?`
    }
    
    if (input.includes('certification')) {
      return `Here are some valuable certifications based on career stage:

**Entry Level:**
- CompTIA Security+
- CompTIA Network+
- (ISC)² Systems Security Certified Practitioner (SSCP)

**Intermediate:**
- Certified Ethical Hacker (CEH)
- CompTIA PenTest+
- GIAC Security Essentials (GSEC)

**Advanced:**
- Certified Information Systems Security Professional (CISSP)
- Certified Information Security Manager (CISM)
- SANS Expert-Level certifications

Which level are you targeting?`
    }
    
    if (input.includes('encryption')) {
      return `Excellent topic! Here's the key difference:

**Symmetric Encryption:**
- Uses the same key for encryption and decryption
- Faster and more efficient
- Key distribution is challenging
- Examples: AES, DES, 3DES

**Asymmetric Encryption:**
- Uses a pair of keys (public and private)
- Slower but solves key distribution problem
- Enables digital signatures and key exchange
- Examples: RSA, ECC, Diffie-Hellman

Would you like to practice implementing these concepts in our simulation lab?`
    }
    
    if (input.includes('penetration') || input.includes('pentest')) {
      return `Penetration testing is a fantastic specialization! Here's how to improve:

**Technical Skills:**
- Master tools like Metasploit, Burp Suite, Nmap
- Learn scripting (Python, Bash, PowerShell)
- Understand web application security
- Practice on legal platforms like our attack lab

**Methodology:**
- Follow frameworks like OWASP Testing Guide
- Learn to document findings professionally
- Understand business impact assessment

**Certifications:**
- OSCP (hands-on favorite)
- CompTIA PenTest+
- GPEN

Want to try some scenarios in our Attack Simulation Lab?`
    }
    
    return `That's an interesting question! Based on your query about "${userInput}", I'd recommend exploring our interactive modules. You can find hands-on exercises in:

- **Attack Simulation Lab**: Practice real-world scenarios
- **Security Games**: Test your knowledge with quizzes and challenges
- **Project Explorer**: Work through guided tutorials

Is there a specific aspect of cybersecurity you'd like to dive deeper into? I can provide more targeted guidance based on your interests and current skill level.`
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  return (
    <div className="flex flex-col h-96">
      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[80%] ${
                message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}>
                <Avatar className="w-8 h-8">
                  {message.sender === 'mentor' ? (
                    <>
                      <AvatarImage src="/mentor-avatar.png" />
                      <AvatarFallback>🤖</AvatarFallback>
                    </>
                  ) : (
                    <>
                      <AvatarImage src="/user-avatar.png" />
                      <AvatarFallback>👤</AvatarFallback>
                    </>
                  )}
                </Avatar>
                <div className={`rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>🤖</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Suggested Questions */}
      <div className="p-4 border-t">
        <div className="text-sm font-medium mb-2">Suggested Questions:</div>
        <div className="flex flex-wrap gap-1">
          {SUGGESTED_QUESTIONS.slice(0, 3).map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-xs"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask your cybersecurity question..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(inputValue)
              }
            }}
          />
          <Button onClick={() => handleSendMessage(inputValue)}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}