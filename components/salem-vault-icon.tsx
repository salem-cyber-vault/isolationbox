import React from "react"

interface SalemVaultIconProps {
  className?: string
  size?: number
}

export function SalemVaultIcon({ className = "", size = 24 }: SalemVaultIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer lock ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      
      {/* Lock body */}
      <rect
        x="14"
        y="20"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Lock shackle */}
      <path
        d="M18 20V16C18 12.6863 20.6863 10 24 10C27.3137 10 30 12.6863 30 16V20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Central eye */}
      <circle
        cx="24"
        cy="28"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Eye pupil */}
      <circle
        cx="24"
        cy="28"
        r="2"
        fill="currentColor"
      />
      
      {/* Eye highlight */}
      <circle
        cx="25"
        cy="27"
        r="0.8"
        fill="currentColor"
        opacity="0.4"
      />
      
      {/* Digital circuit lines */}
      <path
        d="M8 24L14 24M34 24L40 24M24 8L24 14M24 34L24 40"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      
      {/* Corner accent dots */}
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="36" cy="12" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="36" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="36" cy="36" r="1" fill="currentColor" opacity="0.6" />
      
      {/* Cyber glitch lines */}
      <path
        d="M16 14L18 14M30 14L32 14M16 38L20 38M28 38L32 38"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  )
}