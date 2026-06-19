"use client"

import { useEffect, useState } from "react"

export interface Anchor {
  id: string
  title: string
}

interface HeroAnchorsProps {
  anchors: Anchor[]
}

export function HeroAnchors({ anchors }: HeroAnchorsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // offset for fixed header
      
      let found = false
      for (const anchor of anchors) {
        const element = document.getElementById(anchor.id)
        if (element) {
          const { top } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveId(anchor.id)
            found = true
            break
          }
        }
      }
      if (!found && window.scrollY < 200) {
        setActiveId("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [anchors])

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 100 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setActiveId(id)
    }
  }

  if (!anchors || anchors.length === 0) return null

  return (
    <div className="w-full pt-8 pb-4 relative z-20">
      <div className="flex flex-wrap gap-4 items-center justify-start sm:justify-center lg:justify-start">
        {anchors.map((anchor) => (
          <a
            key={anchor.id}
            href={`#${anchor.id}`}
            onClick={(e) => scrollTo(anchor.id, e)}
            className={`
              relative px-6 py-4 bg-white shadow-lg border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group min-w-[140px] flex-1 sm:flex-none text-center
              ${activeId === anchor.id 
                ? "border-[#EE3329]/30 ring-1 ring-[#EE3329] shadow-md shadow-[#EE3329]/10" 
                : "border-white/10"}
            `}
          >
            {/* Top red accent on hover */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-[#EE3329] rounded-t-xl transition-transform origin-left ${activeId === anchor.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            
            <span className={`text-sm md:text-base font-semibold transition-colors ${activeId === anchor.id ? "text-[#EE3329]" : "text-[#221E1F] group-hover:text-[#EE3329]"}`}>
              {anchor.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
