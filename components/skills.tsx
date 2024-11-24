import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "SQL", "JavaScript"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras"],
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Big Data",
    items: ["Apache Spark", "Hadoop", "Hive", "Kafka"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Google Cloud", "Azure"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

