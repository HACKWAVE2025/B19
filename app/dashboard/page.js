"use client"

import { motion } from "framer-motion"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"
import { EmptyState } from "@/components/dashboard/empty-state"

export default function DashboardPage() {
  const router = useRouter()
  const onboardings = useQuery(api.onboarding.getOnboardings, {})
  const isEmpty = !onboardings || onboardings.length === 0

  if (!onboardings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading your campaigns...</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Your Brands</h1>
            <p className="text-gray-600">Select a brand to continue your AI-powered journey</p>
          </div>

          <button
            onClick={() => router.push("/onboarding")}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
          >
            + Add New Brand
          </button>
        </div>

        {isEmpty ? (
          <EmptyState />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {onboardings.map((brand) => (
              <motion.div
                key={brand._id}
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push(`/dashboard/${brand._id}`)}
                className="p-6 border border-border rounded-lg bg-white hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.brandName}
                      className="w-12 h-12 rounded-lg object-contain border border-gray-200"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500 text-xl">🏷️</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-black">{brand.brandName}</h3>
                    <p className="text-gray-600 text-sm capitalize">{brand.tone}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {brand.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  Created on {new Date(brand.createdAt).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}