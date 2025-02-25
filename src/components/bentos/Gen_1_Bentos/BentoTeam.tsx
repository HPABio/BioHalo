'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function BentoTeam() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-darkGrey">Expert Team</h3>
        <div className="flex -space-x-2">
          {[1,2,3,4].map((i) => (
            <div 
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-tealAccent to-mintAccent border-2 border-white"
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-tealAccent border-2 border-white flex items-center justify-center text-white text-xs">
            +8
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Our team of experts brings decades of experience in fluorine chemistry
        </p>
      </div>
    </motion.div>
  )
} 