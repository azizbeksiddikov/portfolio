import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Leading a team of data scientists in developing advanced machine learning models for various business applications.",
  },
  {
    title: "AI Engineer",
    company: "Future AI Solutions",
    period: "2018 - 2021",
    description: "Designed and implemented AI-powered solutions for natural language processing and computer vision tasks.",
  },
  {
    title: "Data Analyst",
    company: "Data Insights Co.",
    period: "2016 - 2018",
    description: "Conducted in-depth data analysis and created visualizations to drive business decisions.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

