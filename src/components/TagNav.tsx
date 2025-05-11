// components/TagNav.tsx
'use client'

import { useState } from 'react'
import Tag from './Tag'

type TagNavProps = {
  categories: string[]
}

const TagNav = ({ categories }: TagNavProps) => {
  const [activeTag, setActiveTag] = useState<string>(categories[0])

  const scrollToSection = (category: string) => {
    setActiveTag(category)
    const section = document.getElementById(category)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full flex gap-2 overflow-x-auto py-2 sticky top-0 z-10">
      {categories.map((category) => (
        <Tag
          key={category}
          label={category}
          onClick={() => scrollToSection(category)}
          active={activeTag === category}
        />
      ))}
    </div>
  )
}

export default TagNav
