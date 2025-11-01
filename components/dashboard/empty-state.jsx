"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-24 text-center"
    >
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto bg-black rounded-lg flex items-center justify-center mb-4">
          <span className="text-3xl">✨</span>
        </div>
        <h2 className="text-2xl font-bold text-black mb-2">No campaigns yet</h2>
        <p className="text-gray-600 mb-8">Create your first campaign to get started with AI-powered ad generation</p>
      </div>

      <Link
        href="/create-campaign"
        className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold"
      >
        Create Your First Campaign
      </Link>
    </motion.div>
  )
}
