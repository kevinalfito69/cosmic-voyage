'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function StarryCurtainButton() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      router.push('/spaceexploration')
    }, 500)
  }

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDuration = `${Math.random() * 3 + 1}s`
      return star
    }

    const leftCurtain = document.getElementById('left-curtain')
    const rightCurtain = document.getElementById('right-curtain')
    for (let i = 0; i < 100; i++) {
      leftCurtain?.appendChild(createStar())
      rightCurtain?.appendChild(createStar())
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        id="left-curtain"
        className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-b from-blue-900 to-black transition-transform duration-1000 ease-in-out ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      />

      <div 
        id="right-curtain"
        className={`absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-blue-900 to-black transition-transform duration-1000 ease-in-out ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      <div className="absolute top-0 left-0 right-0 text-center py-8 z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
          Space Voyage
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button 
          onClick={handleClick}
          className="bg-[#0f1715] transition-all rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:translate-y-1 active:brightness-75 brightness-75 hover:brightness-110"
          aria-label="Buka Gorden dan Jelajahi Planet"
        >
          {!isOpen && (
            <Image 
              src="/assets/img/planet/image.png" 
              width={100} 
              height={100} 
              alt="Planet" 
              className="shadow-lg rounded-full"
            />
          )}
        </button>
      </div>

      <style >{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          opacity: 0;
          animation: twinkle linear infinite;
        }

        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}