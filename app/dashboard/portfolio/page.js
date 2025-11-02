"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PortfolioPage() {
  const mockUser = {
    name: "Shwejan Kumar",
    username: "@shwejan005",
    campaignsCreated: 7,
    totalGenerations: 48,
    joinedAt: "March 2024",
  }

  const videoGenerations = [
    { id: 1, title: "Summer Collection Launch", views: "12.4K", thumbnail: "/videos/video5.mp4" },
    { id: 2, title: "AI Product Teaser", views: "9.1K", thumbnail: "/videos/video2.mp4" },
    { id: 3, title: "Tech Ad Montage", views: "7.8K", thumbnail: "/videos/video3.mp4" },
  ]

  const imageGenerations = [
    { id: 1, title: "Levis Jeans", views: "10.2K", image: "/images/image1.png" },
    { id: 2, title: "Ronaldo Advertising Shoe", views: "12.9K", image: "/images/image2.png" },
    { id: 3, title: "Shoe showcase", views: "8.3K", image: "/images/image3.png" },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-gray-800 pb-6"
        >
          <h1 className="text-4xl font-bold">{mockUser.name}</h1>
          <p className="text-gray-400">{mockUser.username}</p>

          <div className="mt-6 flex gap-6 text-sm text-gray-300">
            <div>
              <span className="text-[#f97316] font-semibold">{mockUser.campaignsCreated}</span> Campaigns
            </div>
            <div>
              <span className="text-[#f97316] font-semibold">{mockUser.totalGenerations}</span> Generations
            </div>
            <div>Joined {mockUser.joinedAt}</div>
          </div>
        </motion.div>

        {/* Video Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-[#f97316]"
          >
            Most Viewed Video Generations
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videoGenerations.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#f97316] transition"
              >
                <div className="aspect-video relative">
                  <video
                    autoPlay
                    muted
                    loop
                    src={video.thumbnail}
                    alt={video.title}
                    fill="true"
                    className="object-cover opacity-90 hover:opacity-100 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.views} views</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Image Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold mb-6 text-[#f97316]"
          >
            Most Viewed Image Generations
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {imageGenerations.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#f97316] transition"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-400">{image.views} views</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
