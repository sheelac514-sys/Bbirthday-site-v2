"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function MagicMessages({ onNext }) {

  const cards = [
  {
    title: "More Than a Teacher 👩‍🏫❤️",
    header: "Like a Mother ✨",
    message:
      "Happy Birthday, Ma’am! You don’t just teach us; you care for us like a mother. Having you in school makes me feel safe and happy every single day! 🌸",
    bg: "from-pink-500/30 to-rose-400/30",
  },
  {
    title: "My Constant Support 🤝💖",
    header: "My Kind Guide 🧭",
    message:
      "Thank you for always being on my side. No matter what the problem is, you always listen and support me. Just knowing you are in my corner gives me so much strength! ✨",
    bg: "from-purple-500/30 to-indigo-500/30",
  },
  {
    title: "The Magic of History 📚📜",
    header: "My Inspiration 💡",
    message:
      "You are the reason I love History now! I used to actually hate it, but the way you teach changed everything for me. Thank you for being such an amazing inspiration! 🌟",
    bg: "from-blue-500/30 to-cyan-400/30",
  },
  {
    title: "A Big Wish 🎂🎁",
    header: "Stay Happy 😊",
    message:
      "My biggest wish for you is that you should always be happy, just like how I was in your class! You deserve all the smiles and joy in the world. Please take care of your health too! ❤️🩹",
    bg: "from-yellow-400/30 to-orange-400/30",
  },
]
  
  const [index, setIndex] = useState(0)

  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1)
    } else {
      onNext && onNext()
    }
  }

  return (
    <div
      onClick={nextCard}
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center cursor-pointer"
    >

      {/* Top Heading */}
      <div className="mb-12">
        <div className="text-4xl mb-3">💌</div>
        <h1 className="text-4xl font-bold">Special Messages</h1>
        <p className="text-lg opacity-80 mt-2">to Heena Ma’am!</p>
      </div>

      {/* Animated Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-xl shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-2">
            {cards[index].title}
          </h2>

          <h3 className="text-lg text-pink-300 mb-4">
            {cards[index].header}
          </h3>

          <p className="text-base leading-relaxed opacity-90">
            {cards[index].message}
          </p>
        </motion.div>
      </AnimatePresence>

      <p className="mt-8 text-sm opacity-60">
        Tap anywhere to continue 💕
      </p>

    </div>
  )
}
