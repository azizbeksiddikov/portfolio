import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hello, I'm [Your Name]<br className="hidden sm:inline" />
          Data Scientist & AI Engineer
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Passionate about leveraging data and AI to solve complex problems and drive innovation.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#projects">View Projects</Link>
        </Button>
      </div>
    </section>
  )
}

