"use client"

import { motion } from "framer-motion"

const platforms = ["Instagram", "TikTok", "LinkedIn", "YouTube", "Facebook", "Twitter"]

export function PlatformsStep({ value, onChange} ) {
  const togglePlatform = (platform) => {
    if (value.includes(platform)) {
      onChange(value.filter((p) => p !== platform))
    } else {
      onChange([...value, platform])
    }
  }

  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <div>
        <h2 className="text-3xl font-bold text-black mb-2">Where do you want to advertise?</h2>
        <p className="text-gray-600">Select the platforms where your audience is most active</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {platforms.map((platform) => (
          <motion.button
            key={platform}
            onClick={() => togglePlatform(platform)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg border-2 transition-all ${
              value.includes(platform)
                ? "border-black bg-black text-white"
                : "border-border bg-white text-black hover:border-black"
            }`}
          >
            <span className="font-semibold">{platform}</span>
          </motion.button>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">{value.length}</span> platform{value.length !== 1 ? "s" : ""} selected
        </p>
      </div>
    </motion.div>
  )
}
