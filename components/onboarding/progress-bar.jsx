"use client"

import { motion } from "framer-motion"

export function ProgressBar({ current, total }) {
  const progress = (current / total) * 100

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-40">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4 }}
        className="h-full bg-black"
      />
    </div>
  )
}
