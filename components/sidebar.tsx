"use client"

import Link from 'next/link'
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { name: 'home', href: '/' },
  { name: 'experience', href: '/experience' },
  { name: 'projects', href: '/projects' },
]

export default function Sidebar() {
  const pathname = usePathname()
  
  return (
    <aside className="w-48 bg-black text-white p-8 relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-white/20" />
      
      <nav className="absolute left-4 top-0 flex h-screen flex-col justify-center space-y-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link 
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center text-sm transition-colors duration-200",
                isActive ? "text-white" : "text-white/50 hover:text-white/70"
              )}
            >
              <div className={cn(
                "w-2 h-2 rounded-full mr-4",
                isActive ? "bg-white" : "bg-white/50"
              )} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
      <div className="absolute bottom-8 left-4 right-4">
        <div className="flex flex-col space-y-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white/50 hover:text-white">
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white/50 hover:text-white">
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center text-sm text-white/50 hover:text-white">
            <Mail className="mr-2 h-4 w-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

