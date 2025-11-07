import './globals.css'

export const metadata = {
  title: 'Tayron Silva - Desenvolvedor Full Stack',
  description: 'Portfólio e blog de Tayron Silva',
  keywords: ['desenvolvedor', 'react', 'nextjs', 'full stack', 'tayron silva'],
  authors: [{ name: 'Tayron Silva' }],
  openGraph: {
    title: 'Tayron Silva - Desenvolvedor Full Stack',
    description: 'Portfólio e blog de Tayron Silva',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
