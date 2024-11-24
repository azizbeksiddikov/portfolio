import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Azizbek Siddikov - AI and Data Engineer Portfolio',
  description: 'Portfolio of Azizbek Siddikov, showcasing projects and experience in AI and Data Engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

