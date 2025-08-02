"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Eye {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  blinkDelay: number
  eyeColor: string
  glowColor: string
  type: "nft" | "cyber" | "glitch" | "mystical"
  character: string
}

interface FloatingEyesProps {
  count?: number
}

export function FloatingEyes({ count = 8 }: FloatingEyesProps) {
  const [eyes, setEyes] = useState<Eye[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const eyeTypes = ["nft", "cyber", "glitch", "mystical"] as const
  const nftColors = ["#00ff88", "#ff6b35", "#f7d794", "#ff3838", "#3742fa", "#2ed573"]
  const glowColors = ["#00ff88", "#ff6b35", "#f7d794", "#ff3838", "#3742fa", "#2ed573"]
  const characters = ["👁️", "🔮", "⚡", "🌟", "💎", "🎭"]

  // Generate NFT-style eyes
  useEffect(() => {
    const newEyes = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      duration: Math.random() * 25 + 15,
      blinkDelay: Math.random() * 8 + 4,
      eyeColor: nftColors[Math.floor(Math.random() * nftColors.length)],
      glowColor: glowColors[Math.floor(Math.random() * glowColors.length)],
      type: eyeTypes[Math.floor(Math.random() * eyeTypes.length)],
      character: characters[Math.floor(Math.random() * characters.length)],
    }))
    setEyes(newEyes)
  }, [count])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {eyes.map((eye) => (
          <NFTEyeElement key={eye.id} eye={eye} mousePosition={mousePosition} />
        ))}
      </AnimatePresence>
    </div>
  )
}

interface NFTEyeElementProps {
  eye: Eye
  mousePosition: { x: number; y: number }
}

function NFTEyeElement({ eye, mousePosition }: NFTEyeElementProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const x = (window.innerWidth * eye.x) / 100
    const y = (window.innerHeight * eye.y) / 100
    setPosition({ x, y })
  }, [eye.x, eye.y])

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, eye.blinkDelay * 1000)

    return () => clearInterval(blinkInterval)
  }, [eye.blinkDelay])

  // Calculate pupil position based on mouse
  const calculatePupilPosition = () => {
    if (!position.x || !position.y) return { x: 0, y: 0 }

    const eyeToMouse = {
      x: mousePosition.x - position.x,
      y: mousePosition.y - position.y,
    }

    const distance = Math.sqrt(eyeToMouse.x ** 2 + eyeToMouse.y ** 2)
    const maxDistance = eye.size / 6

    if (distance <= maxDistance) {
      return { x: eyeToMouse.x, y: eyeToMouse.y }
    }

    const ratio = maxDistance / distance
    return {
      x: eyeToMouse.x * ratio,
      y: eyeToMouse.y * ratio,
    }
  }

  const pupilPosition = calculatePupilPosition()

  const getEyeStyle = () => {
    return {
      background: `radial-gradient(circle at 30% 30%, ${eye.eyeColor}20, ${eye.eyeColor}10, transparent 70%)`,
      border: `1px solid ${eye.eyeColor}30`,
      borderRadius: "50%",
      boxShadow: `0 0 10px ${eye.glowColor}20, inset 0 0 5px ${eye.eyeColor}10`,
    }
  }

  return (
    <motion.div
      className="absolute backdrop-blur-[1px]"
      style={{
        width: eye.size,
        height: eye.size,
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        ...getEyeStyle(),
      }}
      animate={{
        x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
        y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
        scale: [1, 1.05, 0.95, 1],
        rotate: [0, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, 0],
      }}
      transition={{
        duration: eye.duration,
        delay: eye.delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 20px ${eye.glowColor}30`,
        filter: "brightness(1.2)",
      }}
    >
      {/* Iris */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: eye.size * 0.6,
          height: eye.size * 0.6,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle at 30% 30%, ${eye.eyeColor}30, ${eye.eyeColor}15, transparent)`,
        }}
      />

      {/* Pupil */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: eye.size / 4,
          height: eye.size / 4,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
          background: "#000000",
          boxShadow: `inset 0 0 5px ${eye.eyeColor}20`,
        }}
        animate={{
          scaleY: isBlinking ? 0.1 : 1,
        }}
        transition={{
          duration: 0.1,
        }}
      />

      {/* Highlight */}
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          width: eye.size / 8,
          height: eye.size / 8,
          left: "40%",
          top: "35%",
          opacity: 0.8,
        }}
        animate={{
          opacity: isBlinking ? 0 : [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </motion.div>
  )
}
