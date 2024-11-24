"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    name: "Road Anomaly Detection",
    icon: "/placeholder.svg?height=120&width=120",
    description: "Building an AI-powered system for autonomous road inspection. Detect and analyze road anomalies using computer vision and deep learning.",
  },
  {
    id: 2,
    name: "Data Workflow Platform",
    icon: "/placeholder.svg?height=120&width=120",
    description: "Streamlining data labeling and annotation processes. Manage large-scale datasets with automated quality control and team collaboration.",
  },
  {
    id: 3,
    name: "Performance Analytics",
    icon: "/placeholder.svg?height=120&width=120",
    description: "Real-time performance monitoring and reporting system. Track metrics, generate insights, and automate reporting workflows.",
  },
]

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const previousProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen text-black dark:text-white">
      {/* Timeline */}
      <div className="fixed left-12 top-0 h-full w-[1px] bg-white/20">
        <div className="absolute left-0 top-24 -translate-x-1/2 text-sm text-white/50">01</div>
        <div className="absolute left-0 top-48 -translate-x-1/2 text-sm font-bold text-white">02</div>
        <div className="absolute left-0 top-96 -translate-x-1/2 text-sm text-white/50">03</div>
        <div className="absolute left-0 top-[32rem] -translate-x-1/2 text-sm text-white/50">04</div>
      </div>

      {/* Content */}
      <div className="ml-24 flex min-h-screen flex-col p-12">
        <div className="mb-24 flex items-center gap-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <h1 className="text-2xl">selected work</h1>
        </div>

        {/* Projects Carousel */}
        <div className="relative flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 z-10 rounded-full"
            onClick={previousProject}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="flex items-center justify-center gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "transition-all duration-500",
                  index === currentIndex
                    ? "relative z-10 scale-100 opacity-100"
                    : "scale-75 opacity-50"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 h-32 w-32 overflow-hidden rounded-full bg-white/10">
                    <img
                      src={project.icon}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-medium">{project.name}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-10 rounded-full"
            onClick={nextProject}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-12 text-sm text-white/50">
          <div>© 2024 Portfolio</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="hover:text-white">
              github sponsors
            </a>
            <a href="#" className="hover:text-white">
              buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

