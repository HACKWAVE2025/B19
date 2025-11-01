"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { BrandStep } from "@/components/onboarding/brand-step"
import { LogoStep } from "@/components/onboarding/logo-step"
import { ToneStep } from "@/components/onboarding/tone-step"
import { PlatformsStep } from "@/components/onboarding/platforms-step"
import { ConfirmStep } from "@/components/onboarding/confirm-step"
import { ProgressBar } from "@/components/onboarding/progress-bar"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

const steps = ["Brand", "Logo", "Tone", "Platforms", "Confirm"]

export default function OnboardingPage() {
  const router = useRouter()
  const saveOnboarding = useMutation(api.onboarding.saveOnboarding)

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    brandName: "",
    logo: "",
    tone: "",
    platforms: [],
  })

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      await saveOnboarding(formData)
      router.push("/dashboard")
    }
  }

  const handleSkip = async () => {
    await saveOnboarding(formData)
    router.push("/dashboard")
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ProgressBar current={currentStep + 1} total={steps.length} />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="brand"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <BrandStep
                  value={formData.brandName}
                  onChange={(brandName) => updateFormData({ brandName })}
                />
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <LogoStep
                  value={formData.logo}
                  onChange={(logo) => updateFormData({ logo })}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="tone"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ToneStep
                  value={formData.tone}
                  onChange={(tone) => updateFormData({ tone })}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="platforms"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <PlatformsStep
                  value={formData.platforms}
                  onChange={(platforms) => updateFormData({ platforms })}
                />
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ConfirmStep formData={formData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-between p-6 border-t border-border">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-6 py-2 text-black disabled:text-gray-400 disabled:cursor-not-allowed hover:text-gray-600 transition-colors"
        >
          Back
        </button>

        <div className="flex gap-4">
          {currentStep === steps.length - 1 && (
            <button
              onClick={handleSkip}
              className="px-6 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Skip
            </button>
          )}
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            {currentStep === steps.length - 1
              ? "Create Campaign"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}