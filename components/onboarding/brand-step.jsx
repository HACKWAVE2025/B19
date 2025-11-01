"use client"

import { motion } from "framer-motion"

export function BrandStep({ value, onChange }) {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <div>
        <h2 className="text-3xl font-bold text-black mb-2">What's your brand name?</h2>
        <p className="text-gray-600">This helps us tailor ads specifically for your brand</p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-black">Brand Name</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your brand name"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-400"
          autoFocus
        />
      </div>

      <p className="text-sm text-gray-500">Examples: Nike, TechCorp, LocalBakery</p>
    </motion.div>
  )
}
