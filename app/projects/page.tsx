"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    name: "Road Anomaly Detection",
    icon: "/placeholder.svg?height=120&width=120",
    description:
      "Building an AI-powered system for autonomous road inspection. Detect and analyze road anomalies using computer vision and deep learning.",
  },
  {
    id: 2,
    name: "Data Workflow Platform",
    icon: "/placeholder.svg?height=120&width=120",
    description:
      "Streamlining data labeling and annotation processes. Manage large-scale datasets with automated quality control and team collaboration.",
  },
  {
    id: 3,
    name: "Performance Analytics",
    icon: "/placeholder.svg?height=120&width=120",
    description:
      "Real-time performance monitoring and reporting system. Track metrics, generate insights, and automate reporting workflows.",
  },
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen text-black dark:text-white">
      {/* Content */}
      <div className="ml-24 items-center justify-center flex min-h-screen flex-col p-12">
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
      </div>
    </div>
  );
}
