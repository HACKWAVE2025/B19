"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function LogoStep({ value, onChange }) {
  const [preview, setPreview] = useState(value || null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onChange(reader.result) // send base64 string to parent
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    setPreview(null)
    onChange("")
  }

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2 className="text-3xl font-bold text-black mb-2">Upload Your Brand Logo</h2>
        <p className="text-gray-600">
          Add your brand’s logo to personalize your campaigns
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:border-black transition-colors">
        {preview ? (
          <>
            <img
              src={preview}
              alt="Logo preview"
              className="w-32 h-32 object-contain rounded-lg border border-gray-200 bg-white shadow-sm"
            />
            <button
              onClick={handleRemove}
              className="px-4 py-2 text-sm border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Remove Logo
            </button>
          </>
        ) : (
          <>
            <label
              htmlFor="logo-upload"
              className="cursor-pointer px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Choose File
            </label>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <p className="text-sm text-gray-500">Supported: JPG, PNG, SVG</p>
          </>
        )}
      </div>
    </motion.div>
  )
}