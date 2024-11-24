import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <Image
        src="/placeholder.svg?height=300&width=300"
        alt="Azizbek Siddikov"
        width={300}
        height={300}
        className="rounded-full mb-8"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Azizbek Siddikov</h1>
      <h2 className="text-2xl mb-6 text-center">AI and Data Engineer</h2>
      <p className="text-center text-lg mb-8">
        Passionate about leveraging data and AI to solve complex problems and drive innovation.
      </p>
    </div>
  )
}

