"use client"

import { motion } from "framer-motion"

const tones = ["Friendly", "Professional", "Witty", "Inspirational"]

export function ToneStep({ value, onChange }) {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <div>
        <h2 className="text-3xl font-bold text-black mb-2">What's your brand tone?</h2>
        <p className="text-gray-600">Choose the voice that best represents your brand</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {tones.map((tone) => (
          <motion.button
            key={tone}
            onClick={() => onChange(tone)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg border-2 transition-all ${
              value === tone
                ? "border-black bg-black text-white"
                : "border-border bg-white text-black hover:border-black"
            }`}
          >
            <span className="font-semibold">{tone}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
