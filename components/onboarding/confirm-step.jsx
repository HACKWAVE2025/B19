"use client"

import { motion } from "framer-motion"

export function ConfirmStep({ formData }) {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <div>
        <h2 className="text-3xl font-bold text-black mb-2">Review your setup</h2>
        <p className="text-gray-600">Everything looks good! Let's create your campaign</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg border border-border">
          <p className="text-sm text-gray-600 mb-1">Brand Name</p>
          <p className="text-lg font-semibold text-black">{formData.brandName || "Not set"}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-border">
          <p className="text-sm text-gray-600 mb-1">Brand Tone</p>
          <p className="text-lg font-semibold text-black">{formData.tone || "Not set"}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-border">
          <p className="text-sm text-gray-600 mb-1">Advertising Platforms</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.platforms.length > 0 ? (
              formData.platforms.map((platform) => (
                <span key={platform} className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm">
                  {platform}
                </span>
              ))
            ) : (
              <span className="text-gray-600">Not set</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
