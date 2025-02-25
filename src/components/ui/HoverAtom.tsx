'use client'

import { motion } from 'framer-motion'
import AtomDiagram from './AtomDiagram'

interface HoverAtomProps {
  // Base AtomDiagram props
  width?: number
  height?: number
  className?: string
  
  // Animation control props
  hoverAmplitude?: number    // How far the atom moves up/down (in pixels)
  hoverDuration?: number     // Duration of one complete hover cycle (in seconds)
  hoverEase?: string        // Easing function for the hover animation
  initialDelay?: number     // Delay before animation starts (in seconds)
  
  // Additional animation controls
  rotationAngle?: number    // Rotation angle in degrees
  rotationDuration?: number // Duration of one complete rotation
  scaleRange?: [number, number] // Min and max scale values
  scaleDuration?: number    // Duration of scale animation
  shouldRotate?: boolean    // Whether the atom should rotate
  shouldScale?: boolean     // Whether the atom should scale
  shouldHover?: boolean     // Whether the atom should hover
}

export function HoverAtom({
  // Default values for base props
  width = 300,
  height = 300,
  className = "",
  
  // Default values for animation props
  hoverAmplitude = 10,      // 10px up/down movement
  hoverDuration = 2,        // 2 seconds per cycle
  hoverEase = "easeInOut", // Smooth transition both ways
  initialDelay = 0,        // Start immediately
  
  // Default values for additional animations
  rotationAngle = 360,     // Full rotation
  rotationDuration = 20,   // 20 seconds per rotation
  scaleRange = [0.95, 1.05], // Subtle scale effect
  scaleDuration = 2,       // 2 seconds per scale cycle
  shouldRotate = false,    // Rotation off by default
  shouldScale = false,     // Scale off by default
  shouldHover = true,      // Hover on by default
}: HoverAtomProps) {
  return (
    <motion.div
      initial={{ 
        y: 0,
        rotate: 0,
        scale: 1
      }}
      animate={{ 
        y: shouldHover ? [-hoverAmplitude, hoverAmplitude] : 0,
        rotate: shouldRotate ? rotationAngle : 0,
        scale: shouldScale ? scaleRange : 1
      }}
      transition={{
        y: {
          duration: hoverDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: hoverEase,
          delay: initialDelay
        },
        rotate: {
          duration: rotationDuration,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: scaleDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className={className}
    >
      <AtomDiagram 
        width={width}
        height={height}
        electronFill="rgba(34, 85, 102, 0.6)"
        electronStroke="rgba(34, 85, 102, 0.6)"
        shell1Stroke="rgba(34, 85, 102, 0.6)"
        shell2Stroke="rgba(34, 85, 102, 0.6)"
        nucleusFill="rgba(34, 85, 102, 0.6)"
        electronStrokeWidth={1}
      />
    </motion.div>
  )
} 