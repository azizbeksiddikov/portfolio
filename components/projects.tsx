import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "Sentiment Analysis Tool",
    description: "Developed a machine learning model to analyze customer sentiment from product reviews.",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["NLP", "Python", "Scikit-learn"],
    link: "#",
  },
  {
    title: "Predictive Maintenance System",
    description: "Created an AI-powered system to predict equipment failures in manufacturing plants.",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["IoT", "Machine Learning", "Time Series Analysis"],
    link: "#",
  },
  {
    title: "Customer Churn Prediction",
    description: "Built a model to predict customer churn for a telecommunications company.",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Data Analysis", "Random Forest", "Feature Engineering"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={100}
                className="rounded-md object-cover"
              />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="rounded-full bg-secondary px-2 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link}>View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

