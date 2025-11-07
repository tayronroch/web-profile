import "./globals.css";

export const metadata = {
  title: "Tayron Rocha - Desenvolvedor Full Stack",
  description: "Portfólio e blog de Tayron Rocha",
  keywords: ["desenvolvedor", "react", "nextjs", "full stack", "tayron Rocha"],
  authors: [{ name: "Tayron Rocha" }],
  openGraph: {
    title: "Tayron Rocha - Desenvolvedor Full Stack",
    description: "Portfólio e blog de Tayron Rocha",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
