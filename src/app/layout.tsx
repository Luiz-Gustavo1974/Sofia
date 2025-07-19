import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sofia Enterprise',
  description: 'Sistema de IA Conversacional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
