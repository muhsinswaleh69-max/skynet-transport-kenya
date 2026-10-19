import './globals.css'

export const metadata = {
  title: 'Skynet Transport Kenya',
  description: 'Kenya bus booking platform - Book online get SKY-XXXX code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
