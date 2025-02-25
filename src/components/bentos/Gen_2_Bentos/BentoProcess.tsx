'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Analysis',
    description: 'Deep understanding of current fluorine processes'
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Development of safer, efficient solutions'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Seamless integration into existing systems'
  }
]

export function BentoProcess({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`col-span-2 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-r from-darkGrey to-gray-700 p-6 text-white ${className}`}
    >
      {/* <div className="fixed w-full h-full bg-[#cccccc] bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]"></div> */}

      <div className="absolute top-0 left-0 w-full h-full  bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-tealAccent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-transparent to-transparent "></div>

      <div className="relative h-full w-full">
      <h3 className="text-xl font-semibold mb-4">Our Process</h3>
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="space-y-2">
            <div className="text-sm font-mono text-mintAccent">{step.number}</div>
            <div className="font-semibold">{step.title}</div>
            <div className="text-sm opacity-80">{step.description}</div>
          </div>
        ))}
      </div>
      </div>

 
    </motion.div>
  )
} 