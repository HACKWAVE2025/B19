"use client"

import { useParams } from "next/navigation"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function DashboardDetailPage() {
  const { id } = useParams()
  const campaign = useQuery(api.onboarding.getOnboardingById, { id })

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading campaign details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-4">{campaign.brandName}</h1>

        {campaign.logo && (
          <img
            src={campaign.logo}
            alt={campaign.brandName}
            className="w-32 h-32 object-contain mb-6 border rounded-lg"
          />
        )}

        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Tone:</span> {campaign.tone}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Platforms:</span>{" "}
            {campaign.platforms.join(", ")}
          </p>
          <p className="text-gray-500 text-sm">
            Created on {new Date(campaign.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* 🔥 Placeholder for future AI chat / analytics / editing */}
        <div className="mt-8 p-6 border rounded-lg bg-gray-50 text-gray-700">
          <p className="text-center italic">
            AI campaign chat or analytics will appear here.
          </p>
        </div>
      </div>
    </div>
  )
}